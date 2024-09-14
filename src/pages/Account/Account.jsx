import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInfo from "../../components/UserInfo/UserInfo";
import { dateConversion } from "../../Logic/DateConversion";

function Account() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [userInfo, setUserInfo] = useState(null);
  const [userOrders, setUserOrders] = useState(null);
  const [userProducts, setUserProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedCmd, setIsOpenedCmd] = useState(false);
  const [isClickToModifyContact, setIsClickToModifyContact] = useState({
    firstname: false,
    lastname: false,
    email: false,
    address: false,
    mobile: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate(`/login`);
    }
  }, [isLogged, navigate]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserInfo(data); // Stocker les informations de l'utilisateur
        console.log(userInfo);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/orders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserOrders(data); // Stocker les informations de commandes
        console.log(userOrders);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, []);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/orderProducts`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserProducts(data); // Stocker les informations de commandes
        console.log(userProducts);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, []);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/Products`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setProducts(data); // Stocker les informations de commandes
        console.log(products);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, []);

  const handleClickToOpen = () => {
    setIsOpened(true);
  };

  const handleClickToClose = () => {
    setIsOpened(false);
  };

  const handleClickToOpenCmd = () => {
    setIsOpenedCmd(true);
  };

  const handleClickToCloseCmd = () => {
    setIsOpenedCmd(false);
  };

  // Handles the click to modify
  const handleClickToModifyContact = (field) => {
    setIsClickToModifyContact((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  // Handles the click to cancel modification
  const handleClickToCancelModifyContact = (field) => {
    setIsClickToModifyContact((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  return (
    <div>
      {userInfo ? (
        <div className="order-container">
          <h1 id="userName">
            Bienvenue {userInfo.firstname} {userInfo.lastname}
          </h1>
          {/* <h2>Compte créé le {userInfo.dateOfCreation}</h2> */}
          <div className="account-action">
            <div className="dropdown-container">
              <div className="dropdown-section">
                <div className="dropdown-name">Vos coordonnées</div>
                {isOpened ? (
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    size="xl"
                    onClick={handleClickToClose}
                    className="icon-dropdown"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-up"
                    size="xl"
                    onClick={handleClickToOpen}
                    className="icon-dropdown"
                  />
                )}
              </div>
              {/* A transformer en composant */}
              <div
                className={`${
                  isOpened ? "dropdown-menu-close" : "dropdown-menu"
                }`}
              >
                <UserInfo
                  entryInfoUser="Nom"
                  userInfoLastname={userInfo.lastname}
                  funcOpenModify={handleClickToModifyContact}
                  funcCloseModify={handleClickToCancelModifyContact}
                  isClickToModifyContact={isClickToModifyContact.lastname}
                  field="lastname"
                  isOpened={isOpened}
                  dropdownClose="dropdown-row-close"
                  dropdownOpen="dropdown-row"
                />

                <UserInfo
                  entryInfoUser="Prénom"
                  userInfoLastname={userInfo.firstname}
                  funcOpenModify={handleClickToModifyContact}
                  funcCloseModify={handleClickToCancelModifyContact}
                  isClickToModifyContact={isClickToModifyContact.firstname}
                  field="firstname"
                  isOpened={isOpened}
                  dropdownClose="dropdown-row-close"
                  dropdownOpen="dropdown-row"
                />

                <UserInfo
                  entryInfoUser="Email"
                  userInfoLastname={userInfo.email}
                  funcOpenModify={handleClickToModifyContact}
                  funcCloseModify={handleClickToCancelModifyContact}
                  isClickToModifyContact={isClickToModifyContact.email}
                  field="email"
                  isOpened={isOpened}
                  dropdownClose="dropdown-row-close"
                  dropdownOpen="dropdown-row"
                />

                <UserInfo
                  entryInfoUser="Mobile"
                  userInfoLastname={userInfo.mobile}
                  funcOpenModify={handleClickToModifyContact}
                  funcCloseModify={handleClickToCancelModifyContact}
                  isClickToModifyContact={isClickToModifyContact.mobile}
                  field="mobile"
                  isOpened={isOpened}
                  dropdownClose="dropdown-row-close"
                  dropdownOpen="dropdown-row"
                />

                <UserInfo
                  entryInfoUser="Adresse"
                  userInfoLastname={userInfo.address}
                  funcOpenModify={handleClickToModifyContact}
                  funcCloseModify={handleClickToCancelModifyContact}
                  isClickToModifyContact={isClickToModifyContact.address}
                  field="address"
                  isOpened={isOpened}
                  dropdownClose="dropdown-row-close"
                  dropdownOpen="dropdown-row"
                />
              </div>
            </div>
          </div>

          <div className="account-action">
            <div className="dropdown-container">
              <div className="dropdown-section">
                <div className="dropdown-name">Vos commandes</div>
                {isOpenedCmd ? (
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    size="xl"
                    onClick={handleClickToCloseCmd}
                    className="icon-dropdown"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-up"
                    size="xl"
                    onClick={handleClickToOpenCmd}
                    className="icon-dropdown"
                  />
                )}
              </div>
              <div
                className={`${
                  isOpenedCmd ? "dropdown-menu-close" : "dropdown-menu scroller"
                }`}
              >
                {userOrders &&
                  userOrders.map((order) => (
                    <>
                      <div className="orders-infos-container" key={order.id}>
                        <div className="orders-infos">
                          <div className="rows-container">
                            <div className="dropdown-row-container">
                              <div className="row-label">Date de commande</div>
                              <div className="row-output">
                                {dateConversion(order.dateOfOrder)}
                              </div>
                            </div>
                            <div className="dropdown-row-container">
                              <div className="row-label">Total</div>
                              <div className="row-output">{order.bills} €</div>
                            </div>
                            <div className="dropdown-row-container">
                              <div className="row-label">Payé par</div>
                              <div className="row-output">{order.paidBy}</div>
                            </div>
                            <div className="dropdown-row-container">
                              <div className="row-label">Status</div>
                              <div className="row-output">{order.state}</div>
                            </div>
                          </div>

                          <div className="shipment-infos">
                            <div className="row-label">Adresse d'envoi :</div>
                            <div className="row-output">
                              <div>
                                {userInfo.lastname} {userInfo.firstname}
                              </div>
                              <div>{userInfo.address}</div>
                            </div>
                          </div>
                        </div>
                        <div className="product-container">
                          {userProducts.length > 0 &&
                            products.length > 0 &&
                            userProducts
                              .filter((userProduct) => {
                                return userProduct.orderId === order.id;
                              })
                              .map((userProduct) => {
                                const productData = products.find(
                                  (product) =>
                                    product.id === userProduct.productId
                                );

                                if (!productData) {
                                  console.log(
                                    "Product not found for productId: ",
                                    userProduct.productId
                                  );
                                  return null;
                                }

                                return (
                                  productData && (
                                    <div
                                      className="product-show"
                                      key={userProduct.productId}
                                    >
                                      <div  className="product-info">
                                        <img
                                          src={`/image_products/${productData.img}`}
                                          alt={productData.name}
                                        />
                                      </div>
                                      <div className="product-info">{productData.name}</div>
                                      <div className="product-info">
                                        Quantité : {userProduct.quantity}
                                      </div>
                                      <div className="product-info">
                                        {productData.price *
                                          userProduct.quantity}{" "}
                                        €{" "}
                                      </div>
                                    </div>
                                  )
                                );
                              })}
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement des informations utilisateur...</p>
      )}
    </div>
  );
}

export default Account;
