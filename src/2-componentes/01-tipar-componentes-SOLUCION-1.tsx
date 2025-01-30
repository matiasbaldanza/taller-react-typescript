import React from 'react';

interface Props {
  className: string;
}

export function Button(props: Props) {
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

// Consider exporting or using Contenedor to avoid the unused variable error
export default Contenedor