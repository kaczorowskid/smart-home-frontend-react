import { Github, Linkedin, Mail } from "lucide-react";
import { Icon } from "./Footer.types";

export const icons: Icon[] = [
  {
    icon: Mail,
    action: "mailto: test@gmail.com",
    color: "text-custom-cannonPink",
  },
  {
    icon: Github,
    action: "https://github.com/kaczorowskid",
    color: "text-custom-cranberry",
  },
  {
    icon: Linkedin,
    action: "https://linkedin.com",
    color: "text-custom-salmon",
  },
];
