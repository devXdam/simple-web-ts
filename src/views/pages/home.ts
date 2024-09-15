import { SectionComponent } from "../../components/section/SectionComponent";

const sections = new SectionComponent();
sections.setAttribute("data-url", "/data/sections.json");
export const homeView = async () => `
  <section-component data-url="/data/sections.json"></section-component>
`;
