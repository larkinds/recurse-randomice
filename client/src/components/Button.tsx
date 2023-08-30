export default function Button({ action, children }) {
  return <button onClick={action}>{children}</button>;
}
