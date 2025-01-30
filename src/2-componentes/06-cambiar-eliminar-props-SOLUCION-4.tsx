import { ComponentProps } from "react";
import { Equal, Expect } from "./helpers/type-utils";

type OverrideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden;

type InputProps = OverrideProps<
  ComponentProps<"input">,
  {
    onChange: (value: string) => void
  }
>


export function Input(props: InputProps) {
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
