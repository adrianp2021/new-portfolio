import { useState } from "react";

import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  useColorModeValue,
  Box,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
// import Head from "next/head";

import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Contact() {
  // const bgColor = useColorModeValue("whit", "blackAlpha.800");
  const bgColor = useColorModeValue("gray.50", "#19191C");

  // const socialMedia = [
  //   {
  //     name: "email",
  //     link: "mailto:adrianpantea10@gmail.com",
  //   },
  //   {
  //     name: "linkedin",
  //     link: "https://www.linkedin.com/in/adrian-pantea/",
  //   },
  //   {
  //     name: "github",
  //     link: "https://github.com/adrianp2021",
  //   },
  //   {
  //     name: "twitter",
  //     link: "https://twitter.com/AdrianPantea4",
  //   },
  // ];

  const socialMedia = [
    {
      name: "Send an email",
      link: "mailto:adrianpantea10@gmail.com",
      // AiOutlineMail,
      icon: AiOutlineMail,
    },
    {
      name: "Follow me on Linkedin",
      link: "https://www.linkedin.com/in/adrian-pantea/",
      icon: AiFillGithub,
    },
    {
      name: "Follow me on Github",
      link: "https://github.com/adrianp2021",
      icon: AiFillLinkedin,
    },
    {
      name: "Follow me on Twitter",
      link: "https://twitter.com/AdrianPantea4",
      icon: AiFillTwitterCircle,
    },
  ];

  const icons = [
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
  ];

  const inputBackgroundColour = useColorModeValue("#ECF0F6", "#202023");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    setSubmitted(true);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }
  // <Box w={["100%", "100%", "40%"]} textAlign="start" px={[5, 5, 0]}>

  return (
    <>
      <Box
        h={["100%"]}
        px={[0, 0, 10, 40]}
        bg={bgColor}
        // display={["block", "block", "flex", "flex"]}
        justifyContent="flex-end"
        py={20}
        // border="1px solid"
      >
        <Box
          w="100%"
          maxW="1200px"
          margin="auto"
          h="100%"
          // border=".001px solid red"
        >
          <Box w={["100%", "40%"]} px={[5, 5, 0]} mb={[10, 10, 0, 0]}>
            <Heading fontWeight="700" letterSpacing={0.4}>
              Contact
            </Heading>
            <Text mt={5} opacity=".6">
              If you just want to say hi, discuss a project or get to know each
              other, let's get in touch.{" "}
            </Text>
          </Box>
          <Box display={["block", "flex"]} justifyContent="space-between">
            <Box
              w={["100%", "100%", "40%"]}
              textAlign="start"
              px={[5, 5, 0]}
              mt={20}
              // border="1px solid"
            >
              <form action="submit" method="POST" onSubmit={handleOnSubmit}>
                <Stack>
                  <FormControl isRequired>
                    <FormLabel opacity=".6" letterSpacing="wide" fontSize="sm">
                      Name
                    </FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="name"
                      focusBorderColor="#d4922f"
                      border="solid #202023"
                      bg={inputBackgroundColour}
                      isRequired
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      opacity=".6"
                      letterSpacing="wide"
                      fontSize="sm"
                      mt={5}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="email"
                      // placeholder="john.doe@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      focusBorderColor="#d4922f"
                      border="solid #202023"
                      bg={inputBackgroundColour}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      opacity=".6"
                      letterSpacing="wide"
                      fontSize="sm"
                      mt={5}
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      // placeholder="write your message..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      focusBorderColor="#d4922f"
                      border="solid #202023"
                      bg={inputBackgroundColour}
                    />
                  </FormControl>

                  <Box>
                    <Button
                      mt={5}
                      borderRadius="md"
                      type="submit"
                      // transform="scaleY(.9)"
                    >
                      <Text>Send </Text>
                    </Button>
                  </Box>

                  <Flex>
                    {status === "success" ? (
                      <Alert status="success">
                        <AlertIcon />
                        <AlertTitle mr={2}>Success!</AlertTitle>
                        <AlertDescription>
                          Your email has been sent.
                        </AlertDescription>
                      </Alert>
                    ) : status === "error" ? (
                      <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>Error!</AlertTitle>
                        <AlertDescription>
                          Your email was unable to be sent.
                        </AlertDescription>
                      </Alert>
                    ) : null}
                  </Flex>
                </Stack>
              </form>
            </Box>

            <Box
              w={["100%", "100%", "40%"]}

              px={[5, 5, 0]}

              mt={[20, 20]}

            >
              <Heading size="md">Let's connect </Heading>
              <List display="block">
                {socialMedia.map((value, index) => {
                  const Icon = icons[index];

                  return (
                    <ListItem
                      key={index}
                      // border="1px solid"
                      // mr={3}
                      _hover={[
                        { color: "#38C397" },
                        { transition: ".9s ease" },
                      ]}
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      my={3}
                    >
                      <a target="_blank" rel="noreferrer" href={value.link}>
                        <Flex alignItems="center">
                          <Icon opacity=".6"/>
                          <Text ml={3}> {value.name}</Text>
                        </Flex>
                      </a>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
