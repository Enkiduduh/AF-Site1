import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";

function Login() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isCredentialsOkay, setIsCredentialsOkay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/users.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(users);
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogged) navigate(`/account`);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const xEmail = users.map((user) => user.email);
    const xPassword = users.map((user) => user.password);
    for (let i = 0; i < xEmail.length; i++) {
      if (formData.email == xEmail[i] && formData.password == xPassword[i]) {
        console.log(formData);
        console.log(
          `Le couple : ${formData.email} ${formData.password} est correcte`
        );
        setIsCredentialsOkay(true);
      }
    }
  };

  useEffect(() => {
    if (isCredentialsOkay) navigate(`/account`);
  });

  return (
    <>
      <div className="form-container">
        <form className="formCreate" onSubmit={handleSubmit}>
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
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="recover">
            <label htmlFor="recover">
              <input type="submit" value="I lost my password"></input>
            </label>
          </div>
          <div className="submit">
            <input type="submit" value="Login"></input>
          </div>
          <div className="createNew">
            <input type="submit" value="Create New Account"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
