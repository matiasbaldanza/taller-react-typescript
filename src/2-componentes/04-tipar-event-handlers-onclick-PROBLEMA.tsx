interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  onClick
}: ButtonProps) {
  return <button onClick={onClick} className={className}>
    {children}
  </button>;
};
