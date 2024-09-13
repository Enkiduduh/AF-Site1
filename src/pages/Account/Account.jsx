import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Account() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [userInfo, setUserInfo] = useState(null);
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

  return (
    <div>
      {userInfo ? (
        <div className="order-container">
          <h1 id="userName">
            Bienvenue {userInfo.firstname} {userInfo.lastname}
          </h1>
          <div className="account-action">
            {/* Coordonnées utilisateur */}
            <div className="action">
              <div className="action-account">Vos coordonnées</div>
              <div>Nom: {userInfo.lastname}</div>
              <div>Prénom: {userInfo.firstname}</div>
              <div>Mobile: 06 01 02 03 04</div>{" "}
              {/* Modifiez avec des données réelles */}
              <div>Email: {userInfo.email}</div>
              <div className="modify">Modifier</div>
            </div>

            {/* Adresse utilisateur */}
            <div className="action">
              <div className="action-account">Votre adresse</div>
              <div> {userInfo.address}</div>
              <div className="modify">Modifier</div>
            </div>

            {/* Commandes utilisateur */}
            <div className="action">
              <div className="action-account">Vos commandes</div>
              {userInfo?.order?.length > 0 ? (
                userInfo.order.map((order) => (
                  <div className="order-product" key={order.id}>
                    <div className="order-product-infos">
                      {order.products?.map((product) => {
                        const productData = product.find(
                          (prod) => prod.id === product.id
                        );
                        return (
                          productData && (
                            <div className="order" key={product.id}>
                              <div className="order-product-img">
                                <img
                                  src={`/image_products/${productData.img}`}
                                  alt={productData.name}
                                />
                              </div>
                              <div className="product-details">
                                <span className="name">{productData.name}</span>
                                <span className="quantity">
                                  Quantité : {product.quantity}
                                </span>
                                <span>{`Prix à l'unité : ${productData.price}€`}</span>
                                <button>Acheter à nouveau</button>
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <p>Aucune commande passée</p>
              )}
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
