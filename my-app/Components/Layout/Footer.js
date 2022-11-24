import {
  Divider,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link";

import * as ReactIcons from "react-icons";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  const iconBackgroundColor = useColorModeValue("#ECF0F6", "#252529");
  const socialMedia = [
    {
      name: "email",
      link: "mailto:adrianpantea10@gmail.com",
      AiOutlineMail,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/adrian-pantea/",
      AiFillGithub,
    },
    {
      name: "github",
      link: "https://github.com/adrianp2021",
      AiFillLinkedin,
    },
    {
      name: "twitter",
      link: "https://twitter.com/AdrianPantea4",
      AiFillTwitterCircle,
    },
  ];

  const icons = [
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
  ];

  const bgColor = useColorModeValue("gray.50", "#19191C");

  return (
    <>
      <Box px={[0, 0, 10, 40]} bg={bgColor}>
        <Box maxW="1200px" margin="auto" px={[0, 5, 0]}>
          <Divider />
          <Box display={["block", "flex"]}>
            <Box w={["100%"]} pt={5}>
              <Box
                fontWeight="500"
                display={["block", "block", "flex"]}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display={["none", "none", "flex"]}>
                  <NextLink href="/" passHref>
                    <Link mr={5} _hover={[{ opacity: ".6" }]}>
                      home
                    </Link>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <Link mr={5} _hover={[{ opacity: ".6" }]}>
                      about
                    </Link>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <Link mr={5} _hover={[{ opacity: ".6" }]}>
                      contact
                    </Link>
                  </NextLink>
                </Box>

                <Box>
                  <List display="flex" justifyContent={["center", "none"]}>
                    {icons.map((value, index) => {
                      const Icon = icons[index];

                      return (
                        <ListItem
                          key={index}
                          ml={5}
                          color="#7A7171"
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
                            <Icon fontSize="20px" />
                          </a>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Box>
              <Box
                textAlign={["center", "center", "end"]}
                color="#7A7171"
                py={5}
              >
                <Text as="span" fontSize="14px" letterSpacing={0.8}>
                  ⓒ {new Date().getFullYear()} Adrian Pantea. All rights
                  reserved.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
