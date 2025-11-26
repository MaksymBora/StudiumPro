import { Content } from '../MainContent/Content';
import { MainBanner } from '../MainContent/MainBanner';
import { NavPan } from '../MainContent/NavPan';
import { Sidebar } from '../Sidebar/Sidebar';

export function ProductsWrapper() {
  return (
    <>
      <div className="container-fluid shop py-5 bg-white">
        <div className="container py-5">
          <div className="row g-4">
            <Sidebar />
            <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
              <MainBanner />
              <NavPan />
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
