import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function UserInfo({
  entryInfoUser,
  userInfoLastname,
  funcOpenModify,
  funcCloseModify,
  isClickToModifyContact,
  field,
  isOpened,
  dropdownClose,
  dropdownOpen,
  funcOnChange,
}) {
  return (
    <div
    className={`${ isOpened ? dropdownClose : dropdownOpen}
    }`}
  >
      <span className="dropdown-row label">{ entryInfoUser }</span>
      {!isClickToModifyContact ? (
        <>
          <span className="dropdown-row output">{userInfoLastname}</span>
          <FontAwesomeIcon
            icon="fa-solid fa-pencil"
            size="lg"
            className="pencil"
            onClick={() =>  funcOpenModify(field) }
          />
        </>
      ) : (
        <>
          <input
            className="dropdown-row input"
            value={userInfoLastname} // Utilise `value` pour le contrôle complet
            name={field} // Ajoute `name` pour identifier le champ
            onChange={funcOnChange} // Appelle `funcOnChange` pour gérer les changements
          />
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            className="closeModify"
            size="lg"
            onClick={() => funcCloseModify(field)}
          />
        </>
      )}
    </div>
  );
}

UserInfo.propTypes = {
  entryInfoUser: PropTypes.string,
  userInfoLastname: PropTypes.string,
  funcOpenModify: PropTypes.func,
  funcCloseModify: PropTypes.func,
  isClickToModifyContact: PropTypes.func,
  field: PropTypes.string,
  isOpened: PropTypes.bool,
  dropdownClose: PropTypes.string,
  dropdownOpen: PropTypes.string,
  funcOnChange: PropTypes.func,
  valueForUpdate: PropTypes.string
};

export default UserInfo;
