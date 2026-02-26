export function Flex({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
}
