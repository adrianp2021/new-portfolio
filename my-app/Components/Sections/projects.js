import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { LinkIcon } from "@chakra-ui/icons";

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
    >
      <Box w="40%" display="flex" px={[5, 5, 0]} mb={[10, 10, 0, 0]}>
        <Heading fontSize={["20px"]} fontWeight="700" letterSpacing={0.4}>
          projects
        </Heading>
      </Box>

      <Box w={["100%", "100%", "40%"]} textAlign="start" px={[5, 5, 0]}>
        <Box>
          {projects.map((project, i) => {
            return (
              <>
                <Box pb={"60px"}>
                  <Heading
                    transform="scaleY(.9)"
                    fontSize={["18px"]}
                    color="gray.600"
                  >
                    {project.name}
                  </Heading>
                  <Text transform="scaleY(.9)" pt={5}>
                    {project.description}
                  </Text>

                  <Text transform="scaleY(.9)" fontSize="16px" color="gray.400">
                    {project.tech}
                  </Text>
                  <Flex mt={3}>
                    <Box _hover={[{ color: "#777" }]} transition="0.2s ease-in">
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="github"
                      >
                        <Icon viewBox="0 0 200">
                          <path
                            fill="currentColor"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                          />
                        </Icon>
                      </a>
                    </Box>
                    <Box
                      mx={5}
                      _hover={[{ color: "#777" }]}
                      transition="0.2s ease-in"
                    >
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="deployedProject"
                      >
                        <LinkIcon />
                      </a>
                    </Box>
                  </Flex>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
