import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const bag2 = "background/bg.jpg";
  return (
    <>
      <Head>
        <title>Saygon Park</title>
      </Head>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${bag2})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center">
          <Image
            src="logo/logo_saygon.png"
            alt="Saygonpark Logo"
            height={200}
            width={200}
            className="lg:w-1/4 md:w-2/4 sm:w-3/4"
          />
        </div>
        <div className="bg-slate-700 my-10 lg:mx-32 md:mx-20 rounded-lg shadow-lg bg-opacity-80 px-10 py-10">
          <h4 className="text-gray-50 text-center font-semibold text-2xl">
            Selamat Datang di Website Resmi Saygon Group
          </h4>
          <p className="text-gray-50 text-md  mt-5 text-center">
            Hallo semuanya, selamat datang di website resmi Saygon Park, kami
            memberikan layanan terbaik untuk anda menikmati liburan bersama kami
            di Saygon Group
          </p>
        </div>
        {/* PORTAL SAYGON GROUP */}
        <div className="flex justify-center">
          <h3 className="bg-slate-700 bg-opacity-80 rounded-lg shadow-xl text-2xl font-semibold text-gray-50 mt-24 p-3">
            PORTAL SAYGON PARK
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 mx-20">
          <div className="m-5 flex-col hover:scale-125 ease-in-out duration-300">
            <img
              src="portal/swp.jpg"
              alt="Saygon Waterpark"
              className="h-72 w-72 rounded-full border-4 border-sky-600 shadow-lg mx-auto"
            />
            <div className="flex justify-center my-4 bg-sky-600 p-4 rounded-lg shadow-lg mx-10">
              <label className="font-semibold text-xl text-gray-50">
                Saygon Waterpark
              </label>
            </div>
          </div>
          <div className="m-5 hover:scale-125 ease-in-out duration-300">
            <img
              src="portal/wkk.jpg"
              alt="Saygon Waterpark"
              className="h-72 w-72 rounded-full border-4 border-lime-700 shadow-lg mx-auto"
            />
            <div className="flex justify-center my-4 bg-lime-700 p-4 rounded-lg shadow-lg mx-5">
              <label className="font-semibold text-xl text-amber-200">
                Wisata Kebun Kurma
              </label>
            </div>
          </div>
          <div className="m-5 hover:scale-125 ease-in-out duration-300">
            <img
              src="portal/hotel_crop.jpg"
              alt="Saygon Waterpark"
              className="h-72 w-72 rounded-full border-4 border-sky-700 shadow-lg mx-auto"
            />
            <div className="flex justify-center my-4 bg-sky-100 p-4 rounded-lg shadow-lg mx-5 border-2 border-sky-700">
              <label className="text-sky-700 font-semibold text-xl">
                Saygon Hotel & Cottage
              </label>
            </div>
          </div>
        </div>

        {/* PROMO AND EVENT */}
        <div id="default-carousel" className="relative" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                First Slide
              </span>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>

        {/* FOOTER */}
        <div>
          <p className="font-bold text-md text-slate-800 text-center py-10">
            2022 © Saygon Park
          </p>
        </div>
      </div>
    </>
  );
}
