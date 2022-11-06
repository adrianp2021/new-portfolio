// import { useState } from "react";

// import {
//   Heading,
//   Text,
//   FormControl,
//   Input,
//   Box,
//   Textarea,
//   Button,
//   useColorModeValue,
// } from "@chakra-ui/react";

// const Contact = () => {
// let [formValue, setFormValue] = useState({
//   name: "",
//   email: "",
//   message: "",
// });

// function handleFormChange(e) {
//   let inputValue = e.target.value;
//   setFormValue({
//     inputValue,
//   });
//   console.log(inputValue);
// }

// async function handleSubmit(e) {
//   e.prevent.default();

//   // console.log('handle submit',handleSubmit)

//   const formData = {};

//   Array.from(e.currentTarget.elements).forEach((field) => {
//     if (!field.name) return;
//     formData[field.name] = field.value;
//   });

//   await fetch("/api/mail", {
//     method: "POST",
//     body: JSON.stringify(formData),
//   });
//   console.log('form data: ', formData)
// }

// const bgColor = useColorModeValue("whit", "blackAlpha.800");

// return (
//   <>
//     <Box
//       w="100vw"
//       h={["100%"]}
//       px={[0, 0, 10, 40]}
//       bg={bgColor}
//       display={["block", "block", "flex", "flex"]}
//       justifyContent="flex-end"
//       py={20}
//     >
//       <Box w="40%" display="flex" px={[5, 5, 0]} mb={[10, 10, 0, 0]}>
//         <Heading fontSize={["20px"]} fontWeight="700" letterSpacing={0.4}>
//           contact
//         </Heading>
//       </Box>

{
  /* <Box w={["100%", "100%", "40%"]} textAlign="start" px={[5, 5, 0]}> */
}
{
  /* <FormControl method="post" onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="name"
              _placeholder={{ color: "gray.600" }}
              focusBorderColor=" inherit"
              // value={formValue.name}
              onChange={handleFormChange}
              isRequired
              transform="scaleY(.9)"
            />


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



            <Textarea
              value={formValue.message}
              onChange={handleFormChange}
              placeholder="email"
              _placeholder={{ color: "gray.600" }}
              focusBorderColor=" inherit"
              isRequired
              transform="scaleY(.9)"
            />
          </FormControl> */
}

//         <form method="post" onSubmit={handleSubmit}>
//           <p>
//             <label htmlFor="name">Name</label>
//             <input id="name" type="text" name="name" />
//           </p>
//           <p>
//             <label htmlFor="email">Email</label>
//             <input id="email" type="text" name="email" />
//           </p>
//           <p>
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" />
//           </p>
//           <p>
//             <button>Submit</button>
//           </p>
//         </form>

//         <Box>
//           <Button borderRadius="md" type="submit" transform="scaleY(.9)">
//             <Text fontWeight="400">send enquiry</Text>
//           </Button>
//         </Box>
//         {/* </Box> */}
//       </Box>
//     </>
//   );
// };

// export default Contact;

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       name,
//       email,
//       message,
//     };

//     fetch("/api/message", {
//       method: "post",
//       body: JSON.stringify(data),
//     });

//   };

//   return (
//     <div display="flex" border="1px solid" h="500px">
//       <form onSubmit={handleSubmit} display="block" p={10}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             id="name"
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div my={10}>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <label htmlFor="message">Message:</label>
//         <div>
//           <textarea
//             id="message"
//             type="text"
//             rows="4"
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <div>
//           <Button type="submit">Send</Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;

// * Working version

// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("xnqrgnkg");
//   // if (state.succeeded) {
//   //     return <p>Thanks for your message</p>;
//   // }
//   return (
//     <Box border="1px solid" h="300px">
//     <form onSubmit={handleSubmit} >
//       <label htmlFor="name">name</label>
//       <input id="name" type="name" name="name" />
//       <ValidationError prefix="Name" field="name" errors={state.errors} />
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//     </Box>
//   );
// }

// export default ContactForm;

import { useState } from "react";

import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";

function Contact() {
  const bgColor = useColorModeValue("whit", "blackAlpha.800");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    setSubmitted(true);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }
  // <Box w={["100%", "100%", "40%"]} textAlign="start" px={[5, 5, 0]}>
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
          <form action="submit" method="POST" onSubmit={handleOnSubmit}>
            <Stack>
              <FormControl isRequired>
                <FormLabel
                  color="gray.500"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  Name
                </FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name="name"
                  // placeholder="name"
                  focusBorderColor=" inherit"
                  isRequired
                  transform="scaleY(.9)"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  color="gray.500"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  mt={5}
                >
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  // placeholder="john.doe@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  color="gray.500"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  mt={5}
                >
                  Message
                </FormLabel>
                <Textarea
                  // placeholder="write your message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </FormControl>
              {/* <Button type="submit" isLoading={submitted} loadingText="Submitting">
          SUBMIT
        </Button> */}
              <Box >
                <Button mt={5} borderRadius="md" type="submit" transform="scaleY(.9)">
                  <Text fontWeight="400">send enquiry</Text>
                </Button>
              </Box>

              <Flex>
                {status === "success" ? (
                  <Alert status="success">
                    <AlertIcon />
                    <AlertTitle mr={2}>Success!</AlertTitle>
                    <AlertDescription>
                      Your email has been sent.
                    </AlertDescription>
                  </Alert>
                ) : status === "error" ? (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>
                      Your email was unable to be sent.
                    </AlertDescription>
                  </Alert>
                ) : null}
              </Flex>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
