"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the story data to your backend
    console.log({ title, genre, content });
    alert('Story submitted successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Write Your Story</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="genre" className="block mb-2">Genre</label>
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger>
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
              <SelectItem value="scifi">Science Fiction</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="thriller">Thriller</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="content" className="block mb-2">Story Content</label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
        </div>
        <Button type="submit">Submit Story</Button>
      </form>
    </div>
  );
}