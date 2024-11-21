import AppBlackLeft from "@/assets/images/app-black-left.png";
import { Button } from "@/components/ui/button";
import { routesPath } from "@/routes/routesPath";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleGoToAuth = () => {
    navigate(routesPath.auth.login);
  };

  return (
    <section className="bg-[#3a387f] text-white h-screen flex items-center justify-between">
      <div className="max-w-[900px] px-24 ">
        <h1 className=" mt-10 text-6xl font-bold text-center">
          Transform Your Living Space with Smart-Home Technology.
        </h1>
        <p className="mt-10 text-2xl text-center">
          Discover the future of home automation with our smart-home
          application. Effortlessly control your blinds, monitor temperature and
          humidity, and centralize all your home’s essential functions in one
          intuitive platform. Designed with simplicity and modern living in
          mind, our app helps you save energy, increase comfort, and take full
          control of your home environment. Start your smart-home journey today
          and experience the convenience of a truly connected lifestyle!
        </p>
        <Button
          className="mt-10 w-full bg-white text-black"
          onClick={handleGoToAuth}
        >
          Get Started
        </Button>
      </div>
      <div className="h-[80%]">
        <img className="rounded-l-3xl h-full" src={AppBlackLeft} />
      </div>
    </section>
  );
};
