import {
  Flex,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  List,
  ListItem,
  Stack,
  VStack,
  Avatar,
} from "@chakra-ui/react";

import { HiOutlineLocationMarker } from "react-icons/hi";

const Career = () => {
  const bgColor = useColorModeValue("gray.50", "#19191C");
  const iconBackgroundColor = useColorModeValue("#F1F5FA", "#1E1E21");
  // const iconColor = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("6px solid #FFF", "6px solid #232323");
  // const boxShadowColour = useColorModeValue("1.5px 1.3px 2.8px hsl(0deg 0% 0% / 0.13)", "0 16px 16px hsl(0deg 0% 0% / 0.075)")
  const boxShadowColour = useColorModeValue(
    "0px 0px 5px 1.2px hsl(0deg 10% 70% / 0.25)",
    "0px 0px 0px 1px hsl(0deg 10% 70% / 0.25)"
    // "0 16px 16px hsl(0deg 10% 70% / 0.075)"
  );

  // the jobs variable may be later used to create an accordion for each job in the career section
  const jobs = [
    {
      src: "https://static-00.iconduck.com/assets.00/uber-icon-256x256-649uswep.png",
      name: "Uber",
      year: "2021 - present",
      location: "London, UK",
      role: "PSRT Specialist",
      description:
        "Data compliance and policy, liaising with law enforcement agenices.",
      one: "Follow local government and Uber's policies in responding to requests from law enforcement in a timely manner.",
      two: "Manage internal and external stakeholders through clear, logical and concise communication. Protect the privacy of the users’ data through robust analysis of all requests against our stringent legal and ethical requirements",
      three:
        "Protect the privacy of the users’ data through robust analysis of all requests against our stringent legal and ethical requirements",
    },
    {
      src: "https://banner2.cleanpng.com/20180413/xbw/kisspng-general-assembly-seattle-technology-user-experienc-startup-5ad124379ce884.2961021115236557356427.jpg",
      name: "General Assembly",
      year: "May 2021 - August 2021",
      description:
        "A full-time bootcamp, designed for a career transformation in Tech, where I learnt the fundamental skills to build Full-Stack web applications.",
      location: "London, UK",
      role: "Software Engineering Immersive",
      one: "A 12-week full-time bootcamp designed for a career transformation in tech where I learnt the fundamental skills to build Full-Stack web applications",
      two: "Throughout the bootcamp, I also learned to work in an Agile environment, work in a team, have daily stand-ups, refine the code and plan our projects",
    },
    {
      src: "https://pbs.twimg.com/profile_images/798100060101902336/-MIkj5Pl_400x400.jpg",
      name: "De Pinna LLP",
      year: "March 2020 - March 2020",
      description:
        "Oldest notarial firm in the UK, complementing my legal prospect.",
      location: "London, UK",
      role: "Multilingual Paralegal",
      one: "Drafted and amended Notarial Certificates, Board Resolutions, Affidavits and other legal documentation in English and other commercially relevant foreign languages",
      two: "Translated over 20 documents per day and prepared them for legalisation, maintaining consistency with clients’ demands",
    },
  ];

  return (
    <Flex
      w="100vw"
      h={["100%"]}
      px={[0, 0, 10, 40]}
      bg={bgColor}
      display={["block", "block", "flex", "flex"]}
      justifyContent="flex-end"
      // border="1px solid red"
      pt={20}
    >
      <Box w="40%" display="flex" px={[5, 5, 0]} mb={[10, 10, 0, 0]}>
        <Heading fontSize={["20px"]} fontWeight="700" letterSpacing={0.4}>
          career
        </Heading>
      </Box>

      <Box
        w={["100%", "100%", "40%"]}
        textAlign="start"
        fontWeight="600"
        px={[5, 5, 0]}
      >
        <VStack
          // border=".1px solid"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <List>
            {jobs.map((value, index) => {
              return (
                <ListItem
                  key={index}
                  _hover={[
                    { background: iconBackgroundColor },
                    { cursor: "pointer" },
                    { transition: ".2s ease" },
                  ]}
                  borderRadius="2xl"
                  pointer="cursor"
                  mb={5}
                  p={5}
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Box
                      w="100%"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Avatar
                        src={value.src}
                        alt="me"
                        border={borderColor}
                        borderRadius="3xl"
                        boxShadow={boxShadowColour}
                      />
                    </Box>

                    <Heading as="h3" size="sm" fontWeight="500" mt={5}>
                      {value.role} at {value.name}
                    </Heading>
                    <Text
                      fontSize="sm"
                      fontWeight="400"
                      mt={5}
                      color="rgb(82 82 91)"
                    >
                      {value.description}
                    </Text>
                    <Box
                      w="100%"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mt={10}
                      mb={5}
                    >
                      <Box display="flex" alignItems="center">
                        <HiOutlineLocationMarker />
                        <Text ml={1.5} fontSize="xs">
                          {value.location}
                        </Text>
                      </Box>
                      <Text fontSize="xs">{value.year}</Text>
                    </Box>

                    <Divider borderColor="gray.500" />
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </VStack>
        {/* <Flex display="block" h="100%">
          <List>
            {jobs.map((value, index) => {
              return (
                <ListItem
                  key={index}
                  _hover={[
                    { background: "#383838" },
                    { filter: "grayscale(40%)" },
                    { cursor: "pointer" },
                  ]}
                  borderRadius="sm"
                  pointer="cursor"
                >
                  <Box
                    display={["block", "block", "flex", "flex"]}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Heading
                      color="gray.500"
                      letterSpacing="wide"
                      fontSize="sm"
                      textTransform="uppercase"
                    >
                      {value.name}
                    </Heading>

                    <Text
                      transform="scaleY(.9)"
                      fontSize="sm"
                      textAlign={["start", "end"]}
                      letterSpacing="wide"
                    >
                      {value.year}
                    </Text>
                  </Box>
                  <Box w="100%">
                    <Box
                      textAlign="end"
                      my={10}
                      fontWeight="medium"
                      letterSpacing="wide"
                      fontSize="sm"
                      // textTransform="uppercase"
                    >
                      <Text textAlign="end">{value.role}</Text>
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        mt={2}
                      >
                        <HiOutlineLocationMarker />
                        <Text ml={1.5}>{value.location}</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Divider my={10} />
                </ListItem>
              );
            })}
          </List>
        </Flex> */}
      </Box>
    </Flex>
  );
};

export default Career;
