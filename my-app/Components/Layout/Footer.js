import {
  Divider,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

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

  // const Icon = icons[idx];

  const example = [
    {
      name: "eva",
    },
    {
      name: "adam",
    },
    {
      name: "cain",
    },
    {
      name: "abel",
    },
  ];

  const bgColor = useColorModeValue("gray.50", "#19191C");

  return (
    <>
      <Box px={[0, 0, 10, 40]} h="100%" bg={bgColor}>
        <Box>
          <Heading as="h3" size="lg">
            let&apos;s connect
          </Heading>
        </Box>

        <Box h="100px">
          {/* <List>
            {socialMedia.map((value, id) => (
              <ListItem key={id}>
                <a href={value.link} target="_blank" rel="noreferrer">
                  <Text
                    // transform="scaleY(.9)"
                    transition="0.2s ease-in"
                    _hover={[{ color: "#777" }]}
                    fontFamily="Red Hat Text, sans-serif"
                    letterSpacing={0.4}
                    // fontSize={["16px"]}
                    mb={2}
                  >
                    {value.name}
                  </Text>
                </a>
              </ListItem>
            ))}
          </List> */}

          <List display="flex">
            {icons.map((value, index) => {
              const Icon = icons[index];

              return (
                <ListItem key={index} mr={3}  _hover={[{ color: "#38C397" }, { transition: ".9s ease" },]} >
                  <a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noreferrer"
                    
                  >
                    <Icon />
                  </a>
                </ListItem>
              );
            })}
          </List>

          {/* {icons.map((value, idx) => (
            <li key={value.id} className="nav-text">
              <button
                className="genre-btn"
                onClick={() => genreSelectionHandler(value.id)}
              >
                <Icon icon={icons[idx]} />
              </button>
            </li>
          ))} */}
        </Box>
        {/* <Box w="100%" display={["block", "block", "flex"]} px={[5, 5, 0]}> */}
        {/* <Box w={["100%", "100%", "50%", "50%"]} display="flex" mb={5}>
            <Heading
              fontFamily="Red Hat Text, sans-serif"
              fontSize={["20px"]}
              fontWeight="600"
            >
              let&apos;s connect
            </Heading>
          </Box> */}

        {/* <Box w={["100%", "100%", "50%", "50%"]}> */}
        {/* <Box mb={5}>
              {socialMedia.map((social, index) => {
                return (
                  <>
                    <Box key={index}>
                    <List key={index}>
                      <ListItem href={social.link} target="_blank" rel="noreferrer">
                        <Text
                          transform="scaleY(.9)"
                          transition="0.2s ease-in"
                          _hover={[{ color: "#777" }]}
                          fontFamily="Red Hat Text, sans-serif"
                          letterSpacing={0.4}
                          fontSize={["16px"]}
                          mb={2}
                        >
                          {social.name}
                        </Text>
                      </ListItem>
                    </List>
                    </Box>
                  </>
                );
              })}
            </Box> */}

        {/* <List>
              {socialMedia.map((value, id) => (
                <ListItem key={id}>
                  <a href={value.link} target="_blank" rel="noreferrer">
                    <Text
                      transform="scaleY(.9)"
                      transition="0.2s ease-in"
                      _hover={[{ color: "#777" }]}
                      fontFamily="Red Hat Text, sans-serif"
                      letterSpacing={0.4}
                      fontSize={["16px"]}
                      mb={2}
                    >
                      {value.name}
                    </Text>
                  </a>
                </ListItem>
              ))}
            </List> */}

        {/* <Box mt={5} display="block">
              <Divider />
              <Text
                transform="scaleY(.9)"
                fontFamily="Red Hat Text, sans-serif"
                letterSpacing={0.4}
                color="#777"
                fontSize={["14px"]}
                fontWeight="600"
                py={2}
              >
                ⓒ Copyright {new Date().getFullYear()}
              </Text>
            </Box> */}
        {/* </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default Footer;
