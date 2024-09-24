import Image from "next/image";
import { motion } from "framer-motion";
const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "We craft reliable software solutions that tackle complex challenges with precision, ensuring your project’s success.",
    image: "https://i.ibb.co.com/kJNNGT4/software-development.png",
  },
  {
    id: 2,
    title: "Apps Development",
    description:
      "We offer end-to-end app development services, building high-performance apps that deliver an excellent user experience.",
    image: "https://i.ibb.co/fYHhBFY/apps.jpg",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "We build responsive and user-friendly websites that showcase your brand and engage your audience effectively.",
    image: "https://i.ibb.co.com/6XYpMmT/web-develop.png",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Our design team crafts visually appealing and user-centric websites that leave a lasting impression on visitors.",
    image: "https://i.ibb.co.com/JF3HHV8/web-design.png",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help you reach a wider audience with targeted campaigns and strategies designed to drive results.",
    image: "https://i.ibb.co.com/q7hqdmt/digital-Marketing.jpg",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "We design intuitive and aesthetically pleasing user interfaces and experiences to enhance user satisfaction and engagement.",
    image: "https://i.ibb.co.com/fGp7Ykj/image.png",
  },
];

const OurService = () => {
  return (
    <>
      <section id="service" className="max-w-7xl w-full mx-auto py-6 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-8 decoration-teal-500 text-teal-600">
            Our Services: Your Solutions
          </h2>
          <p className="text-lg font-light w-full max-w-2xl mx-auto">
            Discover tailored services designed to address your specific needs
            and elevate your brand’s potential to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.a
                  href="#"
                  className="text-rose-500 font-medium flex items-center transition-transform duration-300 group-hover:underline"
                  whileHover={{ x: 5 }}
                >
                  Know more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurService;

{
  /* 
  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 group">
    <img
      src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
      alt="Software Development"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Software Development
      </h3>
      <p className="text-gray-600 mb-4">
        We craft reliable software solutions that tackle complex
        challenges with precision, ensuring your project’s success.
      </p>
      <a
        href="#"
        className="text-rose-500 font-medium flex items-center transition-transform duration-300 group-hover:underline"
      >
        Know more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
    </div>
  </div>

  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 group">
    <img
      src="imges/apps.jpg"
      alt="Apps Development"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Apps Development
      </h3>
      <p className="text-gray-600 mb-4">
        We offer end-to-end app development services, building
        high-performance apps that deliver an excellent user
        experience.
      </p>
      <a
        href="#"
        className="text-rose-500 font-medium flex items-center transition-transform duration-300 group-hover:underline"
      >
        Know more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
    </div>
  </div>

  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 group">
    <img
      src="imges/web-develop.png"
      alt="Web Development"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Web Development
      </h3>
      <p className="text-gray-600 mb-4">
        We build responsive and user-friendly websites that showcase
        your brand and engage your audience effectively.
      </p>
      <a
        href="#"
        className="text-rose-500 font-medium flex items-center transition-transform duration-300 group-hover:underline"
      >
        Know more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
    </div>
  </div>

  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 group">
    <img
      src="imges/web-design.png"
      alt="Web Design"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Web Design
      </h3>
      <p className="text-gray-600 mb-4">
        Our design team crafts visually appealing and user-centric
        websites that leave a lasting impression on visitors.
      </p>
      <a
        href="#"
        className="text-rose-500 font-medium flex items-center transition-transform duration-300 group-hover:underline"
      >
        Know more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
    </div>
  </div>
  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 group">
    <img
      src="imges/social-media.png"
      alt="Web Design"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Social Media
      </h3>
      <p className="text-gray-600 mb-4">
        We specialize in creating impactful social media strategies
        and content to boost your brand’s visibility and engagement.
      </p>
      <a
        href="#"
        className="text-rose-500 font-medium flex items-center transition-transform duration-300 group-hover:underline"
      >
        Know more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
    </div>
  </div> */
}
