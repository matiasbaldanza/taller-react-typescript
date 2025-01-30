import { ComponentProps } from "react";
import { Equal, Expect } from "./helpers/type-utils";

type InputProps = Omit<ComponentProps<"input">, 'onChange'> & {
  onChange: (value: string) => void
}

export function Input(
  props: InputProps
) {
  return (
    <Input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></Input>
  );
};

export function Container() {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
