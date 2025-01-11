import { Container, Logo, ProfileImg } from "./styles";
import logoImg from "@assets/logo.png";
import profileImg from "@assets/profile.png";

export function HomeHeader() {
  return (
    <Container>
      <Logo source={logoImg} />
      <ProfileImg source={profileImg} />
    </Container>
  );
}
