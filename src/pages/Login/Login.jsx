import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

function Login() {
  // const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let foundUserId = null;

    for (let user of users) {
      if (
        formData.email === user.email &&
        formData.password === user.password
      ) {
        foundUserId = user.id;
        setIsCredentialsOkay(true);
        setUserId(foundUserId);
        break;
      }
    }

    if (!foundUserId) {
      alert("Invalid email or password");
      setIsCredentialsOkay(false);
    }
  };

  useEffect(() => {
    if (isCredentialsOkay && userId) {
      navigate(`/account/${userId}`);
    }
  }, [isCredentialsOkay, userId, navigate]);

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
