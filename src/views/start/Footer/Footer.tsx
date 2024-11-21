import { icons } from "./Footer.utils";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-[#3a387f] flex justify-between px-20 py-10 text-white text-lg">
    <span>Damian @ 2024 - {new Date().getFullYear()}</span>
    <div className="flex gap-6">
      {icons.map(({ icon: Icon, action, color }) => (
        <Link to={action}>
          <Icon className={color} />
        </Link>
      ))}
    </div>
  </footer>
);
