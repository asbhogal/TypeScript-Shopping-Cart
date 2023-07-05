import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";

export function Navbar() {
  return (
    <Box boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" p={4}>
      <header className="header">
        <Flex>
          <UnorderedList styleType="none" margin="0">
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <ListItem>
                <Link
                  to="/"
                  as={NavLink}
                  fontSize={24}
                  _hover={{
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/about"
                  as={NavLink}
                  fontSize={24}
                  _hover={{
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/shop"
                  as={NavLink}
                  fontSize={24}
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
          <Spacer />
          <Button variant="link">
            <Icon as={BsBagHeart} boxSize={8} />
            <Text
              backgroundColor="purple"
              display="flex"
              justifyContent="center"
              width={5}
              color="white"
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