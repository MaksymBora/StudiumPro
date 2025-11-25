// src/pages/Login.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Advantages } from '../components/Shop/Advantages';

export function Login() {
  const initialValues = {
    login: '',
    password: '',
  };

  const validationSchema = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(6, 'Min 6 characters'),
  });

  return (
    <div className="container-fluid px-0 py-5 bg-white">
      <div className="row g-0 justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 px-4">
          <h1 className="mb-4">Login</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log('LOGIN VALUES:', values);
              console.log('FORMIK HELPERS:', actions);

              // тут потом будет axios.post('/api/auth/login', values)
              // а пока просто "развисаем" кнопку:
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="p-4 mb-5 border rounded bg-light shadow-sm">
                <div className="form-item mb-4">
                  <label className="form-label my-3">User Name *</label>
                  <Field type="text" name="login" className="form-control" />
                  <ErrorMessage name="login" component="div" className="text-danger small mt-1" />
                </div>

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
                  {isSubmitting ? 'Logging in…' : 'Login'}
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
