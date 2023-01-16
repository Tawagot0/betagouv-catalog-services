import { Link } from "@chakra-ui/react";

const Cookies = () => {
  return (
    <div className="cookie">
      <span>
        Les cookies assurent le bon fonctionnement de nos services. En utilisant
        ces derniers, vous acceptez l'utilisation des cookies :{" "}
        <Link>Conditions Générales d'Utilisation</Link>
      </span>
      <button>
        <i className="icon-esd-configuration" />
      </button>
    </div>
  );
};

export default Cookies;
