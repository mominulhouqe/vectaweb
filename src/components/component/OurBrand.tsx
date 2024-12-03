const products = [
  {
    id: "01",
    title: "Job Portal",
    description:
      "A platform designed to bridge the gap between employers and job seekers, offering job postings, application tracking, and an easy interface for both employers and candidates to interact.",
    link: "https://pro-career-phi.vercel.app/",
    // bgClass: "bg-gradient-to-r from-blue-500 to-teal-500",
  },
  {
    id: "02",
    title: "eCommerce Solutions",
    description:
      "An all-in-one eCommerce platform to help entrepreneurs and businesses create, manage, and scale their online stores with ease. Features include product management, payment integrations, order tracking, and a customizable storefront.",
    link: "https://techheim.netlify.app/",
    // bgClass: "bg-gradient-to-r from-teal-500 to-blue-500",
  },
  {
    id: "03",
    title: "Restaurant Management Dashboard",
    description:
      "An interactive dashboard that simplifies restaurant management. Includes features like menu management, order tracking, customer feedback, and real-time analytics to streamline daily operations and boost productivity.",
    link: "https://restaurantmanagement-aac4e.web.app",
    // bgClass: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: "04",
    title: "NFC Tag Tools",
    description:
      "Tools for NFC tag reading, writing, and management. This platform allows users to easily manage and track NFC tags, ideal for applications in asset management, event ticketing, and contactless transactions.",
    link: "https://play.google.com/store/apps/details?id=com.alorferi.nfc_rw",
    // bgClass: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: "05",
    title: "NFC QR Tools",
    description:
      "A tool for creating and managing NFC-enabled QR codes. This platform allows businesses and individuals to generate NFC-QR codes for contactless marketing, payments, and information sharing.",
    link: "https://play.google.com/store/apps/details?id=com.alorferi.smartintrocard",
    // bgClass: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    id: "06",
    title: "ChutiGo",
    description:
      "ChutiGo is an essential app for government and private employees in Bangladesh. It provides a comprehensive list of public holidays in Bangladesh, helping users plan their leave and manage work schedules effectively.",
    link: "https://play.google.com/store/apps/details?id=com.provatsoft.apps.govtholidaysbd",
    // bgClass: "bg-gradient-to-r from-pink-500 to-pink-800",
  },
];

const OurBrand = () => {
  return (
    <div className="px-4 py-10 ">
      {/* Header Section */}
      <div className="text-center grid md:grid-cols-2 justify-between  py-12 md:py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Product</h1>
        <h5 className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our product range encompasses cutting-edge software solutions, such as
          a no-code website builder, robust eCommerce platforms, intuitive
          eLearning tools, an open-source icon library, and much more, tailored
          to meet a wide variety of digital requirements.
        </h5>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 overflow-hidden  rounded"
          >
            <div className={` p-6`}>
              <h6 className="text-2xl ">{product.id}</h6>
              <h1 className="text-5xl font-semibold mt-4">{product.title}</h1>
            </div>
            <div className="p-6 my-20">
              <p className="text-gray-600 text-base">{product.description}</p>
              <a
                href={product.link}
                target="_blank"
                className="flex items-center mt-14 gap-1"
              >
                <div className="inline-block  text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  Learn More
                </div>
                <span>
                  <svg
                    width={15}
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="blue"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrand;
