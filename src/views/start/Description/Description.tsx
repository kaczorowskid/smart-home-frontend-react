import AppBlackPhone from "@/assets/images/app-black-phone.png";
import { Point } from "./Point/Point";
import { points } from "./Description.consts";

export const Description = () => (
  <section className=" bg-[#3a387f] text-white h-screen flex items-center justify-between">
    <div className="max-w-[900px] px-24">
      <h1 className=" mt-10 text-6xl font-bold text-center">
        Control Your Home Effortlessly. Live Smart.
      </h1>
      <p className="mt-10 text-2xl text-center text-[#d6577c]">
        Start using our smart-home app today and make your home smarter, more
        comfortable, and energy-efficient! Take full control of your home with
        just a few taps. Our smart-home application is designed to simplify your
        daily routine, offering convenience and innovation at your fingertips.
      </p>
      {points.map(({ index, title, description }) => (
        <Point index={index} title={title} desription={description} />
      ))}
    </div>
    <div className="h-screen">
      <img
        className="rounded-l-3xl h-screen object-cover"
        src={AppBlackPhone}
      />
    </div>
  </section>
);
