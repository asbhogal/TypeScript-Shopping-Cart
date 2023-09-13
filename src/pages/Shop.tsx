import { Box, SimpleGrid } from "@chakra-ui/react";
import productItems from "../data/products.json";
import { StoreItem } from "../components/StoreItem";

export function Shop() {
  return (
    <>
      <SimpleGrid
        position="relative"
        top="4.0625rem"
        minChildWidth="16.5625rem"
        spacing="1.25rem"
        maxWidth="93.75rem"
        width="100%"
        margin="0 auto"
        padding="3.125rem"
      >
        {productItems.map((item) => (
          <Box key={item.id}>
            <StoreItem {...item} />
          </Box>
        ))}
      </SimpleGrid>
      <Box
        position="absolute"
        padding="9.375rem .625rem .625rem .625rem"
        fontSize="0.85rem"
        textAlign="center"
        width="100%"
      >
        The products on this page are purely for demonstrable purposes only. No
        orders will be fulfilled. Any trademarks remain the sole right of the
        respective owners. The owner of this site assumes no ownership of any
        trademarks represented herein.
      </Box>
    </>
  );
}
