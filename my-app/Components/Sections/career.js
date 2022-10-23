import { Flex, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Career = () => {
  const bgColor = useColorModeValue("gray.50", "blackAlpha.800");

  // the jobs variable may be later used to create an accordion for each job in the career section
  const jobs = [
    {
      name: "uber",
      year: "2021 - present",
      location: "London - United Kingdom",
      role: "PSRT Specialist",
      one: "Follow local government and Uber's policies in responding to requests from law enforcement in a timely manner.",
      two: "Manage internal and external stakeholders through clear, logical and concise communication. Protect the privacy of the users’ data through robust analysis of all requests against our stringent legal and ethical requirements",
      three:
        "Protect the privacy of the users’ data through robust analysis of all requests against our stringent legal and ethical requirements",
    },
    {
      name: "general assembly",
      year: "May 2021 - August 2021",
      location: "London - United Kingdom",
      role: "Software Engineering Immersive",
      one: "A 12-week full-time bootcamp designed for a career transformation in tech where I learnt the fundamental skills to build Full-Stack web applications",
      two: "Throughout the bootcamp, I also learned to work in an Agile environment, work in a team, have daily stand-ups, refine the code and plan our projects",
    },
    {
      name: "de pinna llp",
      year: "March 2020 - March 2020",
      location: "London - United Kingdom",
      role: "Notarial Assistant",
      one: "Drafted and amended Notarial Certificates, Board Resolutions, Affidavits and other legal documentation in English and other commercially relevant foreign languages",
      two: "Translated over 20 documents per day and prepared them for legalisation, maintaining consistency with clients’ demands",
    },
  ];

  return (
    <Flex
      w="100vw"
      h={["100vh"]}
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
        <Flex display="block" h="100%">
          <Box>
            {jobs.map((job, i) => {
              return (
                <>
                  <Box key={i} pb={"60px"}>
                    <Heading
                      transform="scaleY(.9)"
                      fontSize={["18px"]}
                      color="gray.600"
                    >
                      {job.name}
                    </Heading>

                    <Box
                      w="100%"
                      display="flex"
                      flexDir="column"
                      justifyContent="space-between"
                      alignItems="flex-end"
                      fontWeight="300"
                      textAlign="left"
                      pt={5}
                    >
                      <Text transform="scaleY(.9)">{job.year}</Text>
                      <Box pt={10} textAlign="end">
                        <Text transform="scaleY(.9)">{job.location}</Text>
                        <Text transform="scaleY(.9)" textAlign="end">
                          {job.role}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Career;
