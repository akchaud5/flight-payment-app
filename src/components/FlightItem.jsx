import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Item = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background: white;
`;

const FlightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Airline = styled.h3`
  margin: 0;
  color: #2c3e50;
`;

const Price = styled.span`
  font-weight: bold;
  color: #3498db;
`;

const FlightDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Route = styled.div`
  display: flex;
  align-items: center;
`;

const Airport = styled.span`
  font-weight: bold;
`;

const Time = styled.span`
  color: #7f8c8d;
`;

const DeleteButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  
  &:hover {
    background: #c0392b;
  }
`;

function FlightItem({ item }) {
  const { removeItem } = useCart();
  
  return (
    <Item>
      <FlightHeader>
        <Airline>{item.airline} - {item.flightNo}</Airline>
        <Price>${item.price}</Price>
      </FlightHeader>
      
      <FlightDetails>
        <div>
          <Time>{item.date}</Time>
        </div>
      </FlightDetails>
      
      <FlightDetails>
        <Route>
          <Airport>{item.origin}</Airport>
          <span> → </span>
          <Airport>{item.destination}</Airport>
        </Route>
        <div>
          <Time>{item.departTime} - {item.arriveTime}</Time>
        </div>
      </FlightDetails>
      
      <DeleteButton onClick={() => removeItem(item.id)}>
        <FaTrash /> Remove
      </DeleteButton>
    </Item>
  );
}

export default FlightItem;