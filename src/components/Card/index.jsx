import { IoMdPin } from "react-icons/io";

const Card = ({ item }) => {
  return (
    <div className="rounded-2xl border border-stone-100 cursor-pointer bg-white">
      <div className="relative">
        <div className="absolute flex w-full rounded-xl justify-end">
          <p className="bg-white rounded-xl text-blue-600 inline m-3 p-3 font-semibold">
            Rp. {item.price}rb
          </p>
        </div>
        <img
          src={item.img}
          alt="Thumb"
          className="w-full h-[200px] md:h-[270px] object-cover rounded-t-xl"
          loading="lazy"
        />
      </div>

      <div className="px-3 pb-3 mt-3">
        <h1 className="font-semibold text-lg mb-1">{item.name}</h1>
        {item.location ? (
          <div className="flex items-center gap-2">
            <IoMdPin color="#ff4040" />
            <p className="font-light text-sm">{item.location}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
