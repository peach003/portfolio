import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 1rem;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 0.8rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 0.5rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding: 0 0.25rem;
  }
`;
