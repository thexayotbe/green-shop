import ShopCard from "../Generic/ShopCard";
import HomeCarousel from "../HomeCarousel";
import HomeShopSection from "../HomeShopSection";

const HomeComponent = () => {
  return (
    <div>
      <HomeCarousel />
      <ShopCard />
      <HomeShopSection />
    </div>
  );
};

export default HomeComponent;
