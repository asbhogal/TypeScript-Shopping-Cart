import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import logoMain from "/logo.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Box
      position="fixed"
      width="100%"
      backgroundColor="#F2F0EB"
      borderBottom="1px solid #aaaaaa"
      p={4}
      zIndex="2"
    >
      <header className="header">
        <Flex alignItems="center" justifyContent="space-between">
          <Link to="/" as={NavLink}>
            <Image
              display="flex"
              src={logoMain}
              width="50px"
              alt="The letters L and D in cursive"
            ></Image>
          </Link>
          <UnorderedList styleType="none" margin="0">
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <ListItem textTransform="uppercase" fontWeight="600">
                <Link
                  to="/"
                  as={NavLink}
                  fontSize={18}
                  _hover={{
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem textTransform="uppercase" fontWeight="600">
                <Link
                  to="/about"
                  as={NavLink}
                  fontSize={18}
                  _hover={{
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem textTransform="uppercase" fontWeight="600">
                <Link
                  to="/shop"
                  as={NavLink}
                  fontSize={18}
                  _hover={{
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  Shop
                </Link>
              </ListItem>
            </Flex>
          </UnorderedList>
          <Button variant="link" onClick={openCart}>
            <Icon as={LiaShoppingBagSolid} boxSize={10} fill="#111111" />
            <Text
              display="flex"
              justifyContent="center"
              width={5}
              color="#111111"
              fontSize="14px"
              position="absolute"
              bottom="7px"
            >
              {cartQuantity}
            </Text>
          </Button>
        </Flex>
      </header>
    </Box>
  );
}
