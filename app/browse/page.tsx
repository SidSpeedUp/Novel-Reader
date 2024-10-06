import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stories } from '../api/stories/route';

export default function BrowsePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">Browse Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stories.map(story => (
          <Card key={story.id} className="story-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={story.coverUrl} alt={story.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="line-clamp-2">{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">by {story.author}</p>
              <Badge variant="secondary" className="mt-2 genre-badge">{story.genre}</Badge>
            </CardContent>
            <CardFooter>
              <Link href={`/story/${story.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}