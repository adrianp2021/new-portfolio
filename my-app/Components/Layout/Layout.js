// import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
