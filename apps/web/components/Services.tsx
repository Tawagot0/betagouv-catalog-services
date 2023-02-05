import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Service";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? process.env.NEXT_PUBLIC_API_ENDPOINT + "services"
  : "http://localhost:7000/services";

function Services() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API_ENDPOINT);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <SimpleGrid columns={3} minChildWidth={330} spacingY={10}>
      {data.length > 0
        ? data.map((item: any) => (
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
    </SimpleGrid>
  );
}
export default Services;
