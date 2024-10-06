import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpenIcon, PenToolIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to WebNovel</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover amazing web novels or share your own with the world. Join our community of passionate readers and writers today!
      </p>
      <div className="flex space-x-4">
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
          <Link href="/browse" className="flex items-center">
            <BookOpenIcon className="mr-2" />
            Start Reading
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
          <Link href="/write" className="flex items-center">
            <PenToolIcon className="mr-2" />
            Start Writing
          </Link>
        </Button>
      </div>
    </div>
  );
}