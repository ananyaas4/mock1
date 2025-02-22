import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => (
  <Box textAlign="center" p={10}>
    <Text fontSize="2xl">🎉 Order Placed Successfully! 🎉</Text>
    <Link to="/">
      <Button colorScheme="teal" mt={5}>
        Back to Products
      </Button>
    </Link>
  </Box>
);

export default OrderSuccess;