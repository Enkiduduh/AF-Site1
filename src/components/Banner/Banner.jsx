import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner({
  text,
  imgName,
  textIntro,
  isTrue,
  funcClickToOpen,
  funcClickToClose,
  field,
}) {
  return (
    <>
      {!isTrue ? (
        <div className="banner-container-beforeClick">
          <div
            className="bannerBg"
            style={{
              backgroundImage: `url('/image_products/bg_banners/bg_${imgName}Rdy.png')`,
            }}
          >
            <div className="banner-text-container-beforeClick">
              <div className="banner-text">{text}</div>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                size="2xl"
                onClick={() => funcClickToOpen(field)}
                className="icon-dropdown"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="banner-container"
          onClick={() => funcClickToClose(field)}
        >
          <div className="banner-icon">
            <div className="icon">
              <span>Products</span>
              <FontAwesomeIcon icon="fa-solid fa-book" size="2xl"/>
            </div>
            <div className="icon">Tips</div>
            <div className="icon">Gallery</div>
          </div>
          <div
            className="bannerBg"
            style={{
              backgroundImage: `url('/image_products/bg_banners/bg_${imgName}Rdy.png')`,
            }}
          >
            <div className="banner-text-container">
              <div className="banner-text">{text}</div>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-up"
                size="2xl"
                onClick={() => funcClickToClose(field)}
                className="icon-dropdown"
              />
            </div>
          </div>
          <div className="banner-description-wrapper">
            <div className="intro">{textIntro}</div>
          </div>
        </div>
      )}
    </>
  );
}

Banner.propTypes = {
  text: propTypes.string.isRequired,
  imgName: propTypes.string.isRequired,
  textIntro: propTypes.string.isRequired,
  isTrue: propTypes.bool.isRequired,
  funcClickToOpen: propTypes.func.isRequired,
  funcClickToClose: propTypes.func.isRequired,
  field: propTypes.string.isRequired,
};

export default Banner;
