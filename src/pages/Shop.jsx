import { Advantages } from '../components/Shop/Advantages.jsx';
import { ProductOffer } from '../components/Shop/ProductOffer.jsx';
import { ProductsWrapper } from '../components/Shop/ProductsWrapper/ProductsWrapper.jsx';
import { TopSaleBanners } from '../components/Shop/TopSaleBanners.jsx';

export function Shop() {
  return (
    <>
      <Advantages />
      <ProductOffer />
      <ProductsWrapper />
      <TopSaleBanners />
    </>
  );
}
