type ButtonProps<T> = {
  action: (args?: T) => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button<T>({
  action,
  children,
  className,
}: ButtonProps<T>) {
  function handleClick() {
    action();
  }
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
