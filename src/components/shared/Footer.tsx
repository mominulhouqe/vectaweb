import brandLogo from "@/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div>
            <Image
              src={brandLogo}
              alt="Logo"
              className="w-20 rounded-md  mb-1 shadow-lg"
            />
            <p className="w-28 font-bold">VectaWeb</p>
            <div className="w-32 h-px bg-green-500 my-4"></div>
            <div className="flex items-center gap-4 hover:text-green-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-rose-400"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>

              <p>
                Dhaka <br />
                Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4 hover:text-green-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-rose-400"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p>vectawebbd@gmail.com</p>
            </div>

            <div className="flex items-center gap-4 hover:text-green-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-rose-400"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>

              <p>Let's chat</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6">Services</h2>

            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>Web Development</p>
            </div>
            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>Web Design</p>
            </div>
            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>Mobile Apps Development</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6">Quick Links</h2>
            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>Privacy policies</p>
            </div>
            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>Blog</p>
            </div>
            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>FAQ`s</p>
            </div>
            <div className="flex items-center gap-4 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-rose-400"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
              <p>Client</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6">Join our community</h2>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="p-3 rounded-3xl w-full text-black"
              />
              <button className="absolute right-0 top-2 mr-2 p-1 px-4 rounded-3xl bg-blue-950 font-medium">
                Subscribe
              </button>
            </div>
            <p>Touch us by email or phone.</p>

            <div className="my-4 flex gap-2 items-center">
              <span className="bg-green-500 hover:bg-black p-2 rounded-full duration-300">
                <a
                  href="https://www.facebook.com/profile.php?id=61563945374311"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-white bg-transparent"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
              </span>
              <a
                href="https://www.instagram.com/vectawebbd/"
                target="_blank"
                className="bg-green-500 hover:bg-black p-2 rounded-full duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-white bg-transparent"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
