import { FcAssistant, FcApproval, FcRating } from "react-icons/fc";

import {
  Navbar,
  Hero,
  Section as SectionComponent,
  Card,
  Footer,
} from "../../components";

import imgPost from "../../assets/images/img-1.jpg";

import { data } from "../../destination";
import { vehicle } from "../../vehicle";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionComponent>
        <div className="mb-32 mx-5 md:mx-0">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="font-bold text-lg">Tempat Populer ⭐</h1>
            <button className="rounded-sm bg-blue-50 px-3 py-1 text-sm hover:text-blue-500 transition-all">
              Lihat semua
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </SectionComponent>
      <SectionComponent>
        <div className="mb-32 mx-5 md:mx-0">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="font-bold text-lg">Sewa mobil dan motor 🚗</h1>
            <button className="rounded-sm bg-blue-50 px-3 py-1 text-sm hover:text-blue-500 transition-all">
              Lihat semua
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
              {vehicle.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </SectionComponent>
      <SectionComponent>
        <div className="mb-32">
          <div className="mb-7">
            <div className="md:w-[500px] mx-auto mb-20">
              <h1 className="text-center font-bold text-3xl mb-5">
                Kenapa Harus Kami ?
              </h1>
              <p className="text-center text-stone-600">
                kita memberikan layanan senyaman mungkin untuk kalian yang ingin
                menikmati liburan yang luar biasa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
              <div className="w-[300px] ">
                <div className="flex justify-center items-center">
                  <div className="bg-[#fad7a3] p-3 rounded-xl mb-4">
                    <FcAssistant size={42} />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-semibold text-lg mb-2">Ansuransi</h2>
                  <p className="text-sm font-light text-stone-600">
                    Kami memberi layanan ansuransi dan menjamin keselamatan
                    setiap perjalan supaya perjalanmu menyenangkan.
                  </p>
                </div>
              </div>
              <div className="w-[300px] ">
                <div className="flex justify-center items-center">
                  <div className="bg-[#d5ffa4] p-3 rounded-xl mb-4">
                    <FcApproval size={42} />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-semibold text-lg mb-2">Profesional</h2>
                  <p className="text-sm font-light text-stone-600">
                    Tim kami sudah mempunyai berbagai pengalaman, jadi kamu
                    tidak perlu khawatir untuk layanan tim kami
                  </p>
                </div>
              </div>
              <div className="w-[300px] ">
                <div className="flex justify-center items-center">
                  <div className="bg-[#ff9b94] p-3 rounded-xl mb-4">
                    <FcRating size={42} />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-semibold text-lg mb-2">Terbaik</h2>
                  <p className="text-sm font-light text-stone-600">
                    Kami sudah melayani ratusan para traveler tentunya kamu
                    tidak perlu lagi untuk itu, ayo mulai liburanmu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
      <SectionComponent>
        <div className="mb-32 mx-5 md:mx-0">
          <div className="mb-7">
            <div className="md:w-[500px] mx-auto mb-20">
              <h1 className="text-center font-bold text-3xl mb-5">Blog</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center md:w-[900px] m-auto">
              <div className="min-w-[280px] md:w-[400px]">
                <div>
                  <img
                    src={imgPost}
                    alt="Thumb Post"
                    className="w-[400px] h-[240px] object-cover rounded-md"
                  />
                </div>
                <div className="px-3 py-2">
                  <h1 className="text-lg font-semibold my-2">
                    Travel untuk Honeymoon
                  </h1>
                  <p className="text-sm text-stone-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum, tempore est excepturi libero quaerat.
                  </p>
                  <p className="text-sm text-blue-500 mt-1 hover:underline cursor-pointer">
                    Baca...
                  </p>
                </div>
              </div>
              <div className="min-w-[280px] md:w-[400px]">
                <div>
                  <img
                    src={imgPost}
                    alt="Thumb Post"
                    className="w-[400px] h-[240px] object-cover rounded-md"
                  />
                </div>
                <div className="px-3 py-2">
                  <h1 className="text-lg font-semibold my-2">
                    Travel untuk Honeymoon
                  </h1>
                  <p className="text-sm text-stone-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum, tempore est excepturi libero quaerat.
                  </p>
                  <p className="text-sm text-blue-500 mt-1 hover:underline cursor-pointer">
                    Baca...
                  </p>
                </div>
              </div>
              <div className="min-w-[280px] md:w-[400px]">
                <div>
                  <img
                    src={imgPost}
                    alt="Thumb Post"
                    className="w-[400px] h-[240px] object-cover rounded-md"
                  />
                </div>
                <div className="px-3 py-2">
                  <h1 className="text-lg font-semibold my-2">
                    Travel untuk Honeymoon
                  </h1>
                  <p className="text-sm text-stone-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum, tempore est excepturi libero quaerat.
                  </p>
                  <p className="text-sm text-blue-500 mt-1 hover:underline cursor-pointer">
                    Baca...
                  </p>
                </div>
              </div>
              <div className="min-w-[280px] md:w-[400px]">
                <div>
                  <img
                    src={imgPost}
                    alt="Thumb Post"
                    className="w-[400px] h-[240px] object-cover rounded-md"
                  />
                </div>
                <div className="px-3 py-2">
                  <h1 className="text-lg font-semibold my-2">
                    Travel untuk Honeymoon
                  </h1>
                  <p className="text-sm text-stone-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum, tempore est excepturi libero quaerat.
                  </p>
                  <p className="text-sm text-blue-500 mt-1 hover:underline cursor-pointer">
                    Baca...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
      <Footer />
    </>
  );
};

export default Home;
