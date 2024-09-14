import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserInfo({
  entryInfoUser,
  userInfoLastname,
  funcOpenModify,
  funcCloseModify,
  isClickToModifyContact,
  field,
  isOpened,
  dropdownClose,
  dropdownOpen
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
            defaultValue={userInfoLastname}
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

export default UserInfo;
