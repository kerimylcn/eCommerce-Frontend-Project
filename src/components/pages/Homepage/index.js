import PopularItems from "../../layouts/Popular Items";
import CarouselBanner from "../../shared-components/CarouselBanner";
import Banner from "../../shared-components/Banner";
import FeaturedProducts from "../../layouts/Featured";
import Benefits from "../../shared-components/Benefits";

const Homepage = () => {
  return (
    <div>
      <CarouselBanner />
      <PopularItems />
      <Banner />
      <FeaturedProducts />
      <Benefits />
    </div>
  );
};

export default Homepage;
