import styled from "styled-components";

const ComponentTittle = styled.h1`
  color: red;
  text-align: center;
`;

const ComponentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ManoMygtukas = styled.button`
  color: ${(props) => (props.$danger ? "red" : "black")};
  background-color: ${(props) => (props.pavojingas ? "red" : "grey")};
`;

const Text = styled.p`
  color: ${(props) => (props.$spalva ? "red" : "pink")};
`;

const ComponentSubTitle = styled(ComponentTittle)`
  text-decoration: underline;
`;

const manoDiv = styled.div`
  color: ${(props) => props.spalva};
`;

const StyledComponentsExample = () => {
  return (
    <div>
      <h4>Styled compenents</h4>
      <ComponentContainer>
        <ComponentTittle>Mano pirmasis styled-componentas</ComponentTittle>
        <ComponentSubTitle>
          Mano componento tittle paveldejimas
        </ComponentSubTitle>
      </ComponentContainer>
      <ManoMygtukas>pvz</ManoMygtukas>
      <ManoMygtukas $danger>pvz</ManoMygtukas>
      <ManoMygtukas pavojingas={true}>pvz</ManoMygtukas>
      <Text $spalva>ASdasd PVZ</Text>
      <manoDiv spalva="red"> pzczxs</manoDiv>
    </div>
  );
};

export default StyledComponentsExample;
