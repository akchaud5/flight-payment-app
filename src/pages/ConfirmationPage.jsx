import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheckCircle, FaPlaneDeparture } from 'react-icons/fa';
import DarkPattern from '../components/DarkPattern';
import { useCart } from '../context/CartContext';

const PageContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
`;

const SuccessHeader = styled.div`
  text-align: center;
  margin: 32px 0;
`;

const Icon = styled.div`
  color: #27ae60;
  font-size: 3rem;
  margin-bottom: 16px;
`;

const SuccessTitle = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  color: #2c3e50;
`;

const ConfirmationNumber = styled.div`
  font-size: 1.1rem;
  color: #7f8c8d;
`;

const Section = styled.section`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FlightCard = styled.div`
  border-left: 3px solid #3498db;
  padding-left: 12px;
  margin-bottom: 16px;
`;

const FlightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Date = styled.div`
  color: #7f8c8d;
`;

const FlightRoute = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
`;

const Airport = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Divider = styled.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  position: relative;
  
  &::after {
    content: "✈️";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 0 8px;
  }
`;

const FlightDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 0.9rem;
`;

const HomeButton = styled.button`
  width: 100%;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 24px;
  
  &:hover {
    background: #2980b9;
  }
`;

function ConfirmationPage() {
  const { items } = useCart();
  const navigate = useNavigate();
  
  // Generate a random confirmation number
  const confirmationNumber = "FL" + Math.random().toString(36).substring(2, 10).toUpperCase();
  
  return (
    <PageContainer>
      <SuccessHeader>
        <Icon>
          <FaCheckCircle />
        </Icon>
        <SuccessTitle>Booking Confirmed!</SuccessTitle>
        <ConfirmationNumber>Confirmation #: {confirmationNumber}</ConfirmationNumber>
      </SuccessHeader>
      
      <Section>
        <SectionTitle>
          <FaPlaneDeparture />
          Your Itinerary
        </SectionTitle>
        
        {items.map(item => (
          <FlightCard key={item.id}>
            <FlightHeader>
              <div>{item.airline} {item.flightNo}</div>
              <Date>{item.date}</Date>
            </FlightHeader>
            
            <FlightRoute>
              <Airport>{item.origin}</Airport>
              <Divider />
              <Airport>{item.destination}</Airport>
            </FlightRoute>
            
            <FlightDetails>
              <div>Depart: {item.departTime}</div>
              <div>Arrive: {item.arriveTime}</div>
            </FlightDetails>
          </FlightCard>
        ))}
      </Section>
      
      <DarkPattern />
      
      <HomeButton onClick={() => navigate('/')}>
        Return to Homepage
      </HomeButton>
    </PageContainer>
  );
}

export default ConfirmationPage;