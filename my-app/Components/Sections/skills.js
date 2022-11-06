import {
  Flex,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Tag,
  List,
  ListItem,
} from "@chakra-ui/react";

const Skills = () => {
  const frontEnd = [
    {
      name: "html",
      link: "https://html.com/",
      size: "sm",
    },
    {
      name: "css",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "javascript",
      link: "https://www.javascript.com/",
    },
    {
      name: "react",
      link: "https://reactjs.org/",
    },
    {
      name: "next js",
      link: "https://nextjs.org/",
    },
    {
      name: "vue js",
      link: "https://vuejs.org/",
    },
    {
      name: "bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      name: "framer motion",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "chakra ui",
      link: "https://chakra-ui.com/",
    },
    {
      name: "semantic ui react",
      link: "https://react.semantic-ui.com/",
    },
  ];

  const backEnd = [
    {
      name: "node js",
      link: "https://nodejs.org/en/",
    },
    {
      name: "express js",
      link: "https://expressjs.com/",
    },
    {
      name: "python",
      link: "https://www.python.org/",
    },
    {
      name: "django",
      link: "https://www.djangoproject.com/",
    },
    {
      name: "mongo db",
      link: "https://www.mongodb.com/",
    },
    {
      name: "postgresql",
      link: "https://www.postgresql.org/",
    },
    {
      name: "mongoose",
      link: "https://mongoosejs.com/",
    },
  ];

  const management = [
    {
      name: "npm",
      link: "https://www.npmjs.com/",
    },
    {
      name: "yarn",
      link: "https://yarnpkg.com/",
    },
    {
      name: "git",
      link: "https://git-scm.com/",
    },
    {
      name: "github",
      link: "https://github.com/",
    },
    {
      name: "insomnia",
      link: "https://insomnia.rest/",
    },
    {
      name: "vs code",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "trello",
      link: "https://trello.com/",
    },
    {
      name: "slack",
      link: "https://slack.com/intl/en-gb/",
    },
    {
      name: "daily stand-up",
      link: "",
    },
    {
      name: "agile",
      link: "https://www.atlassian.com/agile",
    },
  ];

  const bgColor = useColorModeValue("gray.50", "#19191C");

  return (
    <Box
      w="100vw"
      h={["100vh"]}
      px={[0, 0, 10, 40]}
      bg={bgColor}
      display={["block", "block", "flex", "flex"]}
      justifyContent="flex-end"
      pt={20}
      // border=".1px solid red"
    >
      <Box w="40%" display="flex" px={[5, 5, 0]} mb={[10, 10, 0, 0]}>
        <Heading fontSize={["20px"]} fontWeight="700" letterSpacing={0.4}>
          skills
        </Heading>
      </Box>

      <Box
        w={["100%", "100%", "40%"]}
        textAlign="start"
        fontWeight="600"
        px={[5, 5, 0]}
      >
        <Flex display="block" p={5}>
          <Box w="100%" color="white" mb={3}>
            <Heading
              color="gray.500"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
            >
              front end
            </Heading>
          </Box>

          <Box fontWeight="500">
            <Box>
              {frontEnd.map((value, i) => {
                return (
                  <a href={value.link} target="_blank" rel="noreferrer" key={i}>
                    <Tag
                      mr={3}
                      my={3}
                      borderRadius="md"
                      bg="none"
                      border=".1px solid #777"
                    >
                      <Text
                        transform="scaleY(.9)"
                        transition="0.2s ease-in"
                        fontFamily="Red Hat Text, sans-serif"
                        _hover={[{ color: "#777" }]}
                      >
                        {value.name}
                      </Text>
                    </Tag>
                  </a>
                );
              })}
            </Box>
          </Box>
        </Flex>

        <Flex display="block" py={10} p={5}>
          <Box w="100%" mb={3}>
            <Heading
              color="gray.500"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
            >
              back end
            </Heading>
          </Box>

          <Box fontWeight="500">
            <List>
              {backEnd.map((skill, i) => {
                return (
                  <a href={skill.link} target="_blank" rel="noreferrer" key={i}>
                    <Tag
                      key={i}
                      mr={3}
                      my={3}
                      borderRadius="md"
                      bg="none"
                      border=".1px solid #777"
                    >
                      <Text
                        transform="scaleY(.9)"
                        transition="0.2s ease-in"
                        fontFamily="Red Hat Text, sans-serif"
                        _hover={[{ color: "#777" }]}
                      >
                        {skill.name}
                      </Text>
                    </Tag>
                  </a>
                );
              })}
            </List>
          </Box>
        </Flex>

        <Flex display="block" pb={"60px"} p={5}>
          <Box w="100%" color="white" mb={3}>
            <Heading
              color="gray.500"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
            >
              management tools - methodologies
            </Heading>
          </Box>

          <Box fontWeight="500">
            <List>
              {management.map((skill, i) => {
                return (
                  <a href={skill.link} target="_blank" rel="noreferrer" key={i}>
                    <Tag
                      mr={3}
                      my={3}
                      borderRadius="md"
                      bg="none"
                      border=".1px solid #777"
                    >
                      <Text
                        transform="scaleY(.9)"
                        transition="0.2s ease-in"
                        fontFamily="Red Hat Text, sans-serif"
                        _hover={[{ color: "#777" }]}
                      >
                        {skill.name}
                      </Text>
                    </Tag>
                  </a>
                );
              })}
            </List>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Skills;
