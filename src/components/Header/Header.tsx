import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi"
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from 'react-redux'
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reduce";
export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)

  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth () {
    if (user === null) {
      dispatch({
        type: 'user/login',
        payload: {
          name: "Roberto Moreira",
          email: 'robertom@email.com',
        },
      });
    } else {
      dispatch({
        type: 'user/logout'
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>RM Shop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
          {isLogged ? "Logout" : "Login"}
          {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
            </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
