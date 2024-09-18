import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import seeds from "/image_products/icons/color_seeds.png";
import soils from "/image_products/icons/color_soils.png";
import advices from "/image_products/icons/color_fields.png";
import tools from "/image_products/icons/color_tools.png";
import pots from "/image_products/icons/color_pot.png";
import gallery from "/image_products/icons/color_gallery1.png";
import plants from "/image_products/icons/color_plants1.png";
import NavButton from "../NavButton/NavButton";

function NavBar() {
  const [clickToAdvices, setClickToAdvices] = useState(false);
  const [clickToPhotos, setClickToPhotos] = useState(false);
  const [products, setProducts] = useState([]);
  const [isNavHovered, setIsNavHovered] = useState({
    soils: false,
    seeds: false,
    plants: false,
    tools: false,
    pots: false,
    advices: false,
    gallery: false,
  });
  const navigate = useNavigate();

  const handleClickToAdvices = () => {
    setClickToAdvices(true);
    navigate("/advices");
  };

  const handleClickToPhotos = () => {
    setClickToPhotos(true);
    navigate("/photos");
  };

  // Handles the click to modify
  const handleMouseEnter = (field) => {
    setIsNavHovered((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  // Handles the click to cancel modification
  const handleMouseLeave = (field) => {
    setIsNavHovered((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(products);
    fetchData();
  }, []);

  return (
    <nav className="nav-container">
      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Seeds"
        category="seeds"
        productsData={products}
        isCondition={isNavHovered.seeds}
        field="seeds"
      />

      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Soil"
        category="soils"
        productsData={products}
        isCondition={isNavHovered.soils}
        field="soils"
      />
      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Plants"
        category="plants1"
        productsData={products}
        isCondition={isNavHovered.plants}
        field="plants"
      />
      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Tools"
        category="tools"
        productsData={products}
        isCondition={isNavHovered.tools}
        field="tools"
      />

      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Pots"
        category="pot"
        productsData={products}
        isCondition={isNavHovered.pots}
        field="pots"
      />

      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Advices"
        category="fields"
        productsData={products}
        isCondition={isNavHovered.advices}
        field="advices"
      />
      <NavButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        categoryText="Gallery"
        category="gallery1"
        productsData={products}
        isCondition={isNavHovered.gallery}
        field="gallery"
      />
    </nav>
  );
}

export default NavBar;
