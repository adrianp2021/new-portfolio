import { Flex, Heading } from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex px={[0, 0, 10, 40]}>
      <Heading fontFamily="Red Hat Text, sans-serif">
        This is the Navbar
      </Heading>
    </Flex>
  );
};

export default Navbar;
