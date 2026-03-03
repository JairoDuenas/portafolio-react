import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <span>© {new Date().getFullYear()} JAIRO DUEÑAS</span>
      <span>HECHO CON REACT + VITE</span>
    </Container>
  );
}

const Container = styled.footer`
  padding: 28px 60px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  letter-spacing: 2px;
  color: #666;

  @media (max-width: 768px) {
    padding: 24px;
    flex-direction: column;
    gap: 8px;
  }
`;
