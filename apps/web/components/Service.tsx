import {
  forwardRef,
  GridItem,
  Text,
  Image,
  Center,
  Stack,
} from "@chakra-ui/react";

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
    w="xs"
    bg="#fff"
    minH={370}
    p={5}
    boxShadow="md"
    rounded="md"
  >
    <Center>
      <Image
        borderRadius="100%"
        src={props.miniature}
        boxShadow="md"
        alt={props.titre}
      />
    </Center>
    <Stack>
      <Text fontSize="lg" fontWeight="bold" mt={4}>
        {props.titre}
      </Text>
      <Text borderBottom="1px" borderBottomWidth={1}>
        {props.version}
      </Text>
      <Text>{props.description}</Text>
    </Stack>
  </GridItem>
));

export default Card;
