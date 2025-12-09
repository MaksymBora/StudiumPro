import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../Redux/Products/operations';
import { selectIsAuthenticated } from '../Redux/Auth/selector';
import { toast } from 'react-toastify';

const PROCESSOR_OPTIONS = [
  'Intel Core i5-1240P',
  'Intel Core i7-12700H',
  'Intel Core i9-12900H',
  'AMD Ryzen 5 5600H',
  'AMD Ryzen 7 6800H',
  'AMD Ryzen 9 7940HS',
  'Apple M2',
  'Apple M2 Pro',
];

const RAM_GB_OPTIONS = ['8', '16', '32', '64'];
const RAM_TYPE_OPTIONS = ['DDR4', 'DDR5', 'LPDDR4X', 'LPDDR5X'];

const STORAGE_GB_OPTIONS = ['256', '512', '1000', '2000'];
const STORAGE_TYPE_OPTIONS = ['SSD', 'NVMe SSD', 'HDD'];
const STORAGE_IFACE_OPTIONS = ['SATA III', 'NVMe PCIe 3.0', 'NVMe PCIe 4.0'];

const GPU_OPTIONS = [
  'Integrated Intel Iris Xe',
  'NVIDIA GeForce RTX 3050',
  'NVIDIA GeForce RTX 3060',
  'NVIDIA GeForce RTX 4070',
  'AMD Radeon 680M',
  'Apple M2 GPU',
];
const GPU_TYPE_OPTIONS = ['Integrated', 'Dedicated'];

const BATTERY_WH_OPTIONS = ['50', '56', '60', '70', '80', '86', '99'];
const BATTERY_HOURS_OPTIONS = ['5', '7', '8', '10', '12', '14'];

const COOLING_OPTIONS = [
  'Single fan',
  'Dual fan',
  'Dual fan with heat pipes',
  'Vapor chamber cooling',
  'Advanced gaming cooling',
];

const RESOLUTION_OPTIONS = ['1920x1080', '2560x1440', '2560x1600', '2880x1800', '3840x2160', '3840x2400'];

const REFRESH_RATE_OPTIONS = ['60', '90', '120', '144', '165'];

const PORTS_OPTIONS = [
  '2×USB-A, 1×USB-C, HDMI, Audio Jack',
  '2×Thunderbolt 4, USB-C, SD Card Reader, Audio Jack',
  '2×USB-C, 1×USB-A, HDMI, Audio Jack',
  '3×USB-A, HDMI, Ethernet, Audio Jack',
  '2×Thunderbolt 4, HDMI, SD Card Reader',
];

const WEIGHT_OPTIONS = ['1.1', '1.25', '1.4', '1.6', '1.8', '1.9', '2.2'];

const DIMENSIONS_OPTIONS = [
  '298 x 210 x 15 mm',
  '310 x 220 x 16 mm',
  '320 x 220 x 17 mm',
  '344 x 230 x 18 mm',
  '360 x 245 x 20 mm',
];

const OS_OPTIONS = ['Windows 11 Home', 'Windows 11 Pro', 'Ubuntu 22.04', 'No OS'];

const WARRANTY_OPTIONS = ['12', '24', '36'];

