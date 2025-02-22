import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/actions';
import { Box, Button, Image, Text, Grid } from '@chakra-ui/react';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Text>Loading products...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} p={5}>
      {products.map((product) => (
        <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Image src={product.image} alt={product.title} h="200px" objectFit="contain" />
          <Text mt={2} fontWeight="bold">{product.title}</Text>
          <Text>${product.price}</Text>
          <Button mt={3} colorScheme="teal" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;