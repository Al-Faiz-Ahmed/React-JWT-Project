import React, { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/actions/cart-action";
import HomeScreenNavbar from "../../components/Navbars/homeNavbar";
import CartItem from "../../components/cart-screen Componenets/cart-item";

export default function ProductCartScreen() {
  const [searchQuery] = useSearchParams();
  const qty = searchQuery.get("qty");
  const { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addCartItem(id, qty));
    }
  }, [dispatch, id, qty]);
  return (
    <>
      <header>
        <HomeScreenNavbar />
      </header>
      <main>
        <CartItem />
      </main>
      <footer></footer>
    </>
  );
}
