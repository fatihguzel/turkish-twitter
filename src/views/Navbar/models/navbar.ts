export interface NavItem {
  name: string;
  route: string;
  icon: string;
  children: NavItem[];
}

export const navItems: NavItem[] = [
  {
    name: "ChangeLanguage",
    route: "/language",
    icon: "mdi-translate",
    children: [
      {
        name: "tr",
        route: "/language/tr",
        icon: "mdi-translate",
        children: [],
      },
      {
        name: "en",
        route: "/language/en",
        icon: "mdi-translate",
        children: [],
      },
    ],
  },
  {
    name: "Home",
    route: "/",
    icon: "mdi-home",
    children: [],
  },
  {
    name: "Profile",
    route: "/profile",
    icon: "mdi-account",
    children: [],
  },
  {
    name: "Logout",
    route: "/account/login",
    icon: "mdi-logout",
    children: [],
  },
];
