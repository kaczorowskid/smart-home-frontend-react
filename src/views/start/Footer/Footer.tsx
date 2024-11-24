import { icons } from "./Footer.consts";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="flex justify-center px-20 pb-10 text-lg lg:py-10 lg:justify-start">
    <div className="flex gap-6">
      {icons.map(({ icon: Icon, action, color }) => (
        <Link to={action}>
          <Icon className={color} />
        </Link>
      ))}
    </div>
  </footer>
);
