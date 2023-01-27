import { AlertContent } from "./styled";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
const Alert = ({ description, success }) => {
  return (
    <AlertContent success={success}>
      <span>{success ? <FiCheckCircle /> : <FiAlertCircle />}</span>
      <p>{description}</p>
    </AlertContent>
  );
};

export default Alert;
