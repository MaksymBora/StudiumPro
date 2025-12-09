function formatPorts(portsDescription) {
  if (!portsDescription) return '';

  try {
    const obj = JSON.parse(portsDescription);
    if (typeof obj !== 'object' || obj === null) return portsDescription;

    return Object.entries(obj)
      .map(([name, count]) => `${name} ×${count}`)
      .join(', ');
  } catch {
    return portsDescription;
  }
}

export function ProductSpecsBlock({ product }) {
  const specs = product.specs || null;
  if (!specs) return null;

  const portsText = formatPorts(specs.portsDescription);

  return (
    <div className="mt-4">
      <h5 className="fw-bold mb-3">Technical specifications</h5>

      <div className="row small">
        <div className="col-md-6">
          <ul className="list-unstyled mb-2">
            <li>
              <span className="fw-semibold">Processor:</span> {specs.processor}
            </li>
            <li>
              <span className="fw-semibold">RAM:</span> {specs.ramGb} GB {specs.ramType}
            </li>
            <li>
              <span className="fw-semibold">Storage:</span> {specs.storageGb} GB {specs.storageType} (
              {specs.storageInterface})
            </li>
            <li>
              <span className="fw-semibold">GPU:</span> {specs.gpu} ({specs.gpuType})
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled mb-2">
            <li>
              <span className="fw-semibold">Cooling system:</span> {specs.coolingSystem}
            </li>
            <li>
              <span className="fw-semibold">Weight:</span> {specs.weightKg} kg
            </li>
            <li>
              <span className="fw-semibold">Dimensions:</span> {specs.dimensions}
            </li>
            <li>
              <span className="fw-semibold">Ports:</span> {portsText || '–'}
            </li>
            <li>
              <span className="fw-semibold">OS:</span> {specs.operatingSystem}
            </li>
            <li>
              <span className="fw-semibold">Warranty:</span> {specs.warrantyMonths} months
            </li>
          </ul>
        </div>
      </div>

      {specs.additionalFeatures && (
        <p className="small mt-2">
          <span className="fw-semibold">Additional features:</span> {specs.additionalFeatures}
        </p>
      )}
    </div>
  );
}
