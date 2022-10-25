import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="">
      <div className="md:flex justify-between max-w-screen-xl mx-9 md:mx-auto gap-8 pb-10">
        <div className="flex-grow mb-9 md:mb-0">
          <h1 className="font-bold text-2xl text-blue-700 mb-5">Travelku</h1>
          <p className="text-stone-600 text-sm">Traveling mudah dan nyaman</p>
          <p className="text-stone-600 text-sm">
            Jl. Candi panggung barat, No.36b, Lowokwaru, Malang, Indonesia
          </p>
        </div>

        <div>
          <p className="text-stone-600 text-sm">
            Kunjungi sosial media kami untuk berita-berita terbarunya
          </p>
          <div className="flex gap-5 mt-5">
            <AiFillFacebook size={32} />
            <AiFillInstagram size={32} />
            <AiFillYoutube size={32} />
            <AiFillMail size={32} />
          </div>
        </div>
      </div>
      <div className="border-t border-[#cdcdcd] max-w-screen-xl mx-auto py-4">
        <p className="text-center text-sm">Copyright @2022</p>
      </div>
    </footer>
  );
};

export default Footer;
