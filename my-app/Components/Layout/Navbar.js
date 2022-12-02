import { useState } from "react";

import NextLink from "next/link";

import {
  Flex,
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  List,
  ListItem,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Navbar = () => {
  // const formBackground = useColorModeValue("gray.300", "gray.900");
  // const { colorMode, toggleColorMode } = useColorMode();

  const { colorMode, toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue("gray.50", "blackAlpha.800");
  const bgColor = useColorModeValue("gray.50", "#19191C");
  const menuColor = useColorModeValue("1px solid #ECF0F6", "1px solid #3F3F46");
  const menuBackground = useColorModeValue("#F1F5FA", "#1E1E21");

  const isDark = colorMode === "dark";
  // const [display, changeDisplay] = useState("none");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const icons = [
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
  ];

  return (
    <Flex
      px={[0, 0, 10, 40]}
      pos="sticky"
      top="0"
      w="inherit"
      bg={bgColor}
      zIndex={9}
      h={20}
      justifyContent="flex-end"
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        px={[5, 5, 0]}
      >
        <Box
          borderRadius="lg"
          fontSize="sm"
          fontWeight="500"
          display={["none", "none", "flex"]}
        >
          <NextLink href="/" passHref>
            <Link mx={5} fontSize="sm" fontWeight="700">
              home
            </Link>
          </NextLink>

          <NextLink href="/about" passHref>
            <Link mx={5} fontSize="sm" fontWeight="700">
              about
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link mx={5} fontSize="sm" fontWeight="700">
              contact
            </Link>
          </NextLink>
        </Box>

        <Box display={["flex", "flex", "none"]}>
          <Button
            border={menuColor}
            onClick={onOpen}
            rightIcon={<MdOutlineKeyboardArrowDown />}
            boxShadow="base"
            borderRadius="xl"
          >
            Menu
          </Button>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            blockScrollOnMount={false}
            motionPreset="scale"
            closeOnEsc={true}
          >
            <ModalOverlay
              bg="blackAlpha.400"
              backdropFilter="blur(3px) hue-rotate(10deg)"
              // zIndex={8888}
            />
            <ModalContent
              zIndex={1}
              mt={20}
              maxW="90%"
              bg={menuBackground}
              border="1px solid rgba(63,63,70,.4)"
              m={5}
              borderRadius="xl"
            >
              <ModalHeader fontSize="14px" opacity=".6" fontWeight="500">
                Navigation
              </ModalHeader>
              <Box>
                <ModalCloseButton opacity=".6" />
              </Box>
              <Box my={3}>
                <ModalBody h="100%" display="flex" flexDir="column">
                  <NextLink href="/" passHref>
                    <Link fontSize="sm" fontWeight="400" onClick={onClose}>
                      Home
                    </Link>
                  </NextLink>{" "}
                  <Divider my={3} />
                  <NextLink href="/about" passHref>
                    <Link fontSize="sm" fontWeight="400" onClick={onClose}>
                      About
                    </Link>
                  </NextLink>
                  <Divider my={3} />
                  <NextLink href="/contact" passHref>
                    <Link fontSize="sm" fontWeight="400" onClick={onClose}>
                      Contact
                    </Link>
                  </NextLink>
                  <Divider mt={3} />
                  <ModalHeader
                    fontSize="14px"
                    opacity=".6"
                    p={0}
                    mt={10}
                    fontWeight="500"
                  >
                    Follow me
                  </ModalHeader>
                  <Box>
                    <List
                      display="flex"
                      justifyContent={["flex-start", "none"]}
                    >
                      {icons.map((value, index) => {
                        const Icon = icons[index];

                        return (
                          <ListItem
                            key={index}
                            mr={5}
                            my={3}
                            _hover={[
                              { color: "#38C397" },
                              { transition: ".9s ease" },
                              { opacity: "1" },
                            ]}
                          >
                            <a
                              href="https://www.linkedin.com/feed/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon fontSize="17px" />
                            </a>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                </ModalBody>
              </Box>
            </ModalContent>
          </Modal>
        </Box>

        <IconButton
          icon={colorMode === "dark" ? <FiSun /> : <BsMoon />}
          onClick={toggleColorMode}
          ml={5}
          boxShadow="base"
          border={menuColor}
          borderRadius="xl"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
