import { useState } from 'react';
import styled from 'styled-components';
import { FaCreditCard, FaApple } from 'react-icons/fa';

const FormContainer = styled.div`
  margin-top: 24px;
`;

const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const PaymentOption = styled.div`
  flex: 1;
  padding: 16px;
  border: 1px solid ${props => props.selected ? '#3498db' : '#e0e0e0'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  background: ${props => props.selected ? '#f0f7ff' : 'white'};
  
  &:hover {
    border-color: #3498db;
  }
`;

const CardForm = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
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

const ApplePayButton = styled.button`
  width: 100%;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  display: ${props => props.visible ? 'flex' : 'none'};
`;

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  return (
    <FormContainer>
      <Label>Payment Method</Label>
      <PaymentOptions>
        <PaymentOption 
          selected={paymentMethod === 'card'}
          onClick={() => setPaymentMethod('card')}
        >
          <FaCreditCard />
          Credit Card
        </PaymentOption>
        <PaymentOption
          selected={paymentMethod === 'apple'}
          onClick={() => setPaymentMethod('apple')}
        >
          <FaApple />
          Apple Pay
        </PaymentOption>
      </PaymentOptions>
      
      <CardForm visible={paymentMethod === 'card'}>
        <InputGroup>
          <Label>Cardholder Name</Label>
          <Input type="text" placeholder="John Doe" />
        </InputGroup>
        
        <InputGroup>
          <Label>Card Number</Label>
          <Input type="text" placeholder="4242 4242 4242 4242" />
        </InputGroup>
        
        <InputGroup>
          <Label>Expiry Date</Label>
          <Input type="text" placeholder="MM/YY" />
        </InputGroup>
        
        <InputGroup>
          <Label>CVV</Label>
          <Input type="text" placeholder="123" />
        </InputGroup>
      </CardForm>
      
      <ApplePayButton visible={paymentMethod === 'apple'}>
        <FaApple /> Pay with Apple Pay
      </ApplePayButton>
    </FormContainer>
  );
}

export default PaymentForm;