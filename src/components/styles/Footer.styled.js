import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
    padding-right: 1.5rem;
  }

  p {
    text-align: right;
  }

  img {
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }

    ul li {
      padding-right: 0;
    }

    p {
      text-align: center;
    }
  }
`;
