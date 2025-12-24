import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>© 2026 Levin</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  z-index: 11;
`;