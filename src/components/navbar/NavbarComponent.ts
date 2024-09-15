import { SidebarComponent } from "../sidebar/SidebarComponent";
import "./styles/navbar.css";
export const NavbarComponent = () => {
    const navbar = new SidebarComponent();
    navbar.setAttribute("data-url", "/data/pages.json");
    navbar.setAttribute("data-ul-class", "navbar");
    return navbar;
}
