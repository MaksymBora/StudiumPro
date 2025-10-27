export function AdditionalProds() {
  return (
    <div className="additional-product mb-4">
      <h4>Additional Products</h4>

      <div className="additional-product-item">
        <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Accessories" />
        <label htmlFor="Categories-1" className="text-dark">
          Accessories
        </label>
      </div>

      <div className="additional-product-item">
        <input type="radio" className="me-2" id="Categories-2" name="Categories-1" value="Electronics & Computer" />
        <label htmlFor="Categories-2" className="text-dark">
          Electronics &amp; Computer
        </label>
      </div>

      <div className="additional-product-item">
        <input type="radio" className="me-2" id="Categories-3" name="Categories-1" value="Laptops & Desktops" />
        <label htmlFor="Categories-3" className="text-dark">
          Laptops &amp; Desktops
        </label>
      </div>

      <div className="additional-product-item">
        <input type="radio" className="me-2" id="Categories-4" name="Categories-1" value="Mobiles & Tablets" />
        <label htmlFor="Categories-4" className="text-dark">
          Mobiles &amp; Tablets
        </label>
      </div>

      <div className="additional-product-item">
        <input type="radio" className="me-2" id="Categories-5" name="Categories-1" value="SmartPhone & Smart TV" />
        <label htmlFor="Categories-5" className="text-dark">
          SmartPhone &amp; Smart TV
        </label>
      </div>
    </div>
  );
}
