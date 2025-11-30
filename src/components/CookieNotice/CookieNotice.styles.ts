import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: antiquewhite;
  padding: 1rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`

export const Content = styled.div`
  position: relative;
  max-width: 78rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
`

export const Text = styled.p`
  margin: 0;
  font-size: 1.1rem;
  white-space: pre-line;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: left;
  }
`

export const SuccessButton = styled.button`
  height: 48px;
  width: 120px;
  background: linear-gradient(90deg, #ff6f61 0%, #ff8a7a 50%, #ff6f61 100%);
  box-shadow: 0 4px 12px rgba(255, 111, 97, 0.4);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0 1rem;
  color: #ffffff;
  border-radius: 6px;
`
