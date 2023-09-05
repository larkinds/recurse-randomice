type ButtonProps<T> = {
  action: (args?: T) => void;
  children: React.ReactNode;
};

export default function Button<T>({ action, children }: ButtonProps<T>) {
  function handleClick() {
    action();
  }
  return <button onClick={handleClick}>{children}</button>;
}
