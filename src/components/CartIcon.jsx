import { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

function CartIcon() {
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartIconContainer onClick={() => setIsOpen(!isOpen)}>
      <IconWrapper>
        <FaShoppingCart />
        <CartCount>{items.length}</CartCount>
      </IconWrapper>
    </CartIconContainer>
  );
}

export default CartIcon;