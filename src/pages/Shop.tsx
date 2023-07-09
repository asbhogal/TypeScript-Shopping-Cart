import { Box, SimpleGrid } from "@chakra-ui/react";
import productItems from "../data/products.json";
import { ProductItem } from "../components/ProductItem";

export function Shop() {
  return (
    <>
      <SimpleGrid
        position="relative"
        top="4.0625rem"
        minChildWidth="16.5625rem"
        spacing="1.25rem"
        padding="1.25rem"
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
