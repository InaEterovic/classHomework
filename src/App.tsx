import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { UseEffectDemo } from "./components/FE 9/UseEffectDemo";
import { UseRefDemo } from "./components/FE 9/UseRefDemo";
import { UseStateDemo } from "./components/FE 9/UseStateDemo";
import UserProfile from "./components/FE 10/UserProfile";
import UserList from "./components/FE 10/UserList";
import NotFound from "./components/FE 10/NotFound";
import ProtectedRoute from "./components/FE 10/ProtectedRoute";
import AccessForbidden from "./components/FE 10/AccessForbidden";
import ControlledForm from "./components/FE 11/ControlledForm";
import ReactHookForm from "./components/FE 11/ReactHookForm";
import ContactForm from "./components/FE 11/ContactForm";
import LiftStateParent from "./components/mini project questions/LiftStateParent";
import { ThemeProvider } from "./components/FE 13/context/ThemeContext";
import Navbar from "./components/navbar/NavBar";
import ItemList from "./components/FE 14/ItemList";
import BrokenEffect from "./components/FE 14/BrokenEffect";
import ProductSearch from "./components/FE 14/ProductSearch";
import TodoApp from "./components/FE 14/ToDo";

function App() {
  const isAuthenticated = false;

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/effect-hook" element={<UseEffectDemo />} />
        <Route path="/state-hook" element={<UseStateDemo />} />
        <Route path="/ref-hook" element={<UseRefDemo />} />
        <Route path="/controlled-form" element={<ControlledForm />} />
        <Route path="/rhf" element={<ReactHookForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/lift-state" element={<LiftStateParent />} />

        <Route path="/item-list" element={<ItemList />} />
        <Route path="/broken" element={<BrokenEffect />} />
        <Route path="/product-search" element={<ProductSearch />} />
        <Route path="/to-do" element={<TodoApp />} />

        <Route
          path="/users"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/forbidden" element={<AccessForbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
