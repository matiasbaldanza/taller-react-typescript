import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

/* AQUI NO SE PERMITE AGREGAR PROPS ADICIONALES
PORQUE está chequeando un objeto

const tagState = {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}
*/

/* AQUI, CUANDO ES UNA FUNCIÓN,
TYPESCRIPT PERMITE PROPS ADICIONALES
por algo que se llama COVARIANZA (COVARIANCE)

type GetTagState = () => {}

const getTagState: GetTagState = {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
  asdf: 1231231,
}
*/

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState(
                // tipar el retorno del callback
                // para que TS compare no como funciones
                // sino como objetos, el retorno de la función callback
                (currentState): TagState => ({
                  ...currentState,
                  // @ts-expect-error debe ser tagSelected
                  tagselected: tag.id,
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState(
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: "New",
                  // @ts-expect-error no existe otherValue
                  otherValue: "something",
                },
              ],
            })
          );
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
