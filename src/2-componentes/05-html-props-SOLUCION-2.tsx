import { ComponentProps } from "react";

export function Button({
  className,
  ...rest
}: ComponentProps<'button'>) {
  const defaultClasses = 'background-primary text-white';

  return (
    <button {...rest} className={`${defaultClasses} ${className}`} />
  )
};

export function ActionButton({ action }: { action: () => void }) {
  return <Button onClick={action} type="button" />;
}
