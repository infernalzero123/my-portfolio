import { useState, useEffect } from "react";

// Your existing code in Responsive.jsx

export const useResponsive = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobileOrMedium = () => window.innerWidth <= 1024;
  const [isImageClicked, setIsImageClicked] = useState(false);

  // Menu Open
  useEffect(() => {
    const handleResize = () => {
      if (!isMobileOrMedium() && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    if (!isMobileOrMedium() && isOpen) {
      setIsOpen(false);
    }

    if (isMobileOrMedium()) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Dark Mode Toggler
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "rgb(51, 65, 85)";
      document.body.style.backgroundColor = "rgb(51, 65, 85)";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "rgb(226, 232, 240)";
      document.body.style.backgroundColor = "rgb(226, 232, 240)";
    }
  }, [isDarkMode]);

  useEffect(() => {
    const updateBorderColors = () => {
      const links = document.querySelectorAll("a[data-target]");
      let activeLink = null;

      links.forEach((link) => {
        const targetId = link.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            activeLink = link;
          }
        }
      });

      links.forEach((link) => {
        link.style.borderColor =
          link === activeLink
            ? isDarkMode
              ? "rgb(71 85 105)"
              : "rgb(186 230 253)"
            : "transparent";
      });
    };

    updateBorderColors();

    window.addEventListener("scroll", updateBorderColors);

    return () => {
      window.removeEventListener("scroll", updateBorderColors);
    };
  }, [isDarkMode]);

  const handleLinkClick = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 4 * 16, // Offset for smooth scroll
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY);

      if (window.scrollY > 80) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handleClose = () => {
    setIsImageClicked(false);
  };

  return {
    isDarkMode,
    setIsDarkMode,
    isTop,
    isOpen,
    setIsOpen,
    isImageClicked,
    handleLinkClick,
    handleImageClick,
    handleClose,
  };
};
