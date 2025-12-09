import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../src/Redux/Auth/selector';

export function PublicRoute({ children }) {
  const isAuth = useSelector(selectIsAuthenticated);

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}
