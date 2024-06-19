import React from "react";
import styled from "styled-components";
import { Menu, PersonRounded } from "@mui/icons-material";
import { IconButton } from "@ui/material";

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 40px;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  max-width: 70px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 8px 10px;
  gap: 8px;
`;

const IconButton = styled(IconButton)`
  color: ${({ theme }) => theme.text_secondary} !important;
`;

const NavBar = ({ setMenuOpen, menuOpen }) => {
  return (
    <NavBarDiv>
      <IconButton onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </IconButton>
      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavBarDiv>
  );
};

export default NavBar;