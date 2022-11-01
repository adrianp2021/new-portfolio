import Head from "next/head";

import { Flex, Box, Text, useColorModeValue, Image } from "@chakra-ui/react";

import Navbar from "../Components/Layout/Navbar";
import Career from "../Components/Sections/career";
import Skills from "../Components/Sections/skills";
import Projects from "../Components/Sections/projects";
import Contact from "../Components/Sections/contact";

export default function Home() {
  const bgColor = useColorModeValue("gray.50", "blackAlpha.800");

  return (
    <Box>
      <Head>
        <title>Adrian Pantea Portfolio</title>
      </Head>

      <Navbar />

      <Flex w="100vw" h={["100vh"]} px={[0, 0, 10, 40]} bg={bgColor} >
        <Box
          w="100%"
          display="flex"
          flexDir="column"
          justifyContent="space-evenly"
          alignItems="flex-end"
          px={[5, 5, 0]}
        >
          <Box w="100%">
            <Box w="60px">
              <Image
                src="https://i1.rgstatic.net/ii/profile.image/11431281083897192-1662886779036_Q512/Adrian-Pantea.jpg"
                alt="me"
                borderRadius="50%"
              />
            </Box>
            <Text
              fontSize={["30px", "35px", "40px"]}
              fontFamily="Red Hat Text, sans-serif"
              transform="scaleY(.9)"
              lineHeight={1.3}
              fontWeight="900"
              my={7}
            >
              My name is Adrian. I am a Software Engineer <br /> based in
              London, UK.
            </Text>

            <Text color="gray.500">
              I’m a Software Engineer and Tech enthusiast who enjoys
              turning problems and <br /> opportunities into simple interfaces
              through design and code.
            </Text>
          </Box>
          {/* <Box w={["100%", "100%", "50%"]} textAlign="end" fontWeight="500">
            <Text>
              I am a Tech enthusiast. I curate vision with simple code.
            </Text>
          </Box> */}
        </Box>
      </Flex>

      <Career />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}
