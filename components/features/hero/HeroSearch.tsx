import { SearchInput } from '@/components/ui';
import { mockHeroContent } from '@/lib/constants';

export function HeroSearch() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <SearchInput
        size="lg"
        placeholder={mockHeroContent.searchPlaceholder}
        showSearchButton={true}
        className="bg-background/90 border-background/20 backdrop-blur-sm"
      />
    </div>
  );
}
