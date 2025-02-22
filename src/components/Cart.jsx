import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <VStack spacing={5} p={5}>
      {items.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        items.map((item) => (
          <Box key={item.id} w="100%" p={3} shadow="md" borderWidth="1px">
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity(item.id, parseInt(e.target.value) || 1))}
              width="60px"
            />
            <Button colorScheme="red" onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </Button>
          </Box>
        ))
      )}
      <Text>Total: ${totalPrice.toFixed(2)}</Text>
      <Button colorScheme="green" onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </Button>
    </VStack>
  );
};

export default Cart;