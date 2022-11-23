import Head from "next/head";
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
  Image,
  Center,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const About = () => {
  const bgColor = useColorModeValue("gray.50", "#19191C");

  return (
    <Box
      h={"100%"}
      // px={[0, 0, 0, "100px"]}
      px={[0, 0, 10, 40]}
      bg={bgColor}
      py={10}
    >
      <Box
        mt={10}
        fontFamily="Red Hat Text, sans-serif"
        // px={[0, 0, 10, 10]}
        maxW="1300px"
        // margin="auto"
      >
        <Box
          display={["flex"]}
          flexDirection={["column-reverse", "column-reverse", "row"]}
          justifyContent="space-between"
        >
          <Box w={["100%", "100%", "60%"]} px={[5, 5, 0, 0]}>
            <Heading>About</Heading>
            <Text fontSize="md" fontWeight="500" lineHeight={1.8} mt={5}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              corporis modi accusamus accusantium provident quo molestiae,
              tenetur voluptas, culpa rerum tempore eveniet aspernatur amet ut
              maxime cupiditate itaque nam architecto!
            </Text>

            <Heading size="lg" mt={5} color="#">
              Work
            </Heading>

            <Text fontSize="md" mt={5} lineHeight={1.8}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              aperiam modi perferendis cum magni necessitatibus dolorum labore
              architecto, non nostrum! Obcaecati culpa, aperiam libero possimus
              et pariatur veritatis animi blanditiis.
            </Text>

            <Box mt={10}>
              <Heading size="lg">After work</Heading>
              <Text fontSize="md" mt={5} lineHeight={1.8}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum, deleniti repellendus ad laboriosam incidunt, quod
                aperiam distinctio suscipit quo cumque atque, pariatur sit
                recusandae dolorum quia ducimus quam quidem vero!
              </Text>

              <Heading size="lg" mt={5}>
                Stack
              </Heading>
              <Text fontSize="md" mt={5} lineHeight={1.8}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                recusandae architecto debitis cumque reiciendis tempora quo amet
                omnis obcaecati libero. Recusandae illo consequuntur veritatis
                ipsam earum enim minus temporibus quia?
              </Text>
            </Box>
          </Box>

          <Box w={["80%", "70%", "400px"]} px={[5, 5, 10]} >
            <Image
              borderRadius="xl"
              boxShadow="lg"
              alt="me"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQE0CYQmbbTiNw/profile-displayphoto-shrink_800_800/0/1660079360291?e=2147483647&v=beta&t=8G3AnUF6GeE1cIJpzcvXOQKMmHfUzo-PfGRr0D_cI7w"
            />
            <Box mt={[5, 10, 20]} maxWidth="30rem">
              <Heading size="lg">Education</Heading>

              <Stack
                direction="row"
                // py={10}
                justifyContent="flex-start"
                alignItems="center"
                // border="1px solid"
                height={["140px"]}
                // mt={5}
              >
                {/* <Divider
                  orientation="vertical"
                  px={1}
                  // mr={[2, 3, 3]}
                /> */}
                <Box display="flex" flexDirection="column">
                  <Box py={2.5}>
                    <Heading size="sm">Bachelor of Laws with Honours</Heading>
                    <Text fontSize="sm" color="#89898C">
                      Anglia Ruskin University, 2021
                    </Text>
                  </Box>
                  {/* <br /> */}
                  <Box py={2.5}>
                    <Heading size="sm">Software Engineering Immersive </Heading>
                    <Text fontSize="sm" color="#89898C">
                      General Assembly, 2021
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box
          // border="1px solid"
          display={["flex"]}
          flexDirection={["column", "column", "row"]}
        >
          {/* <Box
            w={["100%", "100%", "60%"]}
            // border="1px solid purple"
            px={[5, 10, 10]}
            mt={10}
          >
            <Heading size="lg">After work</Heading>
            <Text fontSize="md" mt={5} lineHeight={1.8}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              deleniti repellendus ad laboriosam incidunt, quod aperiam
              distinctio suscipit quo cumque atque, pariatur sit recusandae
              dolorum quia ducimus quam quidem vero!
            </Text>

            <Heading size="lg" mt={5}>
              Stack
            </Heading>
            <Text fontSize="md" mt={5} lineHeight={1.8}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              recusandae architecto debitis cumque reiciendis tempora quo amet
              omnis obcaecati libero. Recusandae illo consequuntur veritatis
              ipsam earum enim minus temporibus quia?
            </Text>
          </Box> */}

          {/* <Box
            w={["100%", "100%", "40%"]}
            mt={10}
            px={[5, 10, 10]}
            maxWidth="30rem"
          >
            <Heading size="lg">Education</Heading>
            <Divider orientation="horizontal" mt={3} />

            <Stack direction="column" py={5}>
              <Box>
                <Box>
                  <Heading size="sm" py={1}>
                    Bachelor of Laws with Honours
                  </Heading>
                  <Text fontSize="sm" color="#89898C">
                    Anglia Ruskin University, 2021
                  </Text>
                </Box>
                <br />
                <Box>
                  <Heading size="sm" py={1}>
                    Software Engineering Immersive{" "}
                  </Heading>
                  <Text fontSize="sm" color="#89898C">
                    General Assembly, 2021
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Box> */}
        </Box>

        {/* <Box
          w={["100%", "100%", "60%"]}
          px={[5, 10, 10]}
          display="flex"
          justifyContent="space-between"
        >
          <Box
            mt={5}
            px={[5, 10, 10]}
          >
            <Heading size="lg">After work</Heading>
            <Text fontSize="md" mt={5} lineHeight={1.8}>
              I work on Neutral — an app which so far has helped plant thousands
              of trees and offset hundreds of tonnes of CO₂e through global
              reforestation programs. I build random projects every so often
              like Hancock and San Andreas Radio. I also designed the initial
              version of Bokeh. Other than that, I am either spending time in
              the gym, ideating on new side projects and occasionally working
              with very select clients on freelance / moonlight work. Get in
              touch if you want to work with me on something.
            </Text>

            <Heading size="lg" mt={5}>
              Stack
            </Heading>
            <Text fontSize="md" mt={5} lineHeight={1.8}>
              I use Figma for product design and FigJam for brainstorming and
              workshops. I code everything in JavaScript — React + Next for
              websites and web apps, Tailwind for rapid CSS development, Vercel
              for hosting and usually Firebase for the back-end. I use Node for
              server code and React Native + Expo for native mobile apps, kept
              incredibly precise with tools like Harmony.
            </Text>
          </Box>
        </Box> */}

        {/* <Box w={["100%", "100%", "40%"]} display={["none", "none", "block"]}>
          <Box mt={20} h="300px">
            <Heading size="lg">Education</Heading>
            <Box display="flex">
              <Divider orientation="vertical" border="10px solid red" />
              <VStack h="150px">
                <Box mb={5}>
                  <Heading size="sm" py={1}>
                    Bachelor of Laws with Honours
                  </Heading>
                  <Text fontSize="sm" color="#89898C">
                    Anglia Ruskin University, 2021
                  </Text>
                </Box>
                <Box mt={5}>
                  <Heading size="sm" py={1}>
                    Software Engineering Immersive{" "}
                  </Heading>
                  <Text fontSize="sm" color="#89898C">
                    General Assembly, 2021
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default About;