const FEATURES_OPTIONS = [
  'Backlit keyboard',
  'Fingerprint reader',
  '4K OLED touchscreen, fingerprint reader, Wi-Fi 6E',
  'Thunderbolt 4, Wi-Fi 6E',
  'NumPad keyboard',
  'Dolby Atmos speakers',
];

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  price: Yup.number().typeError('Must be a number').positive().required('Required'),
  brand: Yup.string().required('Required'),
  screenSize: Yup.number().typeError('Must be a number').positive().required('Required'),
  description: Yup.string().required('Required'),

  specs: Yup.object({
    processor: Yup.string().required('Required'),
    ramGb: Yup.number().typeError('Must be a number').required('Required'),
    ramType: Yup.string().required('Required'),
    storageGb: Yup.number().typeError('Must be a number').required('Required'),
    storageType: Yup.string().required('Required'),
    storageInterface: Yup.string().required('Required'),
    gpu: Yup.string().required('Required'),
    gpuType: Yup.string().required('Required'),
    batteryCapacityWh: Yup.number().typeError('Must be a number').required('Required'),
    batteryLifeHours: Yup.number().typeError('Must be a number').required('Required'),
    coolingSystem: Yup.string().required('Required'),
    displayResolution: Yup.string().required('Required'),
    displayRefreshRate: Yup.number().typeError('Must be a number').required('Required'),
    portsDescription: Yup.string().required('Required'),
    weightKg: Yup.number().typeError('Must be a number').required('Required'),
    dimensions: Yup.string().required('Required'),
    operatingSystem: Yup.string().required('Required'),
    warrantyMonths: Yup.number().typeError('Must be a number').required('Required'),
    additionalFeatures: Yup.string().required('Required'),
  }),
});

const toNumber = v => (v === '' || v === null || v === undefined ? null : Number(v));

