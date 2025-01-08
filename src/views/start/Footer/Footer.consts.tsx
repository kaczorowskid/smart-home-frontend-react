import { Mail, Github, Linkedin } from "lucide-react";
import { type Icon } from "./Footer.types";

export const icons: Icon[] = [
  {
    icon: Mail,
    color: "text-custom-cannonPink",
    action: "mailto: kaczorowskid97@gmail.com",
  },
  {
    icon: Github,
    color: "text-custom-cranberry",
    action: "https://github.com/kaczorowskid",
  },
  {
    icon: Linkedin,
    color: "text-custom-salmon",
    action: "https://www.linkedin.com/in/damiankaczorowski",
  },
];
