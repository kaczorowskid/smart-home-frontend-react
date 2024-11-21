import AppWhiteRight from "@/assets/images/app-white-right.png";
import { features } from "./Adventage.consts";

export const Adventage = () => (
  <section className=" bg-[#3a387f] text-white h-screen flex items-center justify-between">
    <div className="h-[80%]">
      <img className="rounded-r-3xl h-full" src={AppWhiteRight} />
    </div>
    <div className="max-w-[900px] px-24 ">
      <h1 className=" mt-10 text-6xl font-bold text-center text-[#ff8268]">
        Smart-Home Application Features.
      </h1>
      <p className="mt-10 text-2xl">
        Our smart-home application is designed to bring convenience, efficiency,
        and control to your fingertips. Whether you're at home or on the go,
        enjoy seamless integration and real-time management of your devices.
        Here’s what makes our app stand out:
      </p>
      {features.map(({ icon: Icon, description }) => (
        <p className="mt-10 text-xl flex items-center gap-5">
          <Icon className="text-[#ff8268] w-[50px] h-[50px]" />
          <span>{description}</span>
        </p>
      ))}
    </div>
  </section>
);
