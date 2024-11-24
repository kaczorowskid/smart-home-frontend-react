import { PointProps } from "./Point.types";

export const Point = ({ index, title, desription }: PointProps) => (
  <p className="mt-10 flex">
    <div className="bg-custom-salmon w-[50px] h-[50px] rounded-full flex justify-center items-center text-3xl font-bold">
      {index}
    </div>
    <div className="ml-6 w-[80%]">
      <div className="text-3xl">{title}</div>
      <div>{desription}</div>
    </div>
  </p>
);
