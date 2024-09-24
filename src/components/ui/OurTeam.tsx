import Image from "next/image";

const OurTeam = async () => {
  const res = await fetch(
    "https://vectaweb-backend.vercel.app/api/teamMembers",
    {
      cache: "no-store",
    }
  );
  const teamMembers = await res.json();

  return (
    <div>
      <section id="about" className="max-w-7xl w-full mx-auto">
        <div className="  px-6 mb-24 text-center">
          <div className="text-center mb-12">
            <h2 className=" text-3xl md:text-5xl font-semibold mb-4 underline   text-teal-600 underline-offset-4">
              Our Team Members
            </h2>
            <p className=" text-lg font-light max-w-2xl w-full mx-auto">
              Meet Our Software Development Team A Passionate Group of Experts
              Crafting Innovative Solutions Delivering Excellence in Every Line
              of Code
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 w-full text-left translate-y-14 lg:translate-y-16">
            {teamMembers.map((member: any) => (
              <div
                key={member.id}
                className="relative h-96 w-full rounded-lg overflow-hidden group border"
              >
                <Image
                  src={member.image}
                  alt={`${member.name}'s Avatar`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-950 hover:opacity-70 overflow-hidden h-0 transition-height duration-500 group-hover:h-full flex justify-center items-end">
                  <div className="bg-black bg-opacity-95 opacity-100 w-full py-2">
                    <div className="text-white py-1.5 text-center">
                      <h4 className="text-xl font-light">{member.name}</h4>
                      <p className="text-base font-light">{member.role}</p>
                    </div>
                    <div className="flex justify-center gap-2 py-1.5">
                      <a href={member.facebook} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 fill-white"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                      </a>
                      <a href={member.linkedin} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 fill-white"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
