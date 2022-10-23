import { useState } from "react";

import {
  Heading,
  Text,
  FormControl,
  Input,
  Box,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { Formik, Field } from "formik";

const Contact = () => {
  let [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleFormChange(e) {
    let inputValue = e.target.value;
    setFormValue({
      inputValue,
    });
    console.log(inputValue);
  }

  const bgColor = useColorModeValue("gray.50", "blackAlpha.800");

  return (
    <>
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
          <Heading fontSize={["20px"]} fontWeight="700" letterSpacing={0.4}>
            contact
          </Heading>
        </Box>

        <Box w={["100%", "100%", "40%"]} textAlign="start" px={[5, 5, 0]}>
          <FormControl>
            <Input
              name="name"
              placeholder="name"
              _placeholder={{ color: "gray.600" }}
              focusBorderColor=" inherit"
              value={formValue.name}
              onChange={handleFormChange}
              
              isRequired
              transform="scaleY(.9)"
            />
          </FormControl>

          <FormControl my={5}>
            <Input
              name="email"
              placeholder="email"
              _placeholder={{ color: "gray.600" }}
              focusBorderColor=" inherit"
              value={formValue.email}
              onChange={handleFormChange}
              
              isRequired
              transform="scaleY(.9)"
            />
          </FormControl>

          <FormControl my={5}>
            <Textarea
              value={formValue.message}
              onChange={handleFormChange}
              placeholder="email"
              _placeholder={{ color: "gray.600" }}
              focusBorderColor=" inherit"
              
              isRequired
              transform="scaleY(.9)"
            />
          </FormControl>

          <Box>
            <Button borderRadius="md" type="submit" transform="scaleY(.9)">
              <Text fontWeight="400">send enquiry</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
