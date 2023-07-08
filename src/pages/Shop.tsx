import { Box, SimpleGrid } from "@chakra-ui/react";
import productItems from "../data/products.json";
import { ProductItem } from "../components/ProductItem";

export function Shop() {
  return (
    <>
      <SimpleGrid
        position="relative"
        top="65px"
        minChildWidth="265px"
        spacing="20px"
        padding="20px"
      >
        {productItems.map((item) => (
          <Box key={item.id}>
            <ProductItem {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
