import {
  Flex,
  Heading,
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  // const formBackground = useColorModeValue("gray.300", "gray.900");
  // const { colorMode, toggleColorMode } = useColorMode();

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "blackAlpha.800");

  return (
    <Flex
      px={[0, 0, 10, 40]}
      w="100vw"
      pos="fixed"
      bg={bgColor}
      zIndex={9999}
      h={20}
    >
      <Box
        // border="1px solid purple"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={[5, 5, 0]}
      >
        <Heading fontFamily="Red Hat Text, sans-serif" fontSize="17px">
          This is the Navbar
        </Heading>
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        {/* <Button onClick={toggleColorMode}>Change bg</Button> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
