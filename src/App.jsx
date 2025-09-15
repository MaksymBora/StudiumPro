import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contacts.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
}
