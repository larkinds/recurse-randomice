//to do: replace temp header with full header, then hook up links

export default function Layout(props: { children: React.ReactElement | null }) {
  return (
    <>
      <header>Temp</header>
      <main>{props.children}</main>
    </>
  );
}
