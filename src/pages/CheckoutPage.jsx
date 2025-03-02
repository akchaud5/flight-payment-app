import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import PaymentForm from '../components/PaymentForm';
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
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0;
  color: #2c3e50;
`;

const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? '#3498db' : '#95a5a6'};
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
`;

const FlightSummary = styled.div`
  margin-bottom: 8px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TotalRow = styled(SummaryItem)`
  font-weight: bold;
  border-top: 1px solid #e0e0e0;
  padding-top: 8px;
`;

const PayButton = styled.button`
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

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
`;

function CheckoutPage() {
  const { items } = useCart();
  const navigate = useNavigate();
  
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const taxes = (totalPrice * 0.1).toFixed(2);
  const finalTotal = (parseFloat(totalPrice) + parseFloat(taxes)).toFixed(2);
  
  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft />
        </BackButton>
        <Title>Checkout</Title>
      </Header>
      
      <Progress>
        <Step>Cart</Step>
        <Step active>Payment</Step>
        <Step>Confirmation</Step>
      </Progress>
      
      <Section>
        <SectionTitle>Flight Summary</SectionTitle>
        {items.map(item => (
          <FlightSummary key={item.id}>
            <div>{item.airline} - {item.flightNo}</div>
            <div>{item.origin} → {item.destination}, {item.date}</div>
            <SummaryItem>
              <span>Flight price</span>
              <span>${item.price.toFixed(2)}</span>
            </SummaryItem>
          </FlightSummary>
        ))}
        
        <SummaryItem>
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </SummaryItem>
        
        <SummaryItem>
          <span>Taxes & Fees</span>
          <span>${taxes}</span>
        </SummaryItem>
        
        <TotalRow>
          <span>Total</span>
          <span>${finalTotal}</span>
        </TotalRow>
      </Section>
      
      <Section>
        <SectionTitle>Passenger Information</SectionTitle>
        <InputGroup>
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Doe" />
        </InputGroup>
        
        <InputGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="john@example.com" />
        </InputGroup>
        
        <InputGroup>
          <Label>Phone</Label>
          <Input type="tel" placeholder="+1 (555) 123-4567" />
        </InputGroup>
      </Section>
      
      <Section>
        <SectionTitle>Payment Method</SectionTitle>
        <PaymentForm />
      </Section>
      
      <PayButton onClick={() => navigate('/confirmation')}>
        Pay ${finalTotal}
      </PayButton>
    </PageContainer>
  );
}

export default CheckoutPage;