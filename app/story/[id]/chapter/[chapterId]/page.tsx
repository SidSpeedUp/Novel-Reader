import { notFound } from 'next/navigation';
import { stories } from '../../../../api/stories/route';
import StoryReader from '@/components/story-reader';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return stories.flatMap((story) =>
    story.chapters.map((chapter) => ({
      id: story.id.toString(),
      chapterId: chapter.id.toString(),
    }))
  );
}

export default function ChapterPage({ params }: { params: { id: string; chapterId: string } }) {
  const story = stories.find(s => s.id === Number(params.id));
  const chapter = story?.chapters.find(c => c.id === Number(params.chapterId));

  if (!story || !chapter) {
    notFound();
  }

  const chapterIndex = story.chapters.findIndex(c => c.id === chapter.id);
  const prevChapter = story.chapters[chapterIndex - 1];
  const nextChapter = story.chapters[chapterIndex + 1];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
      <h2 className="text-2xl font-semibold mb-6">Chapter {chapter.id}: {chapter.title}</h2>
      <StoryReader story={story} chapter={chapter} />
      <div className="mt-8 flex justify-between">
        {prevChapter ? (
          <Link href={`/story/${story.id}/chapter/${prevChapter.id}`}>
            <Button variant="outline">Previous Chapter</Button>
          </Link>
        ) : (
          <div></div>
        )}
        {nextChapter ? (
          <Link href={`/story/${story.id}/chapter/${nextChapter.id}`}>
            <Button variant="outline">Next Chapter</Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="mt-4">
        <Link href={`/story/${story.id}`}>
          <Button variant="link">Back to Chapter List</Button>
        </Link>
      </div>
    </div>
  );
}