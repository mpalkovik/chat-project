import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";

const Red = styled.div`
  color: red;
`;

const Foo: FunctionComponent<RouteComponentProps> = () => <Red>foo</Red>;

export default Foo;

// var foo = 4;
//
// debugger;
//
// const foo = x => x;
