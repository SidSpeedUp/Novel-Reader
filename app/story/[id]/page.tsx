import Link from 'next/link';
import { notFound } from 'next/navigation';
import { stories } from '../../api/stories/route';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return stories.map((story) => ({
    id: story.id.toString(),
  }));
}

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = stories.find(s => s.id === Number(params.id));

  if (!story) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">by {story.author}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Genre: {story.genre}</p>
      <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
      <ul className="space-y-2">
        {story.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/story/${story.id}/chapter/${chapter.id}`}>
              <Button variant="outline" className="w-full text-left justify-start">
                Chapter {chapter.id}: {chapter.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}