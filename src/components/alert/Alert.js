import AlertStyled from "./Alert.styled";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const Alert = ({ description, success }) => {
  return (
    <AlertStyled success={success}>
      <span>{success ? <FiCheckCircle /> : <FiAlertCircle />}</span>
      <p>{description}</p>
    </AlertStyled>
  );
};

export default Alert;
