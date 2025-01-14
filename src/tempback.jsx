import { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  ViteIcon,
  ReactIcon,
  PythonIcon,
  PhpIcon,
  JavaIcon,
  JavascriptIcon,
  TypescriptIcon,
  CPP,
  TailwindCSSIcon,
  BootstrapIcon,
  GithubIcon,
  VSCodeIcon,
  MysqlIcon,
} from "./RenderIcons";

const App = () => {
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

      // Find the active link based on scroll position
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

      // Update border color for all links
      links.forEach((link) => {
        link.style.borderColor =
          link === activeLink
            ? isDarkMode
              ? "rgb(71 85 105)" // Dark mode color
              : "rgb(186 230 253)" // Light mode color
            : "transparent"; // Fallback for non-active links
      });
    };

    // Initial border color update
    updateBorderColors();

    // Update border colors on scroll
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

  // Scroll Event Listener
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

  return (
    <>
      <div className="fixed z-20 top-0 left-0 w-full overflow-hidden pb-5">
        <nav
          className={`bg-slate-100 dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md transition-all duration-500 shadow ${
            isTop ? "rounded-none m-0" : "rounded-3xl mx-2 mt-2"
          }`}
        >
          <div className="max-w-full mx-auto px-5 md:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center justify-end px-5">
                <a href="#home">
                  <img
                    src="../src/img/shield.png"
                    alt=""
                    className="w-12 h-12 text-2xl rounded-full rotate-[-45deg]"
                  />
                </a>
                <a
                  href="#home"
                  className="text-2xl font-mono text-sky-500 dark:text-slate-100 ml-2"
                >
                  <span className="text-black font-light dark:text-sky-500">
                    My:
                  </span>
                  <span className="transition-colors duration-100">
                    &lt;ProFile/&gt;
                  </span>
                </a>
              </div>

              {/* Navbar Links (Desktop) */}
              <div className="hidden z-20 lg:flex space-x- items-center">
                <a
                  href="#home"
                  data-target="home"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal dark:text-slate-100 p-1 px-5 mt-2 border-b-4 transition-colors delay-500"
                >
                  Home
                </a>
                <a
                  href="#about"
                  data-target="about"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal dark:text-slate-100 p-1 px-5 mt-2 border-b-4 transition-colors delay-500"
                >
                  About
                </a>
                <a
                  href="#skills"
                  data-target="skills"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal dark:text-slate-100 p-1 px-5 mt-2 border-b-4 transition-colors delay-500"
                >
                  Skills
                </a>
                <a
                  onClick={(e) => {
                    handleImageClick(e);
                    setIsOpen(!isOpen);
                  }}
                  className="font-medium text-purple-900 dark:text-sky-400 p-1 px-5 mr-2 mt-2 border-b-4 border-slate-500/15"
                >
                  Milestones
                </a>
                <button
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className="p-2 mt-1 text-slate-700 bg-slate-100 dark:text-sky-100 dark:bg-slate-800 hover:text-orange-400 hover:dark:text-sky-400 focus:outline-none rounded-lg transition-all duration-200"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110 ${
                      isDarkMode ? "rotate-0" : "rotate-45"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {isDarkMode ? (
                      // Moon Icon
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    ) : (
                      // Sun Icon
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Hamburger Menu (Mobile) */}
              <div className="lg:hidden space-x-5">
                <button
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className="p-2 text-slate-700 dark:text-slate-100 dark:bg-slate-800 bg-slate-100 hover:text-orange-400 hover:dark:text-sky-400 focus:outline-none rounded-lg transition-all duration-200"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110 ${
                      isDarkMode ? "rotate-0" : "rotate-45"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {isDarkMode ? (
                      // Moon Icon
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    ) : (
                      // Sun Icon
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    )}
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-slate-700 dark:text-slate-100 focus:outline-none rounded-lg transition-all duration-200 md:mr-10"
                >
                  <svg
                    className="w-8 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown Menu (Mobile) */}
          {isOpen && (
            <div className="lg:hidden h-screen bg-transparent backdrop-blur-xl shadow-lg flex flex-col items-center justify-start overflow-hidden focus:outline-none">
              <a
                href="#home"
                data-target="home"
                onClick={(e) => {
                  handleLinkClick(e);
                  setIsOpen(!isOpen);
                }}
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Home
              </a>
              <a
                href="#about"
                data-target="about"
                onClick={(e) => {
                  handleLinkClick(e);
                  setIsOpen(!isOpen);
                }}
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                About
              </a>
              <a
                href="#skills"
                data-target="skills"
                onClick={(e) => {
                  handleLinkClick(e);
                  setIsOpen(!isOpen);
                }}
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Skills
              </a>
              <a
                onClick={(e) => {
                  handleImageClick(e);
                  setIsOpen(!isOpen);
                }}
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Milestones
              </a>
            </div>
          )}
        </nav>
      </div>

      <section
        id="home"
        className="min-h-screen w-full p-0 pt-20 bg-gradient-to-b from-sky-500/5 dark:from-purple-500/10 to-transparent"
      >
        <div className="py-2 px-2 md:px-6 lg:px-8 max-w-7xl lg:mx-auto">
          <div className="h-[15rem] bg-slate-600 rounded-3xl profilebg overflow-hidden relative">
            <div className="absolute inset-0 h-full w-full bg-slate-900 bg-opacity-30">
              {/* Profile Background Wallpaper */}
            </div>
          </div>

          <div className="min-h-20 max-w-full pb-5 top-[-3rem] relative mx-3 bg-slate-100 dark:bg-slate-800 rounded-3xl shadow-lg">
            <div className="flex items-center mb-5">
              <div className="relative">
                {/* Overlay with Blur Effect */}
                {isImageClicked && (
                  <div className="fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center overflow-y-auto overflow-x-hidden">
                    <div className="relative max-w-7xl mix-h-96 mx-auto my-auto py-16 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
                      <div className="absolute top-0 right-10 hover:scale-125">
                        <button
                          onClick={handleClose}
                          className="font-thin text-white text-[3rem] lg:text-[4rem]"
                        >
                          &times;
                        </button>
                      </div>
                      <img
                        className="max-w-96 lg:max-w-xl h-auto border-4 border-slate-100 dark:border-slate-200 transition-transform duration-500 shadow-lg lg:rotate-3"
                        src="/src/img/grad.jpg"
                        alt="Profile"
                      />
                      <div className="px-10 md:px-20 lg:px-5 w-full lg:max-w-96 lg:text-left text-slate-100 space-y-10">
                        <h1 className="text-3xl text-center lg:text-left flex flex-col items-center lg:items-start">
                          <span className="text-base flex items-center text-sky-400">
                            Graduate Batch
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="ml-2 size-12"
                            >
                              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>
                          </span>
                          <span>2019 - 2023</span>
                        </h1>

                        <p className="text-base">
                          Earning my Bachelor of Science in Information
                          Technology (BSIT) from Pamantasan ng Lungsod ng
                          Muntinlupa has been a journey filled with challenges
                          and growth. Balancing the demands of being a working
                          student with a night-shift job, navigating my studies,
                          and overcoming the unique hurdles of the pandemic was
                          far from easy. Yet, with the steadfast support of my
                          family, friends, and professors, I found the strength
                          to persevere. This achievement stands as a testament
                          to resilience, determination, and the rewards of hard
                          work. Congratulations to all the graduates—this is
                          just the beginning of our success stories!
                        </p>
                        <h1 className="text-base">
                          Respectfully Yours:
                          <span className="block"></span>Paul Rey Morales Cabas
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
                <img
                  className="w-28 h-28 md:w-36 md:h-36 ml-5 mt-[-2rem] md:mt-[-3rem] border-4 border-slate-100 dark:border-slate-800 rounded-full cursor-pointer transition-all duration-500"
                  src="/src/img/grad.jpg"
                  alt="Profile"
                  onClick={handleImageClick}
                />
              </div>
              <div className="ml-4">
                <h1 className="text-lg font-medium text-sky-800 dark:text-sky-500">
                  PAUL REY MORALES CABAS
                </h1>
                <span className="mt-0 mb-5 text-sm font-mono text-gray-500 dark:text-gray-200 block">
                  Programmer | Web Designer | Digital Innovator
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
              <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl">
                <p className="font-thin text-gray-500 dark:text-gray-200">
                  <span className="block text-xl font-semibold">
                    Objectives:
                  </span>
                  Empowering the future through innovation, we bridge ideas and
                  technology to create solutions that inspire, connect, and
                  transform. Every line of code is a step toward progress, every
                  system built is a foundation for dreams. In IT, we don’t just
                  solve problems; we shape possibilities. Innovate. Inspire.
                  Impact.
                </p>
              </div>
              <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl">
                <p className="font-thin text-gray-500 dark:text-gray-200">
                  <span className="block text-xl font-semibold">Mission:</span>
                  To craft innovative and user-centric digital experiences that
                  empower businesses and individuals, combining programming
                  expertise, web design creativity, and forward-thinking digital
                  innovation. I am dedicated to delivering solutions that not
                  only meet present needs but also inspire future possibilities.
                  <span className="block text-xl font-semibold">Vision: </span>
                  To be a leading force in the digital landscape, transforming
                  ideas into impactful realities through seamless web design,
                  robust programming, and visionary digital innovations. By
                  pushing the boundaries of technology and creativity, I aim to
                  create a connected and inclusive digital future that inspires
                  and uplifts communities worldwide.
                </p>
              </div>
              <div className="p-4 bg-gray-200 dark:bg-gray-700 col col-span-1 md:col-span-2 xl:col-span-1 rounded-xl">
                <p className="font-thin text-gray-500 dark:text-gray-200">
                  <span className="block text-xl font-semibold">
                    What I Do I
                  </span>
                  specialize in creating seamless, user-focused digital
                  experiences by combining my expertise in web development,
                  UI/UX design, and backend systems. Whether designing intuitive
                  interfaces or building robust backend solutions, I deliver
                  end-to-end web solutions tailored to meet both aesthetic and
                  functional needs. Web Development: Crafting responsive,
                  high-performance websites and web applications using modern
                  technologies and frameworks. UI/UX Design: Designing engaging
                  and user-friendly interfaces that enhance the overall user
                  experience, ensuring accessibility and usability across all
                  devices. Backend Development: Developing efficient and
                  scalable backend systems, managing databases, and ensuring
                  smooth integration with frontend components. Data Management:
                  Organizing, storing, and analyzing data to ensure seamless
                  functionality and decision-making in digital environments. I
                  bring creative solutions to life by combining design and
                  technology to create intuitive, reliable, and impactful
                  digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="h-screen w-full bg-slate-300 dark:bg-lime-800 p-0"
      >
        <div className="h-full py-5 px-2 md:px-6 lg:px-8 max-w-7xl lg:mx-auto">
          <h1 className="text-gray-500 dark:text-gray-200">About Section</h1>
          <div className="h-5/6 bg-slate-600">
            <div className="flex flex-wrap space-x-6 p-8">
              {/* Render individual icons */}
              <ViteIcon width={45} height={45} />
              <ReactIcon width={45} height={45} />
              <PythonIcon width={45} height={45} />
              <PhpIcon width={45} height={45} />
              <JavaIcon width={45} height={45} />
              <JavascriptIcon width={45} height={45} />
              <TypescriptIcon width={45} height={45} />
              <CPP width={45} height={45} />
              <TailwindCSSIcon width={45} height={45} />
              <BootstrapIcon width={45} height={45} />
              <GithubIcon width={45} height={45} />
              <VSCodeIcon width={45} height={45} />
              <MysqlIcon width={45} height={45} />
            </div>
            <div className="flex flex-wrap space-x-6 p-8">
              <FontAwesomeIcon
                icon={faCoffee}
                size="2x"
                className="text-blue-500 hover:text-blue-700"
              />
              <FontAwesomeIcon
                icon={faHome}
                size="2x"
                className="text-green-500 hover:text-green-700"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="h-screen w-full bg-slate-300 dark:bg-lime-800 p-0"
      >
        <div className="h-full py-5 px-2 md:px-6 lg:px-8 max-w-7xl lg:mx-auto">
          <h1 className="text-gray-500 dark:text-gray-200">About Section</h1>
          <div className="h-5/6 bg-slate-600"></div>
        </div>
      </section>
    </>
  );
};

export default App;
