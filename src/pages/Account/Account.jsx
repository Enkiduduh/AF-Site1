// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function Account() {
//   const [users, setUsers] = useState([]);
//   const [userAccount, setUserAccount] = useState(null);
//   const [products, setProducts] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/users.json");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/products.json");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     setUserAccount(users.find((user) => user.id == id));
//   });

//   return (
//     <>
//       {userAccount && (
//         <div className="order-container">
//           <h1 id="userName">
//             Bienvenue {userAccount.firstname} {userAccount.lastname}
//           </h1>
//           <div className="account-action">
//             <div className="action">
//               <div className="action-account">Vos coordonnées</div>
//               <div>Nom: {userAccount.lastname}</div>
//               <div>Prénom: {userAccount.firstname}</div>
//               <div>Mobile: 06 01 02 03 04</div>
//               <div>Email: {userAccount.email}</div>
//               <div className="modify">Modifier</div>
//             </div>
//             <div className="action">
//               <div className="action-account">Votre adresse</div>
//               <div>Adresse: {userAccount.address}</div>
//               <div className="modify">Modifier</div>
//             </div>
//             <div className="action">
//               <div className="action-account">Vos commandes</div>
//             </div>
//           </div>
//           {userAccount.order.map((order) => (
//             <div className="order-product" key={order.id}>
//               <div className="order-product-infos">
//                 {order.products.map((product) => {
//                   const productData = products.find(
//                     (prod) => prod.id === product.id
//                   );

//                   return (
//                     productData && (
//                       <div className="order" key={product.id}>
//                         <div className="order-product-img">
//                           <img
//                             src={`/image_products/${productData.img}`}
//                             alt={productData.name}
//                           />
//                         </div>
//                         <div className="product-details">
//                           <span className="name">{productData.name}</span>
//                           <span className="quantity">
//                             Quantité : {product.quantity}
//                           </span>
//                           <span>{`Prix à l'unité : ${productData.price}€`}</span>
//                           <button>Acheter à nouveau</button>
//                         </div>
//                       </div>
//                     )
//                   );
//                 })}
//               </div>
//               <div className="order-product-state">
//                 <div className="price">
//                   Date de commande: {order.dateOfOrder}
//                 </div>
//                 <div className="price">Total: {order.bills}€</div>
//                 <div className="price">Paiment par: {order.paidBy}</div>
//                 <div className="state-order">Status: {order.state}</div>
//               </div>
//               <div className="order-product-shipment">
//                 <div className="shipto">Livré à :</div>
//                 <div className="contact">
//                   {userAccount.firstname} {userAccount.lastname}
//                 </div>
//                 <div className="address">{userAccount.address}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default Account;

import { useState, useEffect } from 'react';

function Account() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserInfo(data); // Stocker les informations de l'utilisateur
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      {userInfo ? (
        <h1>Welcome, {userInfo.firstname} {userInfo.lastname}</h1>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}

export default Account;
