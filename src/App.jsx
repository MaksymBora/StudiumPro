import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Home } from './pages/Home.jsx';
import { Contact } from './pages/Contacts.jsx';
import { Shop } from './pages/Shop.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Global/Layout.jsx';
import { Login } from './pages/Login.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { Product } from './pages/Product.jsx';
import { Account } from './pages/Account.jsx';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        <Route path="contacts" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />

        <Route
          path="account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
