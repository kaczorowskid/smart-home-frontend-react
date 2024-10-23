export const Room = ({ src }: { src: string }) => {
  return (
    <div className="h-[300px] relative">
      <img className="object-cover h-full w-full rounded-xl" src={src} />
      <div className="absolute top-0 w-full h-full text-4xl">
        <div className="bg-black text-white h-full opacity-30 flex items-end justify-end p-2">
          Room
        </div>
      </div>
    </div>
  );
};
