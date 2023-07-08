import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import logoMain from "/logo.svg";

export function Navbar() {
  return (
    <Box boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" p={4}>
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
          <Button variant="link">
            <Icon as={LiaShoppingBagSolid} boxSize={8} />
            <Text
              backgroundColor="#e3c5a6"
              display="flex"
              justifyContent="center"
              width={5}
              color="#111111"
              fontSize="16px"
              position="absolute"
              top={25}
              left={25}
              borderRadius={10}
            >
              1
            </Text>
          </Button>
        </Flex>
      </header>
    </Box>
  );
}
