import AppWhiteRight from "@/assets/images/app-white-right.png";
import { features } from "./Adventage.consts";

export const Adventage = () => (
  <section className="flex flex-col items-center justify-between p-5 lg:flex-row-reverse lg:h-screen lg:p-0">
    <div className="flex-1 flex flex-col justify-center lg:px-24">
      <h1 className="text-4xl font-bold text-center text-custom-salmon lg:text-left lg:text-6xl">
        Smart-Home Application Features.
      </h1>
      <p className="mt-10 text-lg text-center lg:text-left lg:leading-relaxed">
        Our smart-home application is designed to bring convenience, efficiency,
        and control to your fingertips. Whether you're at home or on the go,
        enjoy seamless integration and real-time management of your devices.
        Here’s what makes our app stand out:
      </p>
      {features.map(({ icon: Icon, description }) => (
        <p className="mt-10 text-lg flex items-center gap-5 lg:text-xl">
          <Icon className="text-custom-salmon min-w-[40px] min-h-[40px]" />
          <span>{description}</span>
        </p>
      ))}
    </div>
    <div className="flex-1 flex items-center justify-center h-full mt-10 lg:mt-0">
      <img
        className="max-h-full max-w-full object-contain rounded-3xl lg:rounded-r-3xl lg:rounded-l-none"
        src={AppWhiteRight}
        alt="Smart-Home App"
      />
    </div>
  </section>
);
