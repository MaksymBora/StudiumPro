import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../src/Redux/Auth/selector';

export function ProtectedRoute({ children }) {
  const isAuth = useSelector(selectIsAuthenticated);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
