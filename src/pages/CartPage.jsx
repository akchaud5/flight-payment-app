import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FlightItem from '../components/FlightItem';
import CartIcon from '../components/CartIcon';
import { useCart } from '../context/CartContext';

const PageContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  margin: 0;
  color: #2c3e50;
`;

const CartList = styled.div`
  margin-bottom: 80px;
`;

const Summary = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 16px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const TotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #2980b9;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 40px 0;
  color: #7f8c8d;
`;

function CartPage() {
  const { items } = useCart();
  const navigate = useNavigate();
  
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  
  return (
    <PageContainer>
      <Header>
        <Title>Your Flights</Title>
        <CartIcon />
      </Header>
      
      <CartList>
        {items.length > 0 ? (
          items.map(item => <FlightItem key={item.id} item={item} />)
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartList>
      
      {items.length > 0 && (
        <Summary>
          <TotalPrice>Total: ${totalPrice}</TotalPrice>
          <CheckoutButton onClick={() => navigate('/checkout')}>
            Checkout
          </CheckoutButton>
        </Summary>
      )}
    </PageContainer>
  );
}

export default CartPage;