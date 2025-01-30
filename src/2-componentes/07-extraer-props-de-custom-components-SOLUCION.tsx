// Pensemos que NavBar es una librería externa y no podemos modificarla
// Tampoco exportaron las definiciones de tipos en un types.d.ts

export function NavBar(props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.links.map((link) => <a href={link}>{link}</a>)}</div>
      {props.children}
    </div>
  );
}

// Esta es nuestra aplicación

type NavBarProps = ComponentProps<typeof NavBar>;


