interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
  // onClick: React.MouseEventHandler;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
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
