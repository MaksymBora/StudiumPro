import { Carousel } from '../components/Home/Carousel';
import { Advantages } from '../components/Shop/Advantages';
import { ProductOffer } from '../components/Shop/ProductOffer';
import { TopSaleBanners } from '../components/Shop/TopSaleBanners';

export function Home() {
  return (
    <>
      <Carousel />
      <Advantages />
      <ProductOffer />
      <TopSaleBanners />
    </>
  );
}
