import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import styles from "../styles/Global.module.css";

function FilArianne() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#" className={styles.link}>
          Accueil
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Catalogue des Services</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default FilArianne;
