"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stories } from '../api/stories/route';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState(stories);

  useEffect(() => {
    if (query) {
      const filteredStories = stories.filter(story =>
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.author.toLowerCase().includes(query.toLowerCase()) ||
        story.genre.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredStories);
    } else {
      setResults(stories);
    }
  }, [query]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Search Results {query ? `for "${query}"` : ''}</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map(story => (
            <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={story.coverUrl} alt={story.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="line-clamp-2">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">by {story.author}</p>
                <Badge variant="secondary" className="mt-2">{story.genre}</Badge>
              </CardContent>
              <CardFooter>
                <Link href={`/story/${story.id}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}