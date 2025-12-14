import { Link } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

function AuthScreen() {
  const [email, setEmail] = useState("");
  return (
    <div className="hero-bg relative">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-black bg-opacity-75">
        <img
          src="/netflix-logo.png"
          alt="Netflix Logo"
          className="w-32 md:w-52"
        />
        <Link to="/login">
          <button className="bg-red-600 text-white px-2 py-1 rounded">
            Sign In
          </button>
        </Link>
      </header>

      {/* Hero section */}
      <div className="flex flex-col items-center justify-center text-center text-white px-4 py-20 md:py-40 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="flex-1 p-2 rounded bg-black border border-gray-400 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-2 lg:px-6 py-1 md:py-2 rounded flex items-center justify-center mt-2 sm:mt-0 sm:ml-2 text-lg font-medium"
            >
              Get Started
              <ChevronRightIcon className="inline-block w-6 h-6 ml-2" />
            </button>
          </div>
        </form>
      </div>

      {/* Seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 1st section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col md:flex-row  px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enjoy on your TV.
            </h2>
            <p className="text-lg mb-4">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 relative">
            <img src="/tv.png" alt="TV Image" className="mt-4 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 2nd section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row  px-4 md:px-2">
          {/* left side */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="Stranger Things"
                className="mt-4"
              />

              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border-4 border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="Stranger Things Small"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <p className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </p>
                    <p className="text-sm text-blue-500">Downloading...</p>
                  </div>

                  <img
                    src="/download-icon.gif"
                    alt="Downloading Icon"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Download your shows to watch offline.
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      {/* Seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 3rd section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col md:flex-row  px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch everywhere.
            </h2>
            <p className="text-lg mb-4">
              Stream unlimited movies and TV shows on your phone, tablet,
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/device-pile.png"
              alt="TV Image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 4th section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row  px-4 md:px-2">
          {/* left side */}
          <div className="flex-1">
            <div className="relative">
              <img src="/kids.png" alt="Enjoy on your TV" className="mt-4" />

              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border-4 border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="Stranger Things Small"
                  className="h-full"
                />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Create profiles for kids.
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
