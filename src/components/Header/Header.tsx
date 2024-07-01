import { FiLogIn, FiShoppingCart } from "react-icons/fi"
import *  as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>RM Shop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton>
            Login
            <FiLogIn />
          </S.AuthButton>
          <S.CartButton>
            Carrinho
            <FiShoppingCart />
            </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
