import { GoBackButtonContainer, GoBackIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function GoBackButton({ ...rest }) {
  return (
    <GoBackButtonContainer {...rest}>
      <GoBackIcon />
    </GoBackButtonContainer>
  );
}
