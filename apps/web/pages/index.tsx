import {
  Grid,
  Heading,
  Text,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "../styles/Card.module.css";
import axios from "axios";

import localFont from "@next/font/local";

const marianne = localFont({ src: "../fonts/Marianne-Regular.woff" });

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? process.env.NEXT_PUBLIC_API_ENDPOINT + "services"
  : "http://localhost:7000/services";

export default function Web() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiEndpoint);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Center>
        <div className={styles.container}>
          <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
              background-color: #f7f7f7;
              font-family: ${marianne.style.fontFamily}, sans-serif;
            }
          `}</style>

          <Breadcrumb className="mx-50" marginLeft={-45}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className={styles.link}>
                Accueil
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Catalogue des Services</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>
            <i className={styles.iconEsdCatalog} /> Catalogue des Services
          </Heading>
          <hr style={{ height: "1px", border: "0", backgroundColor: "gray" }} />
          <Text size="lg" className="mt-2">
            Vous trouverez ici les différents services référencées,{" "}
            <Link as={NextLink} href="#" className={styles.link}>
              la documentation
            </Link>{" "}
            associée et les modalités de souscription.
          </Text>
          <div className={styles.display}>
            <Text
              fontSize="lg"
              className="title"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Apprentissage
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={30} w="80%">
              {data.length > 0
                ? data.map((item) => (
                    <Card
                      key={item.nom}
                      titre={item.nom}
                      description={item.description}
                      miniature={item.miniature}
                      lien={item.lien}
                      version={item.version}
                    />
                  ))
                : "Aucun service disponible"}
            </Grid>
          </div>
        </div>
      </Center>
    </>
  );
}
