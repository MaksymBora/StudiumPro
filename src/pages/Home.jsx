import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="contacts">Contacts</Link>
      <Link to="shop">Shop</Link>
      <Outlet />
    </div>
  );
}
