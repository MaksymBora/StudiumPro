// src/pages/Registration.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Advantages } from '../components/Shop/Advantages';

export function SignIn() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid email'),
    password: Yup.string().required('Required').min(6, 'Min 6 characters'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  });

  return (
    <div className="container-fluid px-0 py-5 bg-white">
      <div className="row g-0 justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 px-4">
          <h1 className="mb-4">Create Account</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
          >
            {({ isSubmitting }) => (
              <Form className="p-4 mb-5 border rounded bg-light shadow-sm">
                {/* Username */}
                <div className="form-item mb-4">
                  <label className="form-label my-3">Username *</label>
                  <Field type="text" name="username" className="form-control" />
                  <ErrorMessage name="username" component="div" className="text-danger small mt-1" />
                </div>

                {/* First Name */}
                <div className="form-item mb-4">
                  <label className="form-label my-3">First Name *</label>
                  <Field type="text" name="firstName" className="form-control" />
                  <ErrorMessage name="firstName" component="div" className="text-danger small mt-1" />
                </div>

                {/* Last Name */}
                <div className="form-item mb-4">
                  <label className="form-label my-3">Last Name *</label>
                  <Field type="text" name="lastName" className="form-control" />
                  <ErrorMessage name="lastName" component="div" className="text-danger small mt-1" />
                </div>

                {/* Email */}
                <div className="form-item mb-4">
                  <label className="form-label my-3">Email Address *</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                </div>

                {/* Password */}
                <div className="form-item mb-4">
                  <label className="form-label my-3">Password *</label>
                  <Field type="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="text-danger small mt-1" />
                </div>

                <button
                  className="btn btn-primary border-secondary py-3 px-4 w-100 text-uppercase"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating account…' : 'Register'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Advantages />
    </div>
  );
}
