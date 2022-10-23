import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
