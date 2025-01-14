import "./App.css";
import Carousel from "./Carousel";
import { useResponsive } from "./Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);
import {
  MilestoneIcon,
  ViteIcon,
  ReactIcon,
  PythonIcon,
  PhpIcon,
  JavaIcon,
  JavascriptIcon,
  TypescriptIcon,
  CPPIcon,
  TailwindCSSIcon,
  BootstrapIcon,
  GithubIcon,
  VSCodeIcon,
  MysqlIcon,
  PSIcon,
} from "./RenderIcons";

export const App = () => {
  const {
    isDarkMode,
    setIsDarkMode,
    isTop,
    isOpen,
    setIsOpen,
    isImageClicked,
    handleLinkClick,
    handleImageClick,
    handleClose,
    text,
    showModal,
    fadeOut,
    handleChange,
    handleSubmit,
    maxLength,
  } = useResponsive();

  return (
    <>
      <div className="fixed z-20 top-0 left-0 w-full overflow-hidden pb-5">
        <nav
          className={`bg-slate-100 dark:bg-zinc-800/70 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md transition-all duration-500 shadow ${
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
                    className="w-12 h-12 text-2xl rounded-full"
                  />
                </a>
                <a
                  href="#home"
                  className="text-2xl font-mono text-sky-500 dark:text-slate-100 ml-2"
                >
                  <span className="text-black font-light dark:text-sky-500">
                    Pro
                  </span>
                  <span className="transition-colors duration-100">
                    {":"}File
                  </span>
                </a>
              </div>

              {/* Navbar Links (Desktop) */}
              <div className="hidden z-20 lg:flex space-x-7 items-center">
                <a
                  href="#home"
                  data-target="home"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal px-1 dark:text-slate-100 mt-2 border-b-4 transition-colors delay-100"
                >
                  Home
                </a>
                <a
                  href="#about"
                  data-target="about"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal px-1 dark:text-slate-100 mt-2 border-b-4 transition-colors delay-100"
                >
                  About Me
                </a>
                <a
                  href="#knowledge"
                  data-target="knowledge"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal px-1 dark:text-slate-100 mt-2 border-b-4 transition-colors delay-100"
                >
                  Knowladge
                </a>
                <a
                  href="#education"
                  data-target="education"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal px-1 dark:text-slate-100 mt-2 border-b-4 transition-colors delay-100"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  data-target="contact"
                  onClick={handleLinkClick}
                  className="text-slate-700 font-normal px-1 dark:text-slate-100 mt-2 border-b-4 transition-colors delay-100"
                >
                  Contact
                </a>
                <a
                  onClick={(e) => {
                    handleImageClick(e);
                    setIsOpen(!isOpen);
                  }}
                  className="font-medium text-slate-700 px-1 dark:text-slate-100 transition-colors delay-100 flex items-center hover:scale-110"
                >
                  <MilestoneIcon width={45} height={45} />
                </a>
                <button
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className="p-2 text-slate-700 dark:text-slate-100 bg-transparent hover:text-orange-400 hover:dark:text-sky-400 focus:outline-none rounded-lg transition-all duration-200"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125 ${
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
              <div className="lg:hidden flex items-center space-x-5">
                <a
                  onClick={() => {
                    handleImageClick();
                  }}
                  className="font-medium text-slate-700 dark:text-slate-100 transition-colors delay-100 flex items-center hover:scale-110"
                >
                  <MilestoneIcon width={45} height={45} />
                </a>
                <button
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className="p-2 text-slate-700 dark:text-slate-100 bg-transparent hover:text-orange-400 hover:dark:text-sky-400 focus:outline-none rounded-lg transition-all duration-200"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125 ${
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
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-zinc-900"
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
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-zinc-900"
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
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-zinc-900"
              >
                Knowledge
              </a>
              <a
                href="#education"
                data-target="education"
                onClick={(e) => {
                  handleLinkClick(e);
                  setIsOpen(!isOpen);
                }}
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-zinc-900"
              >
                Education
              </a>
              <a
                href="#contact"
                data-target="contact"
                onClick={(e) => {
                  handleLinkClick(e);
                  setIsOpen(!isOpen);
                }}
                className="block text-center w-full font-normal px-4 py-4 text-slate-700 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-zinc-900"
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </div>

      <section
        id="home"
        className="min-h-screen w-full p-0 pt-20 bg-gradient-to-b from-purple-300/10 dark:from-sky-950/40 to-transparent"
      >
        <div className="py-2 px-2 md:px-6 lg:px-8 max-w-7xl lg:mx-auto">
          <div className="h-[15rem] bg-slate-600 rounded-3xl profilebg overflow-hidden relative">
            <div className="absolute inset-0 h-full w-full bg-slate-900 bg-opacity-40">
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
          <div className="h-5/6 bg-white dark:bg-slate-700">
            <div className="flex flex-wrap space-x-6 p-8">
              {/* Render individual icons */}
              <ViteIcon width={45} height={45} />
              <ReactIcon width={45} height={45} />
              <PythonIcon width={45} height={45} />
              <PhpIcon width={45} height={45} />
              <JavaIcon width={45} height={45} />
              <JavascriptIcon width={45} height={45} />
              <TypescriptIcon width={45} height={45} />
              <CPPIcon width={45} height={45} />
              <TailwindCSSIcon width={45} height={45} />
              <BootstrapIcon width={45} height={45} />
              <GithubIcon width={45} height={45} />
              <VSCodeIcon width={45} height={45} />
              <MysqlIcon width={45} height={45} />
              <PSIcon width={45} height={45} />
            </div>
            <div className="flex flex-wrap space-x-6 p-8">
              <div className="relative group">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="2x"
                  className="text-slate-700 dark:text-slate-200 transition-transform duration-300 hover:scale-125 hover:text-sky-600"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Facebook
                </div>
              </div>
              <div className="relative group">
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  size="2x"
                  className="text-slate-700 dark:text-slate-200 transition-transform duration-300 hover:scale-125 hover:text-sky-800"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  LinkedIn
                </div>
              </div>
              <div className="relative group">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  size="2x"
                  className="text-slate-700 dark:text-slate-200 transition-transform duration-300 hover:scale-125 hover:text-black"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Github
                </div>
              </div>

              <div className="relative group">
                <FontAwesomeIcon
                  icon="fa-regular fa-envelope"
                  size="2x"
                  className="text-slate-700 dark:text-slate-200 transition-transform duration-300 transform hover:scale-125 hover:text-rose-600"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Gmail
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="knowledge" className="min-h-96 w-full p-0">
        <div className="h-full py-5 px-2 md:px-6 lg:px-8 max-w-7xl lg:mx-auto">
          <h1 className="text-gray-500 dark:text-gray-200">About Section</h1>
          <div className="h-5/6 bg-slate-600"></div>
        </div>
      </section>
      <section id="education" className="min-h-96 w-full p-0">
        <div className="h-full py-5 px-2 md:px-6 lg:px-8 max-w-7xl lg:mx-auto">
          <h1 className="text-gray-500 dark:text-gray-200">About Section</h1>
          <div className="flex flex-col h-96 items-center justify-center bg-slate-600">
            <div className="App">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      <footer id="contact" className="relative min-h-[24rem] w-full p-0 m-0">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 dark:bg-opacity-80 z-10 p-0">
          <div className="grid w-full mx-auto shadow p-0 bg-zinc-900/95">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto shadow bg-gradient-to-b from-sky-950/70 to-transparent">
              <div className="relative flex flex-col justify-center items-center p-5 md:px-6 lg:px-8 text-center">
                <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-zinc-300/50 to-transparent border-none"></div>
                <div className="flex flex-row justify-center items-center space-x-8 mb-5">
                  <a
                    href="https://vitejs.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ViteIcon width={35} height={35} />
                  </a>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ReactIcon width={35} height={45} />
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <JavascriptIcon width={35} height={35} />
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TailwindCSSIcon width={60} height={60} />
                  </a>
                  <a
                    href="https://fontawesome.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-font-awesome"
                      size="2x"
                      className="text-sky-500"
                    />
                  </a>
                </div>

                <p className="text-sm px-4 text-slate-100">
                  This website is built with Tailwind CSS, Vite, and React. It
                  uses icons from the Fortawesome Free Icon Package and SVGs
                  from free providers. All credits go to the respective owners.
                  This non-commercial site is freely accessible as a token of
                  appreciation to the resource providers. Enjoy exploring their
                  offerings!
                </p>
              </div>
              <div className="flex flex-col items-start h-full p-5 px-10 lg:px-16 text-center">
                <h1 className="text-lg text-slate-100 font-semibold mb-3">
                  Contact Me
                </h1>
                <div className="flex flex-row justify-center items-center space-x-8 mb-10">
                  <div className="relative group">
                    <FontAwesomeIcon
                      icon="fa-brands fa-facebook"
                      size="2x"
                      className="text-slate-400 transition-transform duration-300 hover:scale-125 hover:text-sky-700 hover:shadow-lg hover:shadow-sky-700 rounded-full"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Facebook
                    </div>
                  </div>
                  <div className="relative group">
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin"
                      size="2x"
                      className="text-slate-400 transition-transform duration-300 hover:scale-125 hover:text-blue-800 hover:shadow-lg hover:shadow-blue-800"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      LinkedIn
                    </div>
                  </div>
                  <div className="relative group">
                    <FontAwesomeIcon
                      icon="fa-brands fa-github"
                      size="2x"
                      className="text-slate-400 transition-transform duration-300 hover:scale-125 hover:text-black hover:shadow-lg hover:shadow-gray-600 rounded-full"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Github
                    </div>
                  </div>

                  <div className="relative group">
                    <FontAwesomeIcon
                      icon="fa-regular fa-envelope"
                      size="2x"
                      className="text-slate-400 transition-transform duration-300 transform hover:scale-125 hover:text-rose-600 hover:shadow-lg hover:shadow-rose-600 rounded"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-max rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Gmail
                    </div>
                  </div>
                </div>
                <div className="w-full text-start">
                  <h1 className="text-lg text-slate-100 font-semibold">
                    Provide Feedback
                  </h1>
                  <form className="relative mt-8 w-full max-w-lg">
                    {/* Modal notification */}
                    {showModal && (
                      <div
                        className={`absolute bottom-0 right-0 text-center bg-green-500 text-white p-2 px-4 rounded shadow-md transition-opacity duration-1000 flex items-center space-x-1 ${
                          fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <span>Thank you for your feedback!</span>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Noto_Emoji_v2.034_263a.svg/640px-Noto_Emoji_v2.034_263a.svg.png"
                          alt="Grinning Face Emoji"
                          className="text-xl"
                          style={{ width: "24px", height: "24px" }}
                        />
                      </div>
                    )}

                    {/* Textarea for user input */}
                    <textarea
                      className="w-full h-40 p-2 text-zinc-700 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Write your feedback here..."
                      maxLength={maxLength}
                      value={text}
                      onChange={handleChange}
                    ></textarea>

                    {/* Character count */}
                    <div className="text-right text-sm text-zinc-500">
                      {text.length}/{maxLength} characters
                    </div>

                    {/* Submit button */}
                    <button
                      type="button"
                      className={`mt-4 px-5 py-1 font-thin rounded transition duration-300 ${
                        text.trim()
                          ? "bg-rose-900 text-slate-100 hover:bg-rose-800"
                          : "bg-gray-400 text-gray-200"
                      }`}
                      onClick={handleSubmit}
                      disabled={!text.trim()}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end h-20 w-full font-normal text-center lg:text-right text-sm bg-zinc-900/95 text-slate-100 px-2 md:px-6 lg:px-8 lg:mx-auto">
            <p className="transition-colors duration-0">
              © 2025 Paul Rey Morales Cabas | Portfolio. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
