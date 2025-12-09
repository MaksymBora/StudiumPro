// src/pages/Login.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Advantages } from '../components/Shop/Advantages';
import { loginUser } from '../Redux/Auth/operations';
import { selectAuthLoading, selectAuthError } from '../Redux/Auth/selector';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const initialValues = {
    login: '',
    password: '',
  };

  const validationSchema = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(6, 'Min 6 characters'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginUser(values)).unwrap();

      toast.success('Welcome back!');
      actions.resetForm();
      navigate('/');
    } catch (errorMessage) {
      toast.error(errorMessage || 'Login failed.');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid px-0 py-5 bg-white">
      <div className="row g-0 justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 px-4">
          <h1 className="mb-4">Login</h1>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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

                {authError && <div className="text-danger small mt-2 text-center">{authError}</div>}

                <button
                  className="btn btn-primary border-secondary py-3 px-4 w-100 text-uppercase"
                  type="submit"
                  disabled={isSubmitting || loading}
                >
                  {isSubmitting || loading ? 'Logging in…' : 'Login'}
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
