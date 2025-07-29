import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated';
}

export function Card({ children, className, size = 'md', variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg',
        {
          // Variants
          'bg-background': variant === 'default',
          'bg-background border-foreground/20 border': variant === 'bordered',
          'bg-background shadow-lg': variant === 'elevated',
          // Sizes
          'p-3': size === 'sm',
          'p-4': size === 'md',
          'p-6': size === 'lg'
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('pb-3', className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('', className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('pt-3', className)}>{children}</div>;
}
