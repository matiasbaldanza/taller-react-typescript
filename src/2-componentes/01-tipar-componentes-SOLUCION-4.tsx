import React from 'react';

export function Button({ className }: { className: string }) {
  return <button className={className}></button >;
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