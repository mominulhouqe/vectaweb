import Image from "next/image";
import backgroundImg from "@/assets/background.png";

const Banner = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center text-white md:px-0 px-4 md:pl-10 py-2 md:py-10 rounded-b-lg shadow-lg h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImg}
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Left Section: Text Content */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold md:leading-relaxed z-10 text-shadow-lg">
          Explore creative solutions that push the boundaries and bring your
          vision to life.
        </h1>

        <button className="btn flex items-center justify-center gap-2 mt-4">
          <a href="#about">About us</a>
          <span>
            <svg
              width={20}
              height={20}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </span>
        </button>
      </div>

      {/* Right Section: Foreground Image */}
      <div className="relative w-full h-full">
        <Image
          src="https://i.ibb.co/Hg4462w/banner.jpg"
          alt="banner"
          fill
          className="object-cover shadow-lg  md:mt-[52px] z-10 opacity-70"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
