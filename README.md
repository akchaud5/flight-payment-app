# Flight Payment App

A mobile-based flight ticket payment application built with React. This project demonstrates a complete payment flow for purchasing flight tickets.

## Features

- Shopping cart page with flight items
- Real-time cart updates when removing items
- Cart icon showing the current number of items
- Checkout page with flight summary
- Payment method selection (Credit Card or Apple Pay)
- Dynamic form that changes based on payment method selection
- Order confirmation page with booking details
- Dark pattern implementation with pre-selected add-ons

## How to Run

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

3. Build for production:
```
npm run build
```

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Main application pages
- `/src/context`: State management using React Context API
- `/src/hooks`: Custom React hooks

## Key Requirements Implemented

1. **Shopping Cart Page**
   - Shows 3 flight tickets initially
   - First flight item has functional delete button
   - Cart icon shows current number of items
   - Checkout button navigates to payment page

2. **Checkout Page**
   - Payment method selection (Credit Card & Apple Pay)
   - Credit card form that hides when Apple Pay is selected
   - Passenger information collection
   - Flight summary with pricing details

3. **Confirmation Page**
   - Success message with booking confirmation
   - Flight itinerary display
   - Dark pattern section with pre-selected add-ons
   - Return to homepage button

## Technologies Used

- React
- React Router DOM
- Styled Components
- React Icons