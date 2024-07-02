import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi"
import { Cart } from "../Cart/Cart";

import * as S from "./styles";
export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const isLogged = false;
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>RM Shop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged}>
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
