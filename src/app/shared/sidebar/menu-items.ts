import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Urgencias",
    icon: "",
    class: "",
    extralink: true,
    submenu: [],
  },
  {
    path: "/dashboard",
    title: "Pacientes",
    icon: "mdi mdi-account-multiple",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "",
    title: "Option",
    icon: "mdi mdi-blur-radial",
    class: "",
    extralink: false,
    submenu: [],
  },
];
