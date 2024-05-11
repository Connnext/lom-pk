// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   useAddGoodsInBasketMutation,
//   useGetUsersQuery,
// } from "../../../redux/goodsApi";
// import Spinner from "../../Spinner/Spinner";
// import {
//   errorMessageLogin,
//   successAddInBasket,
//   alreadyInBasket,
// } from "../../../utils/list";
// import AddButton from "../AddButton/AddButton";

// export default AddGoodsBtn = ({ id, item }) => {
//   const auth = useSelector((state) => state.users.auth);
//   const authCustomer = useSelector((state) => state.users.authCustomer);
//   const user = useSelector((state) => state.users.lkUser);

//   const { data = [] } = useGetUsersQuery(user.id);
//   // let result = data.find((item) => item.id == user.id);

//   const [addProductInBasket, { isLoading }] = useAddGoodsInBasketMutation();

//   const handleAddProductInBasket = async () => {
//     if (auth === false && authCustomer === false) {
//       errorMessageLogin();
//     }
//     if (auth != false || authCustomer != false) {
//       let userTaget = data.find((elements) => elements.id == user.id);
//       let productNumber = userTaget.basket.item.find(
//         (elements) => elements.id == item.id
//       );
//       if (productNumber === undefined) {
//         successAddInBasket();
//         let result = {
//           id: item.id,
//           title: item.title,
//           img: item.images[0],
//           price: item.price,
//           col: 1,
//         };
//         let previosItems = userTaget.basket.item;
//         let arr = [];
//         previosItems.forEach((elements) => {
//           arr.push(elements);
//         });
//         arr.push(result);
//         let generalSum = userTaget.GeneralsumInBasket + item.price;
//         await addProductInBasket({
//           id: userTaget.id,
//           data: arr,
//           sum: generalSum,
//         }).unwrap();
//       } else {
//         alreadyInBasket();
//       }
//     }
//   };

//   if (isLoading) return <Spinner />;

//   return <AddButton onClick={handleAddProductInBasket} text={"В корзину"} />;
// };
