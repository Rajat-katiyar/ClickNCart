import { Fragment } from "react";
import Wrapper from "../src/components/wrapper/Wrapper";
import Section from "../src/components/Section";
import { products, discoutProducts } from "../src/utils/products";
import SliderHome from "../src/components/Slider";
import useWindowScrollToTop from "../src/hooks/useWindowScrollToTop";

export default function Home() {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
}

