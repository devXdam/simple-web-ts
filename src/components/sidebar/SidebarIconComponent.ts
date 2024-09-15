import "./styles/icon-sidebar-svg.css";
import { SvgComponent } from "../icon/IconCompomponent";
import {iconSvgSidebar} from "./iconSidebarSvg"

export const SidebarIcon=()=>{
  const sidebarIcon = new SvgComponent();
  sidebarIcon.setAttribute("class-name","icon-sidebar-svg");
  sidebarIcon.setAttribute("svg-code", iconSvgSidebar);

  return sidebarIcon;
   
}