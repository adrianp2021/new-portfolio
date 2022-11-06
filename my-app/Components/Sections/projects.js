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
} from "@chakra-ui/react";

import { HiOutlineLink } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      name: "snake",
      description:
        "A childhood classic, I recreated Snake with a colour twist.",
      tech: "html • css • javascript",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-1",
      deployed: "https://adrianp2021.github.io/SEI-Project-1/",
    },
    {
      name: "drinkard",
      description: "Holiday application which hosts a variety of 25 cocktails.",
      tech: "html • css • react • axios • bulma • api",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-2",
      deployed: "https://drinkard.netlify.app/",
    },
    {
      name: "trust pistis",
      description:
        "Application based on TrustPilot, with Greek mythology theme.",
      tech: "mongo db • express • react • node js",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-3",
      deployed: "https://whispering-coast-70189.herokuapp.com/",
    },
    {
      name: "crumble",
      description:
        "A dating app which matches users to others based on same interests.",
      tech: "react • django • python • postgresql • bulma",
      githubRepo: "https://github.com/adrianp2021/SEI-Project-4",
      deployed: "https://github.com/adrianp2021/SEI-Project-4",
    },
  ];

  const bgColor = useColorModeValue("gray.50", "blackAlpha.800");

  return (
    <Box
      w="100vw"
      h={["100%"]}
      px={[0, 0, 10, 40]}
      bg={bgColor}
      display={["block", "block", "flex", "flex"]}
      justifyContent="flex-end"
      py={20}
    >
      <Box w="40%" display="flex" px={[5, 5, 0]} mb={[10, 10, 0, 0]}>
        <Heading fontSize={["20px"]} fontWeight="700"  letterSpacing={0.4}>
          projects
        </Heading>
      </Box>

      <Box w={["100%", "100%", "40%"]} textAlign="start" px={[5, 5, 0]}>
        {/* <List> */}
        {projects.map((value, i) => {
          return (
            // <>
            <Box key={i}>
              <Heading
                // transform="scaleY(.9)"
                // fontSize={["18px"]}
                // color="gray.600"
                color="gray.500"
                letterSpacing="wide"
                fontSize="sm"
                textTransform="uppercase"
              >
                {value.name}
              </Heading>

              <Text
                my={5}
                // my={10}
                fontWeight="medium"
                letterSpacing="wide"
                fontSize="sm"
              >
                {value.description}
              </Text>

              <Text fontSize="sm" color="gray.500">
                {value.tech}
              </Text>
              <Flex my={5}>
                <Box _hover={[{ color: "#777" }]} transition="0.2s ease-in">
                  <a
                    href={value.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <AiOutlineGithub />
                  </a>
                </Box>
                <Box
                  mx={5}
                  _hover={[{ color: "#777" }]}
                  transition="0.2s ease-in"
                >
                  <a
                    href={value.deployed}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="deployedProject"
                  >
                    <HiOutlineLink />
                  </a>
                </Box>
              </Flex>
              <Divider my={10} />
            </Box>
            // </>
          );
        })}

        {/* </List> */}
      </Box>
    </Box>
  );
};

export default Projects;
