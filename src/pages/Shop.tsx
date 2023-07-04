import { Box, SimpleGrid } from "@chakra-ui/react";
import productItems from "../data/products.json";

export function Shop() {
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing="20px">
        {productItems.map((item) => (
          <Box>{JSON.stringify(item)}</Box>
        ))}
      </SimpleGrid>
    </>
  );
}
