// components/PackageCard.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import image1 from "@/assets/softwaredd.jpg"
import image2 from "@/assets/ui.jpg"
import image3 from "@/assets/clould.jpg"
import image4 from "@/assets/technical.jpg"

const PackageCard = () => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const packages = [
    {
      title: 'Custom Software Development',
      description:
        'Tailored solutions designed to meet your unique business needs and drive growth with innovative technology.',
      image: image1,
      bgColor: 'bg-blue-700',
    },
    {
      title: 'UI/UX Design',
      description:
        'Exceptional design that enhances user experience and interaction, ensuring your software is both beautiful and intuitive.',
      image: image2,
      bgColor: 'bg-teal-600',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable and secure cloud infrastructure designed to enhance your business operations and enable growth.',
      image: image3,
      bgColor: 'bg-purple-600',
    },
    {
      title: 'Technical Support',
      description:
        'Dedicated support to resolve issues quickly, ensuring your software remains operational and effective.',
      image:image4,
      bgColor: 'bg-red-600',
    },
  ];

  return (
    <section className="max-w-7xl w-full mx-auto">
      <div className="w-full lg:px-10 mx-auto -translate-y-12">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:h-72 h-full rounded-3xl text-white mx-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`space-y-4 ${pkg.bgColor} p-4 rounded-lg shadow-lg`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="h-24 w-24 mx-auto">
                <Image
                  className="w-full h-full object-cover rounded-full"
                  src={pkg.image}
                  alt={pkg.title}
                  width={96}
                  height={96}
                />
              </div>
              <h4 className="text-xl font-semibold text-center">{pkg.title}</h4>
              <p className="text-sm text-center">{pkg.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCard;
