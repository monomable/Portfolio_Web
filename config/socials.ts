import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@monomable",
    icon: Icons.gitHub,
    link: "https://github.com/monomable",
  },
  {
    name: "Github Blog",
    username: "monomable",
    icon: Icons.blog,
    link: "https://monomable.github.io/",
  },
  {
    name: "Instagram",
    username: "heo._.one",
    icon: Icons.instagram,
    link: "https://twitter.com/namanbarkiya",
  },
  {
    name: "Gmail",
    username: "wen091377",
    icon: Icons.gmail,
    link: "mailto:wen091377@gmail.com",
  },
];
