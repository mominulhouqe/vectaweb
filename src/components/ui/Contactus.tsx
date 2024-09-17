import React from 'react';

const Contactus = () => {
    return (
        <div>
           
      <section
        id="contact"
        className="relative max-w-7xl w-full md:h-[90vh] h-screen mx-auto bg-blue-950 mb-16"
      >
        <img
          className="absolute h-full w-full object-cover opacity-50"
          src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=cae8s_ncw2axGBVrD5vJR6DBqmVbQkKfAP1ecKUvQzQ="
          alt=""
        />
        <div className="w-full h-full absolute z-10">
          <div
            className="md:w-4/5 w-full mx-auto h-full flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:py-12 px-6 md:px-0"
          >
            <div className="max-w-1/2 w-full h-full mx-auto text-white">
              <button
                className="my-6 bg-green-500 rounded-full hover:-translate-y-1 transform duration-300 font-medium py-2 px-8 cursor-pointer text-white"
              >
                CONTACT US
              </button>
              <h2 className="text-3xl font-light mb-6">Let's talk</h2>
              <p className="font-light text-base">
                We are IT farm it's totaly remotely company.If you interset and
                build your dream Web Application and Mobile App. please Contact
                Us
              </p>
              <div className="grid grid-cols-2 md:gap-8 gap-5 my-6">
                <div className="flex gap-3 items-center">
                  <span
                    className="bg-green-500 rounded-full md:h-12 md:w-12 w-10  fill-white flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-2.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-light">Telegram</h2>
                    <p className="font-light">01937985805</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <span
                    className="bg-green-500 rounded-full md:h-12 md:w-12 w-10  fill-white flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-2.5"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-light">Whatsapp</h2>
                    <p className="font-light">01937985805</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <span
                    className="bg-green-500 rounded-full md:h-12 md:w-12 w-10  fill-white flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-2.5"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-light">Email</h2>
                    <p className="font-light">vectawebbd@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <span
                    className="bg-green-500 rounded-full md:h-12 md:w-12 w-10  fill-white flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-2.5"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-light">Phone</h2>
                    <p className="font-light">01937985805</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="max-w-1/2 w-full mx-auto flex justify-cente items-center"
            >
              <form
                className="h-full md:w-5/6 w-full rounded-xl bg-gray-200 px-4 py-4 mx-auto"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Topic"
                  className="w-full p-2 rounded-lg border border-gray-400 mb-6 bg-gray-200 focus:outline-none placeholder:font-light placeholder:text-xl"
                />

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Context"
                  className="w-full border border-gray-400 rounded-lg p-2 bg-gray-200 focus:outline-none placeholder:font-light placeholder:text-xl"
                ></textarea>
                <button
                  className="my-6 bg-green-500 rounded-full hover:bg-green-500 font-medium py-2 px-8 cursor-pointer hover:-translate-y-2 transform ease-in-out duration-500 text-white"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Contactus;