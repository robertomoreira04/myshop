import { FiShoppingCart } from 'react-icons/fi';
import * as S from './styles';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  return (
    <S.Card>
      <S.ProductImage src={product.image} 
      alt={product.description}/>

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>{`(${product.rating.rate})`}</S.Review>

        <S.Price>{`$${product.price}`}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddCartButtonWrapper>
    </S.Card>
  )
}