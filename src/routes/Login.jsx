import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  };
  return (
    <>
      <h1>Loginnnnnnnnnnn</h1>
      <p>{user ? "En linea" : "Desconectado"}</p>
      <button onClick={handleClickLogin}>Acceder</button>
    </>
  );
};

export default Login;
