import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import seeds from "/image_products/icons/color_seeds.png";
import soils from "/image_products/icons/color_soils.png";
import advices from "/image_products/icons/color_fields.png";
import tools from "/image_products/icons/color_tools.png";
import pots from "/image_products/icons/color_pot.png";
import gallery from "/image_products/icons/color_gallery1.png";
import plants from "/image_products/icons/color_plants1.png";
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
      <div className="nav-button">
        <img src={seeds} alt="Seeds icon" className="img-icon" />
        <div>Seeds</div>
      </div>
      <div className="nav-button">
        <img src={soils} alt="Seeds icon" className="img-icon" />
        <div>Soils</div>
      </div>
      <div className="nav-button">
        <img src={plants} alt="Seeds icon" className="img-icon" />
        <div>Plants</div>
      </div>
      <div className="nav-button">
        <img src={tools} alt="Seeds icon" className="img-icon" />
        <div>Tools</div>
      </div>
      <div className="nav-button">
        <img src={pots} alt="Seeds icon" className="img-icon" />
        <div>Pots</div>
      </div>
      <div className="nav-button" onClick={handleClickToAdvices}>
        <img src={advices} alt="Seeds icon" className="img-icon" />
        <div>Advices</div>
      </div>
      <div className="nav-button" onClick={handleClickToPhotos}>
        <img src={gallery} alt="Seeds icon" className="img-icon" />
        <div>Gallery</div>
      </div>
    </nav>
  );
}

export default NavBar;
advices;
