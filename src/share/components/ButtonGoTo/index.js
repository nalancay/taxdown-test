import { Link } from "react-router-dom";
import { ButtonText } from "./ButtonGoTo.styles";

export const ButtonGoTo = () => (
  <ButtonText>
    <Link to="/" className="buttonText">
      <strong>⇦ Go Back</strong>
    </Link>
  </ButtonText>
);
