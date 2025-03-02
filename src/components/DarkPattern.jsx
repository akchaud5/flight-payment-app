import styled from 'styled-components';
import { FaCheck, FaStar } from 'react-icons/fa';

const Container = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 24px;
`;

const Title = styled.h3`
  margin-top: 0;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
`;

const Item = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  position: relative;
  overflow: hidden;
`;

const ItemTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: #3498db;
`;

const ItemBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #e74c3c;
  color: white;
  font-size: 0.7rem;
  padding: 4px 8px;
  transform: rotate(45deg) translate(0, -50%);
  transform-origin: top right;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #27ae60;
  font-size: 0.9rem;
`;

function DarkPattern() {
  return (
    <Container>
      <Title>
        <FaStar style={{ color: '#f1c40f' }} />
        Enhance Your Travel Experience
      </Title>
      
      <ItemGrid>
        <Item>
          <ItemBadge>POPULAR</ItemBadge>
          <ItemTitle>Airport Lounge Access</ItemTitle>
          <ItemPrice>$45</ItemPrice>
          <Checkbox>
            <FaCheck /> Added to your booking
          </Checkbox>
        </Item>
        
        <Item>
          <ItemTitle>Premium Travel Insurance</ItemTitle>
          <ItemPrice>$35</ItemPrice>
          <Checkbox>
            <FaCheck /> Added to your booking
          </Checkbox>
        </Item>
        
        <Item>
          <ItemTitle>Priority Boarding</ItemTitle>
          <ItemPrice>$15</ItemPrice>
          <Checkbox>
            <FaCheck /> Added to your booking
          </Checkbox>
        </Item>
        
        <Item>
          <ItemBadge>50% OFF</ItemBadge>
          <ItemTitle>Extra Legroom Seat</ItemTitle>
          <ItemPrice>$25</ItemPrice>
          <Checkbox>
            <FaCheck /> Added to your booking
          </Checkbox>
        </Item>
      </ItemGrid>
    </Container>
  );
}

export default DarkPattern;