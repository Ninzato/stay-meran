import { cn } from '@/lib/utils/cn';

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  showSearchButton?: boolean;
}

export function SearchInput({ size = 'md', showSearchButton = false, className, ...props }: SearchInputProps) {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className={cn(
          'border-foreground/20 bg-background text-foreground placeholder:text-foreground/50 focus:border-foreground focus:ring-foreground w-full rounded-md border px-3 py-2 focus:ring-1 focus:outline-none',
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4': size === 'md',
            'h-12 px-6 text-lg': size === 'lg'
          },
          showSearchButton && 'pr-12',
          className
        )}
        {...props}
      />
      {showSearchButton && (
        <button
          type="button"
          className="bg-foreground text-background hover:bg-foreground/90 absolute right-2 flex h-8 w-8 items-center justify-center rounded-md"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
