import './main.css';
import "./views/Pages";

import { BrandComponent } from "./components/brand/BrandComponent";
import { brandSvg } from "./components/brand/brandSvg";

import { SidebarIcon } from "./components/sidebar/SidebarIconComponent";

import { SidebarComponent } from './components/sidebar/SidebarComponent';

import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { setupNavbarToggle } from './components/navbar/NavBarToggle';

import { FadeSections } from "./utils/FadeSections";

// IconSidebar
const iconSidebar = SidebarIcon();
iconSidebar.setAttribute('element-id', 'navbarToggle');

iconSidebar.setMethod(() => {
  if(iconSidebar.getAttribute("element-id")==="navbarToggle"){
    setupNavbarToggle("navbarToggle")
  }
});

document.querySelector<HTMLDivElement>('#colRight')?.appendChild(iconSidebar);

// Sidebar
const sidebar = new SidebarComponent();
sidebar.setAttribute("data-url", "/data/pages.json");
sidebar.setAttribute("data-ul-class", "sidebar");
document.querySelector<HTMLDivElement>('#sidebarApp')?.appendChild(sidebar);

// Header
const brandComponent = new BrandComponent();
brandComponent.setAttribute('svg-code', brandSvg);
brandComponent.setAttribute("company-name", "EDR ES");
brandComponent.setAttribute("slogan", "ALL IN ONE PLACE");
document.querySelector<HTMLDivElement>('#colLeft')?.appendChild(brandComponent);

// Navbar
const navbar = NavbarComponent();
document.querySelector<HTMLDivElement>('#navbarApp')?.appendChild(navbar);
//Main

FadeSections