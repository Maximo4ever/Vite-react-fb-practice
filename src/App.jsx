import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

const App = () => {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
