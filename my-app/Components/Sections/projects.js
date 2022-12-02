import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  Divider,
  List,
  ListItem,
  Avatar,
  Stack,
} from "@chakra-ui/react";

import { HiOutlineLink } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  const iconBackgroundColor = useColorModeValue("#ECF0F6", "#202023");

  // const codeLines = [1, 2, 3, 4, 5, 6, 7, 8];

  const projects = [
    {
      name: "snake",
      project: "Project 1",
      description:
        "A childhood classic, I recreated Snake with a colour twist.",
      tech: " html • css • javascript",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-1",
      deployed: "https://adrianp2021.github.io/SEI-Project-1/",
      image:
        "https://user-images.githubusercontent.com/83225952/128079151-677d6296-d12b-4ca4-99c6-f90e619e1358.jpeg",
      commits: "19 commits",
    },
    {
      name: "drinkard",
      project: "Project 2",
      description: "Holiday application which hosts a variety of 25 cocktails.",
      tech: "html • css • react • axios • bulma • api",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-2",
      deployed: "https://drinkard.netlify.app/",
      image:
        "https://user-images.githubusercontent.com/83225952/202905974-1bad887a-539c-441c-9860-17f7b723b43b.png",
      commits: "25 commits",
    },
    {
      name: "trust pistis",
      project: "Project 3",
      description:
        "Application based on TrustPilot, with Greek mythology theme.",
      tech: "mongo db • express • react • node js",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-3",
      deployed: "https://whispering-coast-70189.herokuapp.com/",
      image:
        "https://user-images.githubusercontent.com/83225952/128638320-a818da09-c0f6-426b-b6a6-33fd8a10908f.jpeg",
      commits: "12 commits",
    },
    {
      name: "crumble",
      project: "Project 4",
      description: "Dating app, matching users based on same interests.",
      tech: "react • django • python • postgresql • bulma",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-4",
      deployed: "https://github.com/adrianp2021/SEI-Project-4",
      image:
        "https://user-images.githubusercontent.com/83225952/130610068-82aaf1c1-15b3-4c6c-82cf-8018bdc1f308.jpeg",
      commits: "15 commits",
    },
  ];

  const projectImages = [
    {
      image:
        "https://user-images.githubusercontent.com/83225952/128079151-677d6296-d12b-4ca4-99c6-f90e619e1358.jpeg",
    },
    {
      image:
        "https://user-images.githubusercontent.com/83225952/202905974-1bad887a-539c-441c-9860-17f7b723b43b.png",
    },
    {
      image:
        "https://user-images.githubusercontent.com/83225952/128638320-a818da09-c0f6-426b-b6a6-33fd8a10908f.jpeg",
    },
    {
      image:
        "https://user-images.githubusercontent.com/83225952/130610068-82aaf1c1-15b3-4c6c-82cf-8018bdc1f308.jpeg",
    },
  ];

  // const bgColor = useColorModeValue("gray.50", "blackAlpha.800");
  const bgColor = useColorModeValue("gray.50", "#19191C");

  return (
    <Box
      h={["100%"]}
      px={[0, 0, 10, 40]}
      bg={bgColor}
      display={["block", "block", "flex", "flex"]}
      justifyContent="flex-end"
      py={20}
    >
      <Box w="100%" maxW="1200px" margin="auto">
        <Box display="flex" px={[5, 5, 0]} mb={[5, 5, 0, 0]}>
          <Heading>Projects</Heading>
        </Box>
        <Box
          w={["100%"]}
          textAlign="start"
          fontWeight="600"
          px={[0, 5, 0]}
          pt={[0, 0, 10]}
        >
          <List
            display={["block", "block", "block", "flex"]}
            // border="1px solid"
            flexWrap="wrap"
          >
            {projects.map((value, i) => {
              return (
                <ListItem
                  key={i}
                  borderRadius={["none", "md"]}
                  pointer="cursor"
                  mt={5}
                  mx={[0, 0, 3]}
                  p={4}
                  border={["none", ".001px solid  rgba(63,63,70,.4)"]}
                  flexGrow={2}
                  flexBasis={["33.333333%"]}
                >
                  <Flex justifyContent="space-between">
                    <Heading
                      as="h3"
                      size="sm"
                      fontWeight="400"
                      mb={4}
                      // color="#d4922f"
                    >
                      {value.name}
                    </Heading>
                    <Text fontWeight="300" color="gray.600" fontSize="sm">
                      {value.commits}
                    </Text>
                  </Flex>

                  <Box
                  py={5}
                    borderRadius="md"
                    // bg="#0C0F13"
                    // h="100%"
                    display="block"
                    fontSize="13px"
                    letterSpacing={0.9}
                    // fontWeight="550"
                    bg={iconBackgroundColor}
                    color="#61616C"
                    // color="green.500"
                    fontFamily="Red Hat Text, sans-serif"
                    _hover={[
                      { background: iconBackgroundColor },
                      { cursor: "pointer" },
                      { transition: ".2s ease" },
                    ]}
                    // border=".1px solid"
                    // border={["none", ".001px solid  rgba(63,63,70,.4)"]}
                  >
                    <Flex p={5}>
                      <Box>
                        <Divider
                          orientation="vertical"
                          borderWidth="100%"
                          // borderColor="green.500"
                        />
                      </Box>

                      <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                        ml={3}
                      >
                        /**
                        <Flex ml={3} mt={1}>
                          <Text>* &nbsp; {value.project}</Text>
                        </Flex>
                        <Text ml={3}>* &nbsp; {value.description}</Text>
                        <Text ml={3}>* &nbsp; {value.tech}</Text>
                        */
                      </Flex>
                    </Flex>

                    <Box bg="#d4922f" color="gray.800" >
                      <a
                        href={value.deployed}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="deployedProject"
                      >
                        <Text ml={4} fontSize="sm">
                          see project
                        </Text>
                      </a>
                    </Box>
                  </Box>

                  {/* <Flex borderBottomRadius="md">
                    <Box
                      _hover={[{ color: "#777" }]}
                      transition="0.2s ease-in"
                      mr={5}
                    >
                      <a
                        href={value.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="github"
                      >
                        <AiOutlineGithub />
                      </a>
                    </Box>
                    <Box _hover={[{ color: "#777" }]} transition="0.2s ease-in">
                      <a
                        href={value.deployed}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="deployedProject"
                      >
                        <HiOutlineLink />
                      </a>
                    </Box>
                  </Flex> */}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
