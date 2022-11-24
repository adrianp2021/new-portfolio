import NextLink from "next/link";
import {
  Flex,
  Heading,
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
  Link,
} from "@chakra-ui/react";

// import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  // const formBackground = useColorModeValue("gray.300", "gray.900");
  // const { colorMode, toggleColorMode } = useColorMode();

  const { colorMode, toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue("gray.50", "blackAlpha.800");
  const bgColor = useColorModeValue("gray.50", "#19191C");
  const iconBackgroundColor = useColorModeValue("#F1F5FA", "#1E1E21");

  // #EDF2F7
  return (
    <Flex
    px={[0, 0, 10, 40]}
      // w="100%"
      pos="sticky"
      top="0"
      w="inherit"
      bg={bgColor}
      zIndex={9999}
      h={20}
      // border="1px solid"
      justifyContent="flex-end"
      opacity=".9"
    >
      <Box
        // border=".1px solid purple"
        // w="100%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        px={[5, 5, 0]}
        // _hover={[
        //   // { background: iconBackgroundColor },
        //   // { transition: ".2s ease" },
        //   {color: "#38C397"}
        // ]}
      >
        <Box borderRadius="lg" fontSize="sm" fontWeight="500">
          <NextLink href="/" passHref>
            <Link
              mx={5}
              fontSize="md"
              fontWeight="700"
              _hover={[{ opacity: ".6" }]}
            >
              home
            </Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link
              mx={5}
              fontSize="md"
              fontWeight="700"
              _hover={[{ opacity: ".6" }]}
            >
              about
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link
              mx={5}
              fontSize="md"
              fontWeight="700"
              _hover={[{ opacity: ".6" }]}
            >
              contact
            </Link>
          </NextLink>
        </Box>

        <IconButton
          icon={colorMode === "dark" ? <FiSun /> : <BsMoon />}
          onClick={toggleColorMode}
          ml={5}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
