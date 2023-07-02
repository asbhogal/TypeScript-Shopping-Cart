import {
  Box,
  Flex,
  Icon,
  Link,
  List,
  ListItem,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

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
          <Icon as={BsCart3} boxSize={8} />
        </Flex>
      </header>
    </Box>
  );
}