export function Account() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const initialValues = {
    name: '',
    price: '',
    brand: '',
    screenSize: '',
    description: '',
    specs: {
      processor: '',
      ramGb: '',
      ramType: '',
      storageGb: '',
      storageType: '',
      storageInterface: '',
      gpu: '',
      gpuType: '',
      batteryCapacityWh: '',
      batteryLifeHours: '',
      coolingSystem: '',
      displayResolution: '',
      displayRefreshRate: '',
      portsDescription: '',
      weightKg: '',
      dimensions: '',
      operatingSystem: '',
      warrantyMonths: '',
      additionalFeatures: '',
    },
  };

  const handleSubmit = (values, actions) => {
    if (!isAuthenticated) {
      alert('To add a product, please log in to your account.');
      actions.setSubmitting(false);
      return;
    }

    const payload = {
      name: values.name,
      price: toNumber(values.price),
      brand: values.brand,
      screenSize: toNumber(values.screenSize),
      description: values.description,
      specs: {
        processor: values.specs.processor,
        ramGb: toNumber(values.specs.ramGb),
        ramType: values.specs.ramType,
        storageGb: toNumber(values.specs.storageGb),
        storageType: values.specs.storageType,
        storageInterface: values.specs.storageInterface,
        gpu: values.specs.gpu,
        gpuType: values.specs.gpuType,
        batteryCapacityWh: toNumber(values.specs.batteryCapacityWh),
        batteryLifeHours: toNumber(values.specs.batteryLifeHours),
        coolingSystem: values.specs.coolingSystem,
        displayResolution: values.specs.displayResolution,
        displayRefreshRate: toNumber(values.specs.displayRefreshRate),
        portsDescription: values.specs.portsDescription,
        weightKg: toNumber(values.specs.weightKg),
        dimensions: values.specs.dimensions,
        operatingSystem: values.specs.operatingSystem,
        warrantyMonths: toNumber(values.specs.warrantyMonths),
        additionalFeatures: values.specs.additionalFeatures,
      },
    };

    dispatch(createProduct(payload))
      .unwrap()
      .then(() => {
        toast.success('Product has been created successfully.');
        actions.resetForm();
      })
      .catch(err => {
        toast.error(ErrorMessage || 'Failed to create product.');
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <div className="container-fluid px-0 py-5 bg-white">
      <div className="container py-5">
        <h1 className="mb-4">My Account – Add New Laptop</h1>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="p-4 border rounded bg-light shadow-sm">
              <h4 className="mb-3">Basic Information</h4>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <Field name="name" type="text" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Price (USD) *</label>
                  <Field name="price" type="number" step="0.01" className="form-control" />
                  <ErrorMessage name="price" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Brand *</label>
                  <Field name="brand" type="text" className="form-control" />
                  <ErrorMessage name="brand" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Screen size (") *</label>
                  <Field name="screenSize" type="number" step="0.1" className="form-control" />
                  <ErrorMessage name="screenSize" component="div" className="text-danger small" />
                </div>

                <div className="col-12">
                  <label className="form-label">Description *</label>
                  <Field as="textarea" name="description" rows="3" className="form-control" />
                  <ErrorMessage name="description" component="div" className="text-danger small" />
                </div>
              </div>

              <h4 className="mb-3">Specifications</h4>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Processor *</label>
                  <Field as="select" name="specs.processor" className="form-select">
                    <option value="">Select processor...</option>
                    {PROCESSOR_OPTIONS.map(p => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.processor" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">RAM (GB) *</label>
                  <Field as="select" name="specs.ramGb" className="form-select">
                    <option value="">Select...</option>
                    {RAM_GB_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.ramGb" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">RAM type *</label>
                  <Field as="select" name="specs.ramType" className="form-select">
                    <option value="">Select...</option>
                    {RAM_TYPE_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.ramType" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Storage (GB) *</label>
                  <Field as="select" name="specs.storageGb" className="form-select">
                    <option value="">Select...</option>
                    {STORAGE_GB_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.storageGb" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Storage type *</label>
                  <Field as="select" name="specs.storageType" className="form-select">
                    <option value="">Select...</option>
                    {STORAGE_TYPE_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.storageType" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Storage interface *</label>
                  <Field as="select" name="specs.storageInterface" className="form-select">
                    <option value="">Select...</option>
                    {STORAGE_IFACE_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.storageInterface" component="div" className="text-danger small" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">GPU *</label>
                  <Field as="select" name="specs.gpu" className="form-select">
                    <option value="">Select GPU...</option>
                    {GPU_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.gpu" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">GPU type *</label>
                  <Field as="select" name="specs.gpuType" className="form-select">
                    <option value="">Select...</option>
                    {GPU_TYPE_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.gpuType" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Battery (Wh) *</label>
                  <Field as="select" name="specs.batteryCapacityWh" className="form-select">
                    <option value="">Select...</option>
                    {BATTERY_WH_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.batteryCapacityWh" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Battery life (h) *</label>
                  <Field as="select" name="specs.batteryLifeHours" className="form-select">
                    <option value="">Select...</option>
                    {BATTERY_HOURS_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.batteryLifeHours" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Cooling system *</label>
                  <Field as="select" name="specs.coolingSystem" className="form-select">
                    <option value="">Select...</option>
                    {COOLING_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.coolingSystem" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Resolution *</label>
                  <Field as="select" name="specs.displayResolution" className="form-select">
                    <option value="">Select...</option>
                    {RESOLUTION_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.displayResolution" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Refresh rate (Hz) *</label>
                  <Field as="select" name="specs.displayRefreshRate" className="form-select">
                    <option value="">Select...</option>
                    {REFRESH_RATE_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.displayRefreshRate" component="div" className="text-danger small" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ports *</label>
                  <Field as="select" name="specs.portsDescription" className="form-select">
                    <option value="">Select...</option>
                    {PORTS_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.portsDescription" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Weight (kg) *</label>
                  <Field as="select" name="specs.weightKg" className="form-select">
                    <option value="">Select...</option>
                    {WEIGHT_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.weightKg" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Dimensions *</label>
                  <Field as="select" name="specs.dimensions" className="form-select">
                    <option value="">Select...</option>
                    {DIMENSIONS_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.dimensions" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">OS *</label>
                  <Field as="select" name="specs.operatingSystem" className="form-select">
                    <option value="">Select...</option>
                    {OS_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.operatingSystem" component="div" className="text-danger small" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Warranty (months) *</label>
                  <Field as="select" name="specs.warrantyMonths" className="form-select">
                    <option value="">Select...</option>
                    {WARRANTY_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.warrantyMonths" component="div" className="text-danger small" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Additional features *</label>
                  <Field as="select" name="specs.additionalFeatures" className="form-select">
                    <option value="">Select...</option>
                    {FEATURES_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="specs.additionalFeatures" component="div" className="text-danger small" />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary border-secondary mt-4 w-100 py-3 text-uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving…' : 'Add product'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
