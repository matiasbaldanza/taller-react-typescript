export function Container(props: {}) {
  return <div>{props.children}</div>;
};

export function Page() {
  return (
    <>
      <Container />
      <Container>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p>Amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Container>
    </>
  )
}
