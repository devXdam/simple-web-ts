import { PriceBox } from "../../components/price-box/PriceBoxComponent";

const prices = new PriceBox();

export const pricesView = async () => {
  // Usa la variable prices aquí si es necesario
  prices.setAttribute("plan-title", "Basic Plan");
  prices.setAttribute("price", "$9.99/month");
  prices.setAttribute("features", "Feature 1,Feature 2,Feature 3");

  return `
    <section>
      ${prices.outerHTML}
      <price-box plan-title="Premium Plan" price="$19.99/month" features="Feature A,Feature B,Feature C"></price-box>
    </section>
  `;
};
