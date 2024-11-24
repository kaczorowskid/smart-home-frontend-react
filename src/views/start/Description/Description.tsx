import AppBlackPhone from "@/assets/images/app-black-phone.png";
import { Point } from "./Point";
import { points } from "./Description.consts";

export const Description = () => {
  return (
    <section className="flex flex-col items-center justify-between p-5 lg:flex-row lg:min-h-screen lg:p-0">
      <div className="flex-1 flex flex-col justify-center lg:px-14">
        <h1 className="text-4xl font-bold text-center lg:text-left lg:text-6xl">
          Control Your Home Effortlessly. Live Smart.
        </h1>
        <p className="mt-10 text-lg text-center lg:text-left lg:leading-relaxed">
          Start using our smart-home app today and make your home smarter, more
          comfortable, and energy-efficient! Take full control of your home with
          just a few taps. Our smart-home application is designed to simplify
          your daily routine, offering convenience and innovation at your
          fingertips.
        </p>
        {points.map(({ index, title, description }) => (
          <Point index={index} title={title} desription={description} />
        ))}
      </div>
      <div className="h-screen mt-10 lg:mt-0">
        <img
          className="h-full w-full object-cover rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
          src={AppBlackPhone}
          alt="Smart-Home App"
        />
      </div>
    </section>
  );
};
