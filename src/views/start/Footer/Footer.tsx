import { Link } from "react-router-dom";
import { icons } from "./Footer.consts";

export const Footer = () => (
  <footer className="flex justify-center px-20 pb-10 text-lg lg:py-10 lg:justify-start">
    <div className="flex gap-6">
      {icons.map(({ color, action, icon: Icon }) => (
        <Link to={action} key={action}>
          <Icon className={color} />
        </Link>
      ))}
    </div>
  </footer>
);
