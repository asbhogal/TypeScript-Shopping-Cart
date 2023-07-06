import { Box, SimpleGrid } from "@chakra-ui/react";
import productItems from "../data/products.json";
import { ProductItem } from "../components/ProductItem";

export function Shop() {
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing="20px" padding="20px">
        {productItems.map((item) => (
          <Box key={item.id}>
            <ProductItem {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
