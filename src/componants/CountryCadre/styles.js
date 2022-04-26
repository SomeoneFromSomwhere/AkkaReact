import { Grid } from "@mui/material";
import styled from "styled-components";

export const CountryOverLayer = styled.div({
  display: "none",
  position: "absolute",
  backgroundColor: "rgba(0,0,0, .5)",
  top: 32,
  height: "calc(100% - 32px)",
  width: "calc(100% - 32px)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const CountryCadreBlock = styled(Grid)({
  position: "relative",
  height: "",
  /* &: Element courant. On donne ici à un element enfant (ici CountryOverLayer) un couple de clé/valeur à changer lors d'un hover */
  [`&:hover > ${CountryOverLayer}`]: {display:"flex"}
});



export const CountryFlag = styled.img({
  width: "100%",
  //Si on veut faire en sorte que chaque drapeau remplisse l'espace attitré, on doit faire couvrir l'image car pas tous le même format.
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const CountryOverLayerText = styled.span({
  fontSize: 13,
  color: "#fff",
  margin: "15px 0",
  fontFamily:"Helvetica",
});

// export default makeStyles(() => ({
//   cadre: {
//     //TO DO Hover pour afficher les données
//   },
// }));
