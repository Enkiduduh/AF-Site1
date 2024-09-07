import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [clickToAdvices, setClickToAdvices] = useState(false);
  const [clickToPhotos, setClickToPhotos] = useState(false);
  const navigate = useNavigate();

  const handleClickToAdvices = () => {
    setClickToAdvices(true);
    navigate("/advices");
  };

  const handleClickToPhotos = () => {
    setClickToPhotos(true);
    navigate("/photos");
  };

  return (
    <nav className="nav-container">
      <div className="nav-button">Seeds</div>
      <div className="nav-button">Plants</div>
      <div className="nav-button">Tools</div>
      <div className="nav-button">Pots</div>
      <div className="nav-button" onClick={handleClickToAdvices}>
        Advices
      </div>
      <div className="nav-button" onClick={handleClickToPhotos}>Photos</div>
    </nav>
  );
}

export default NavBar;
