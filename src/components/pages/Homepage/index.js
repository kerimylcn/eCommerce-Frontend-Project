import PopularItems from "../../layouts/Popular Items";
import CarouselBanner from "../../shared-components/CarouselBanner";
import Banner from "../../shared-components/Banner";
import FeaturedProducts from "../../layouts/Featured";

const Homepage = () => {
  return (
    <div>
      <CarouselBanner />
      <PopularItems />
      <Banner />
      <FeaturedProducts />
    </div>
  );
};

export default Homepage;
