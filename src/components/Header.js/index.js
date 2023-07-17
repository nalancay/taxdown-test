import { useContext } from "react";
import {
  HeaderContainer,
  Nav,
  NavItem,
  StylesLink,
  StylesLinkLogout,
} from "./Header.styles";
import Context from "../../context/UserContext";

export default function Header() {
  const { setToken } = useContext(Context);

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
  };
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <StylesLink to="/">Taxes</StylesLink>
        </NavItem>
        <NavItem>
          <StylesLink to="/taxes/submissions">Submissions</StylesLink>
        </NavItem>
        <StylesLinkLogout to="/" onClick={logout}>
          Logout
        </StylesLinkLogout>
      </Nav>
    </HeaderContainer>
  );
}
