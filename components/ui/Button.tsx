import { cn } from '@/lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'rounded';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2.5 rounded-md font-medium transition-colors hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        {
          // Variants
          'bg-foreground text-background hover:bg-foreground/90':
            variant === 'primary',
          'bg-background text-foreground border-foreground hover:bg-foreground hover:text-background border':
            variant === 'secondary',
          'text-foreground hover:bg-foreground/10': variant === 'ghost',
          'border-foreground text-foreground hover:bg-foreground hover:text-background border':
            variant === 'outline',
          'w-fit rounded-full text-blue-900 outline outline-blue-900':
            variant === 'rounded',
          // Sizes
          'px-3 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-7 py-4': size === 'lg'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
