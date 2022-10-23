import { Divider, Box, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
  const socialMedia = [
    {
      name: "email",
      link: "mailto:adrianpantea10@gmail.com",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/adrian-pantea/",
    },
    {
      name: "github",
      link: "https://github.com/adrianp2021",
    },
    {
      name: "twitter",
      link: "https://twitter.com/AdrianPantea4",
    },
  ];

  return (
    <>
      <Box px={[0, 0, 10, 40]} w="100vw" h="100%">
        <Box w="100%" display={["block", "block", "flex"]} px={[5, 5, 0]}>
          <Box w={["100%", "100%", "50%", "50%"]} display="flex" mb={5}>
            <Heading
              fontFamily="Red Hat Text, sans-serif"
              fontSize={["20px"]}
              fontWeight="600"
            >
              let&apos;s connect
            </Heading>
          </Box>

          <Box w={["100%", "100%", "50%", "50%"]}>
            <Box mb={5}>
              {socialMedia.map((social, key) => {
                return (
                  <>
                    <Box key={key}>
                      <a href={social.link} target="_blank" rel="noreferrer">
                        <Text
                          transform="scaleY(.9)"
                          transition="0.2s ease-in"
                          _hover={[{ color: "#777" }]}
                          fontFamily="Red Hat Text, sans-serif"
                          letterSpacing={0.4}
                          fontSize={["16px"]}
                          fontWeight="700"
                          mb={2}
                        >
                          {social.name}
                        </Text>
                      </a>
                    </Box>
                  </>
                );
              })}
            </Box>
            <Box mt={5} display="block">
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
