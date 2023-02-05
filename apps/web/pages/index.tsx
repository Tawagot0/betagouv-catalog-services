import { Heading, Text, Container, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";

import styles from "../styles/Global.module.css";
import DrawerExample from "../components/Menu";
import Cookies from "../components/Cookies";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import FilArianne from "../components/FilArianne";

export default function Web() {
  return (
    <>
      <Navbar />
      <Container maxW="6xl" mt={15}>
        <FilArianne />
        <Heading
          as="h1"
          mt={10}
          fontWeight="normal"
          color={"#414d5b"}
          fontSize={"3xl"}
          pb={1}
        >
          <i className={styles.iconEsdCatalog} /> Catalogue des Services
        </Heading>
        <hr style={{ height: "1px", border: "0", backgroundColor: "gray" }} />
        <Text size="lg" mt={8}>
          Vous trouverez ici les différents services référencées,{" "}
          <Link as={NextLink} href="#" className={styles.link}>
            la documentation
          </Link>{" "}
          associée et les modalités de souscription.
        </Text>
        <Box pl={35} mt={5} borderLeft={"3px solid #0055b0"}>
          <Text
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="bold"
            mb={15}
          >
            Apprentissage
          </Text>
          <Services />
        </Box>
      </Container>
      <Cookies />
    </>
  );
}
