import React, { useState } from "react";
import styled from "styled-components";
import { ButtonType } from "./Button";
import Button from "./Button";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
  background: #fff;
  border-radius: 8px;
  font-size: 48px;
  grid-column-end: span 4;
  padding: 30px 24px;
  text-align: right;
`;

const Calculator: React.FC = () => {
  const [state1, setState1] = useState<string[]>([]);
  const [state2, setState2] = useState<string[]>([]);
  const [operation, setOperation] = useState<string>();
  const [result, setResult] = useState<number>();

  const handleInput = (label: string) =>
    operation ? setState2([...state2, label]) : setState1([...state1, label]);

  const showState = () => {
    if (operation && state2.length !== 0 && !result) {
      return state2;
    } else if (!result) {
      return state1;
    }

    return result;
  };

  const operate = () => {
    const st1 = parseInt(state1.reduce((acc, x) => `${acc}${x}`));
    const st2 = parseInt(state2.reduce((acc, x) => `${acc}${x}`));

    if (operation === "+") {
      if (state2) setState2([]);
      result ? setResult(result + st2) : setResult(st1 + st2);
    } else if (operation === "-") {
      if (state2) setState2([]);
      result ? setResult(result - st2) : setResult(st1 - st2);
    } else if (operation === "") {
    } else if (operation === "") {
    }
  };

  const resetStates = () => {
    setState1([]);
    setState2([]);
    setOperation("");
    setResult(0);
  };

  return (
    <Container>
      <Grid>
        <Display>{showState()}</Display>
        <Button
          label="AC"
          position={[0, 1]}
          width={2}
          handleDisplay={resetStates}
        />
        <Button
          label="Ups"
          position={[2, 1]}
          width={2}
          handleDisplay={(label) => {}}
        />
        <Button
          label="-"
          position={[3, 2]}
          handleDisplay={(label) => setOperation(label)}
        />
        <Button label="+" position={[3, 3]} handleDisplay={setOperation} />
        <Button
          label="="
          position={[3, 4]}
          height={2}
          handleDisplay={operate}
        />
        <Button
          handleDisplay={handleInput}
          type={ButtonType.Number}
          label="9"
          position={[2, 2]}
        />
        <Button
          type={ButtonType.Number}
          label="8"
          position={[1, 2]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="7"
          position={[0, 2]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="6"
          position={[2, 3]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="5"
          position={[1, 3]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="4"
          position={[0, 3]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="3"
          position={[2, 4]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="2"
          position={[1, 4]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          type={ButtonType.Number}
          label="1"
          position={[0, 4]}
          handleDisplay={(label) => handleInput(label)}
        />
        <Button
          handleDisplay={(label) => handleInput(label)}
          type={ButtonType.Number}
          label="0"
          position={[0, 5]}
          width={3}
        />
      </Grid>
    </Container>
  );
};

export default Calculator;
