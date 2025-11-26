import { Advantages } from '../components/Shop/Advantages';
import { ProductOffer } from '../components/Shop/ProductOffer';
import { TopSaleBanners } from '../components/Shop/TopSaleBanners';
import { SingleProductContentWrapper } from '../components/SingleProduct/SIngleProductContentWrapper';

export function Product() {
  return (
    <>
      <Advantages />
      <ProductOffer />
      <SingleProductContentWrapper />
      <TopSaleBanners />
    </>
  );
}
