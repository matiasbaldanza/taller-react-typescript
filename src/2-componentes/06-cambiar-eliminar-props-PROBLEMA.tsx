import { ComponentProps } from "react";
import { Equal, Expect } from "./helpers/type-utils";

export function Input(
  props: ComponentProps<"input"> & { onChange: (value: string) => void }
) {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
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
