import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setToken,
  setUserData,
} from "../../components/features/auth/authSlice";

function Login() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLogged) {
      navigate(`/account`); // Redirige vers /account une fois connecté
    }
  }, [isLogged, navigate]); // Ajoute isLogged et navigate comme dépendances

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT token in localStorage
        localStorage.setItem("token", data.token);
        // Mettre à jour l'état dans Redux
        dispatch(setToken(data.token)); // Dispatch du token vers Redux
        dispatch(setUserData({ id: data.user.id, email: data.user.email })); // Mettre à jour les informations de l'utilisateur

        // Rediriger vers la page de compte
        navigate(`/account`); // Pas besoin de l'ID ici si on gère tout par le JWT
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="formCreate" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-content">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="form-content">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="submit">
          <input type="submit" value="Login"></input>
        </div>
        <div className="recover">
          <label htmlFor="recover">
            <input type="submit" value="I lost my password"></input>
          </label>
        </div>
        <div className="createNew">
          <input type="submit" value="Create New Account"></input>
        </div>
      </form>
    </div>
  );
}

export default Login;
