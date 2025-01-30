interface Props {
  className: string;
}

export function Button(props): React.FC<Props> {
  return {
    clave: 'valor',
  };
};

function Contenedor() {
  return (
    /* Por qué muestra el error aquí y no en el componente Button? */
    <Button className="primary"></Button>
  )
}

// Consider exporting or using Contenedor to avoid the unused variable error
export default Contenedor