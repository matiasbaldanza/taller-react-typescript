import React from 'react';

export function Button(props: unknown) {
  return <button className={props.className}></button >;
};

function Contenedor() {
  return (
    <>
      {/* @ts-expect-error: Button requiere una prop className */}
      <Button></Button>

      <Button className="primary"></Button>

    </>
  )
}