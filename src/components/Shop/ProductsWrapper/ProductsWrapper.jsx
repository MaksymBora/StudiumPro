import { Sidebar } from '../Sidebar/Sidebar';

export function ProductsWrapper() {
  return (
    <div className="container-fluid shop py-5 bg-white">
      <div className="container py-5">
        <div className="row g-4">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}
