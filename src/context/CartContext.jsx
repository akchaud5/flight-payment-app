import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: 1,
      airline: 'Delta Airlines',
      flightNo: 'DL1234',
      origin: 'JFK',
      destination: 'LAX',
      date: 'Mar 5, 2025',
      departTime: '08:30 AM',
      arriveTime: '11:45 AM',
      price: 349.99
    },
    {
      id: 2,
      airline: 'American Airlines',
      flightNo: 'AA5678',
      origin: 'LAX',
      destination: 'ORD',
      date: 'Mar 10, 2025',
      departTime: '12:15 PM',
      arriveTime: '06:20 PM',
      price: 289.99
    },
    {
      id: 3,
      airline: 'United Airlines',
      flightNo: 'UA9876',
      origin: 'ORD',
      destination: 'JFK',
      date: 'Mar 15, 2025',
      departTime: '03:45 PM',
      arriveTime: '07:10 PM',
      price: 319.99
    }
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}