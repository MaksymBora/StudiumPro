import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Home } from './pages/Home.jsx';
import { Contact } from './pages/Contacts.jsx';
import { Shop } from './pages/Shop.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Global/Layout.jsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}>
          <Route path="contacts" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Route>
    </Routes>
  );
}
