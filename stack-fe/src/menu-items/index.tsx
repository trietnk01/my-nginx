import { DefaultRootStateProps } from "types";
import dashboard from "./dashboard";
import user from "./user";
import student from "./student";
import chat from "./chat";
// ==============================|| MENU ITEMS ||============================== //

const menuItems: DefaultRootStateProps["NavItemType"][] = [dashboard, user, student, chat];

export { menuItems };
