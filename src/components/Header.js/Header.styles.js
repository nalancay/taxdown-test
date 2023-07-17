import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #52be80;
  padding: 1rem 2rem 1rem 2rem;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NavItem = styled.div`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const StylesLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const StylesLinkLogout = styled(StylesLink)`
  margin-left: auto;
`;
