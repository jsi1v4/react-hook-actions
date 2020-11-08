import React from 'react';
import styled from 'styled-components';

import { useAction } from 'src/tools/axios';
import { Hero, getHeroes, getVillains } from './service';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Gap = styled.div`
  & > * {
    margin: 0 .5rem .5rem;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Optional = (props: { test: boolean, children: any }) => (
  props.test ? props.children : (<></>)
);

export default () => {
  const request = useAction<Hero[]>();

  function execHeroes() {
    request.exec(
      getHeroes(),
      (response) => console.log('success', response),
      (error) => console.log('error', error)
    );
  }

  function execVillains() {
    request.exec(
      getVillains(),
      (response) => console.log('success', response),
      (error) => console.log('error', error),
      { clearPayloadBeforeExec: true }
    );
  }

  return (
    <>
      <Title>React Hook Actions</Title>
      <Container>
        <Gap>
          <button onClick={() => execHeroes()}>Heroes</button>
          <button onClick={() => execVillains()}>Villains</button>
        </Gap>
        <Optional test={request.loading}>
          <span>Loading...</span>
        </Optional>
        <Optional test={!!request.error}>
          <span>Error! {request.error}</span>
        </Optional>
        <Optional test={request.pristine}>
          <h4>Click to show table of heroes.</h4>
        </Optional>
        <Optional test={!!request.payload}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {
                request.payload?.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.level}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Optional>
      </Container>
    </>
  );
}
