import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routesPath } from "@/routes/routesPath";
import AppBlackLeft from "@/assets/images/app-black-left.png";

export const Hero = () => {
  const navigate = useNavigate();

  const handleGoToAuth = () => {
    navigate(routesPath.auth.login);
  };

  return (
    <section className="flex flex-col items-center justify-between p-5 lg:flex-row lg:h-screen lg:p-0">
      <div className="flex-1 flex flex-col justify-center lg:px-24">
        <h1 className="text-4xl font-bold text-center lg:text-left lg:text-6xl">
          Transform Your Living Space with Smart-Home Technology.
        </h1>
        <p className="mt-10 text-lg text-center lg:text-left lg:leading-relaxed">
          Discover the future of home automation with our smart-home
          application. Effortlessly control your blinds, monitor temperature and
          humidity, and centralize all your home’s essential functions in one
          intuitive platform. Designed with simplicity and modern living in
          mind, our app helps you save energy, increase comfort, and take full
          control of your home environment. Start your smart-home journey today
          and experience the convenience of a truly connected lifestyle!
        </p>
        <Button
          onClick={handleGoToAuth}
          className="mt-10 w-full bg-white text-black lg:w-auto"
        >
          Get Started
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center h-full mt-10 lg:mt-0">
        <img
          src={AppBlackLeft}
          alt="Smart-Home App"
          className="max-h-full max-w-full object-contain rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
        />
      </div>
    </section>
  );
};
