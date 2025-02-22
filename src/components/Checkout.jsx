import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../redux/actions';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
    navigate('/order-success');
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl">Order Summary</Text>
      {items.map((item) => (
        <Box key={item.id}>
          <Text>{item.title} - Quantity: {item.quantity}</Text>
        </Box>
      ))}
      <Text>Total: ${totalPrice.toFixed(2)}</Text>
      <Button colorScheme="blue" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </VStack>
  );
};

export default Checkout;