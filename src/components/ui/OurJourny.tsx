

const OurJourny = () => {

    
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 my-6 w-full px-4">
        <div className="max-w-md w-full h-[460px] flex justify-center items-center mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367138.jpg"
            alt="Experience Image"
          />
        </div>

        <div className="max-w-md w-full">
          <h2 className="bg-rose-500 text-white px-6 py-1 rounded-full max-w-xs text-center tracking-wide mb-4">
            EXPERIENCE
          </h2>
          <h2 className="font-semibold text-4xl text-gray-800 mb-6">
            Our Journey
          </h2>
          <p className="font-medium text-lg text-gray-700 leading-relaxed mb-6">
            With over 3 years of experience, we’ve been unearthing the
            <span className="font-bold text-rose-500">
              #StrengthInEveryBrand
            </span>
            we collaborate with. Our team covers every aspect comprehensively,
            including:
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg">
              <div className="w-14 h-14 bg-indigo-200 rounded-full flex justify-center items-center">
                <div className="w-7 h-7 flex justify-center items-center bg-indigo-500 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-lg text-gray-800 mb-2">
                  Design
                </h2>
                <p className="text-gray-600">
                  Every great idea deserves exceptional design.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-indigo-100 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg">
              <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center">
                <div className="w-7 h-7 flex justify-center items-center bg-indigo-500 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-lg text-gray-800 mb-2">
                  Strategy and Planning
                </h2>
                <p className="text-gray-600">
                  Every project serves a clear and strategic purpose.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg">
              <div className="w-14 h-14 bg-indigo-200 rounded-full flex justify-center items-center">
                <div className="w-7 h-7 flex justify-center items-center bg-indigo-500 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-lg text-gray-800 mb-2">
                  Programming
                </h2>
                <p className="text-gray-600">
                  We meticulously handle scheduling and automation.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-indigo-100 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg">
              <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center">
                <div className="w-7 h-7 flex justify-center items-center bg-indigo-500 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-lg text-gray-800 mb-2">
                  Monitoring & Results
                </h2>
                <p className="text-gray-600">
                  Swift insights lead to decisive actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourny;
