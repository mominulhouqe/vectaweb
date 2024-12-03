import Image from "next/image";
import backgroundImg from "@/assets/background.png";

const OurJourney = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center text-white p-10 rounded-lg shadow-lg h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImg}
          alt="Background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Right Section: Image */}
      <div className="relative w-full h-full mt-6 md:mt-0">
        <Image
          src="https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367138.jpg"
          alt="Journey"
          fill
          className="object-cover shadow-xl rounded-lg opacity-90"
          priority
        />
      </div>

      {/* Left Section: Text Content */}
      <div className="relative z-10 px-2 sm:px-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gradient bg-clip-text text-transparent mb-4">
          Our Story: Empowering the Digital Future
        </h1>
        <p className="text-lg sm:text-xl  mx-auto md:mx-0 mb-6">
          At Vectaweb, we’re not just building software—we’re creating solutions
          that shape the future. From empowering startups to scaling
          enterprises, our mission is to drive success through innovation,
          cutting-edge technologies, and seamless user experiences.
        </p>
        <p className="text-md sm:text-lg text-gray-200  mx-auto md:mx-0">
          With a passion for excellence, we deliver exceptional digital products
          tailored to each client`s unique needs, ensuring growth, scalability,
          and sustainability in an ever-changing digital world.
        </p>
      </div>
    </div>
  );
};

export default OurJourney;
