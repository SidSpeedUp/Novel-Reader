"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, BookOpenIcon, SearchIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <BookOpenIcon className="mr-2" />
          WebNovel
        </Link>
        <nav className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </form>
          <Link href="/browse" className="hover:underline">Browse</Link>
          <Link href="/write" className="hover:underline">Write</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}