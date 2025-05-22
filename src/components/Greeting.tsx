import type { FC } from "react";

type GreetingProps = {
  name: string;
};

export const Greeting: FC<GreetingProps> = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};
