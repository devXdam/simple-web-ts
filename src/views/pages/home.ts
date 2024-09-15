import { SectionComponent } from "../../components/section/SectionComponent";

const sections = new SectionComponent();
sections.setAttribute("data-url", "public/data/sections.json");
export const homeView = async () => `
  <section-component data-url="public/data/sections.json"></section-component>
`;
