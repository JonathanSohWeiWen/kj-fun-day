import styled from "styled-components";

export const Title = styled.h1`
  font-family: Helvetica;
  text-align: center;
  color: #292929;
  margin: 10px 0;
`;

export const Subtitle = styled.h3<{ rows?: number; color?: string }>`
  font-size: 1.6em;
  margin: 0;
  margin-bottom: 5px;
  text-align: center;
  height: ${(props) => (props.rows || 1) * 1.6}em;
  vertical-align: middle;
  display: flex;
  align-items: center;
  color: ${(props) => props.color || "inherit"};
`;

export const Container = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #e4edf4;
  border-radius: 8px;
  opacity: 0.8;
  box-shadow: 0px 2px 2px #f9f9f9;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<{
  borderColor: string;
  hoverReverse?: boolean;
  rowHeight?: number;
}>`
  margin: 5px;
  width: 170px;
  height: ${(props) => (props.rowHeight || 1) * 18 + 20}px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 500;
  background-color ${(props) => props.borderColor};
  border: none;
  border-radius: 4px;
  color: white;
  opacity: ${(props) => (props.hoverReverse === true ? 0.7 : 1)};
  transition: opacity 0.8s;
  transition: transform 0.8s;
  &:hover {
    opacity: ${(props) => (props.hoverReverse === true ? 1 : 0.7)};
    transform: scale(1.01);

  }
`;
