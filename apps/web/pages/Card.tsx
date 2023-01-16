import {
  forwardRef,
  GridItem,
  Text,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import styles from "../styles/Card.module.css";

interface CardProps {
  miniature: string;
  version: string;
  description: string;
  lien: string | null;
  titre: string;
}

const Card: any = forwardRef<CardProps, "div">((props, ref) => (
  <GridItem
    ref={ref}
    {...props}
    w={350}
    bg="#fff"
    minH={370}
    p={5}
    boxShadow="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);"
    rounded="md"
  >
    <Center>
      <Image
        borderRadius="100%"
        src={props.miniature}
        boxShadow="0 4px 6px -1px rgb(0 0 0 / 0.1),0 2px 4px -2px rgb(0 0 0 / 0.1)"
      />
    </Center>
    <Text fontSize="lg" fontWeight="bold" mx={4}>
      {props.titre}
    </Text>
    <Text className={styles.divider} mx={4}>
      {props.version}
    </Text>
    <Text mx={4}>{props.description}</Text>
  </GridItem>
));

export default Card;
