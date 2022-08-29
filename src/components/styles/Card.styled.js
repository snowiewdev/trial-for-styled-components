import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
    margin: 0 auto;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;
