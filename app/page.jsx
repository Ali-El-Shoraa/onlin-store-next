import Image from "next/image";
import Hero from "/public/images/hero.svg";

export default function Home() {
  return (
    <div className="container mx-auto px-4 flex items-center gap-24 max-md:flex-col-reverse max-md:text-center max-md:gap-7">
      <div className="flex-1">
        <h1 className="text-6xl font-black max-md:text-2xl">Your Best e-commerce destination!</h1>
        <p className="text-gray-400 text-2xl my-4">
          Discover a world of endless shopping possibilities at our online store. Brawse,choose, and
          and order your favorite prodacts from the comfort of your home.
        </p>
        <button className="bg-[#53c28b] rounded font-bold px-4 py-2 ">Shop Now</button>
      </div>

      <div className="">
        <Image src={Hero} alt="Hero Image" />
      </div>
    </div>
  );
}
