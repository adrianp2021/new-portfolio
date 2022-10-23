import {
  Flex,
  Heading,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const formBackground = useColorModeValue("gray.300", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    
    <Flex px={[0, 0, 10, 40]} w="100vw" pos="fixed">
      <Box
        border="1px solid purple"
        w="100%"
        display="flex"
        justifyContent="space-between"
        px={[5, 5, 0]}
      >
        <Heading fontFamily="Red Hat Text, sans-serif" fontSize="17px" h={20}>
          This is the Navbar
        </Heading>
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Box>
    </Flex>
    
  );
};

export default Navbar;
