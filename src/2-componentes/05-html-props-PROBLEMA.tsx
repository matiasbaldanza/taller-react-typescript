export function Button({ className, ...rest }: {}) {
  const defaultClasses = 'background-primary text-white';

  return (
    <button {...rest} className={`${defaultClasses} ${className}`} />
  )
};

export function ActionButton({ action }: { action: () => void }) {
  return <Button onClick={action} type="button" />;
}
