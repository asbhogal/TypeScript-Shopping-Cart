import { Box, Button, Icon, Slide, Text } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";

type ShoppingCartProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  return (
    <Slide direction="right" in={isOpen}>
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="red"
        width="300px"
        position="absolute"
        right="0"
        top="0"
        height="100vh"
        background="#F2F0EB"
        zIndex="5"
        padding="10px"
      >
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="lg">Cart</Text>
          <Button onClick={onClose}>
            <Icon as={RxCross2} boxSize={8} />
          </Button>
        </Box>
        <p>Total Price</p>
      </Box>
    </Slide>
  );
}
