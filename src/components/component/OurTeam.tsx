import {
  FaRobot,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaVideo,
  FaTasks,
  FaChartLine,
  FaUserAlt,
  FaSearch,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";

const categories = [
  {
    id: "1",
    icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
    name: "Software Development",
    description:
      "Develop robust and scalable software solutions that streamline operations and solve real-world problems.",
  },
  {
    id: "2",
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
    name: "App Development",
    description:
      "Build intuitive, high-performance mobile applications that make an impact across devices.",
  },
  {
    id: "3",
    icon: <FaBullhorn className="text-4xl text-yellow-500" />,
    name: "Digital Marketing",
    description:
      "Implement innovative digital marketing strategies to amplify your brand’s reach and engagement.",
  },
  {
    id: "4",
    icon: <FaRobot className="text-4xl text-blue-500" />,
    name: "AI Development",
    description:
      "Leverage the power of artificial intelligence to create smarter solutions that transform industries.",
  },
  {
    id: "5",
    icon: <FaPaintBrush className="text-4xl text-purple-500" />,
    name: "Graphic Design",
    description:
      "Create visually compelling designs that communicate your brand’s message and identity effectively.",
  },
  {
    id: "6",
    icon: <FaVideo className="text-4xl text-red-500" />,
    name: "Video Editing",
    description:
      "Transform raw footage into captivating visual stories that engage, inform, and entertain audiences.",
  },
  {
    id: "7",
    icon: <FaTasks className="text-4xl text-orange-500" />,
    name: "Project Management",
    description:
      "Manage projects from start to finish, ensuring timely delivery and successful outcomes for clients.",
  },
  {
    id: "8",
    icon: <FaChartLine className="text-4xl text-teal-500" />,
    name: "Sales",
    description:
      "Drive revenue and growth through effective sales strategies, building strong client relationships.",
  },
  {
    id: "9",
    icon: <FaUserAlt className="text-4xl text-pink-500" />,
    name: "UI/UX Design",
    description:
      "Design user-friendly interfaces and seamless experiences to enhance customer satisfaction and engagement.",
  },
  {
    id: "10",
    icon: <FaSearch className="text-4xl text-indigo-500" />,
    name: "Research",
    description:
      "Explore new ideas and opportunities through comprehensive research, delivering insights to guide strategy.",
  },
  {
    id: "11",
    icon: <FaShieldAlt className="text-4xl text-gray-500" />,
    name: "Security",
    description:
      "Ensure the highest standards of cybersecurity to protect businesses and users from evolving threats.",
  },
];

const OurTeam = () => {
  return (
    <div className="px-4 py-10 bg-gray-50">
      {/* Header Section */}
      <div className="text-center grid md:grid-cols-2 justify-between  py-12 md:py-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Meet Our Team
        </h1>
        <h5 className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our team consists of professionals from diverse fields who work
          together to deliver cutting-edge solutions across various domains.
        </h5>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-6  border">
            <div className="flex justify-center mb-4">{category.icon}</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              {category.name}
            </h4>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
