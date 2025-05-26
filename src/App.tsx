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

function App() {
  const isAuthenticated = false;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/effect-hook" element={<UseEffectDemo />} />
      <Route path="/state-hook" element={<UseStateDemo />} />
      <Route path="/ref-hook" element={<UseRefDemo />} />
      <Route
        path="/users"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UserList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user-profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/forbidden" element={<AccessForbidden />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
