// import bag2 from '../public/background/bg.jpg'
export default function Home() {
  const bag2 = "http://localhost:3000/background/bg.jpg";
  return (
    <>
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
        {/* <img src="background/bg.jpg"  className="relative -z-10 w-full h-full opacity-40"/> */}
        <div className="flex justify-center">
          <img
            src="logo/logo_saygon.png"
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
        <div className="flex justify-center">
          <div className=" bg-slate-700 bg-opacity-80 rounded-lg shadow-xl text-2xl font-semibold text-gray-50 text-center mt-24 p-3">
            PROMO & EVENT
          </div>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide relative m-10"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="portal/hotel.jpg"
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
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
