import React from 'react';
import { Box, Flex, Link, Text, Badge } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Flex bg="teal.500" color="white" p={4} justify="space-between">
      <Text fontSize="xl" fontWeight="bold">E-Shop</Text>
      <Flex gap={4}>
        <Link as={RouterLink} to="/">Products</Link>
        <Link as={RouterLink} to="/cart">
          Cart <Badge colorScheme="pink">{totalItems}</Badge>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;