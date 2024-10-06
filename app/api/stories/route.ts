import { NextResponse } from 'next/server';

export const stories = [
  {
    id: 1,
    title: 'The Lost City',
    author: 'Jane Doe',
    genre: 'Adventure',
    coverUrl: 'https://source.unsplash.com/random/300x400?adventure',
    chapters: [
      { id: 1, title: 'The Map', content: 'Chapter 1 content goes here...' },
      { id: 2, title: 'The Journey Begins', content: 'Chapter 2 content goes here...' },
      { id: 3, title: 'Unexpected Allies', content: 'Chapter 3 content goes here...' },
    ]
  },
  {
    id: 2,
    title: 'Whispers in the Dark',
    author: 'John Smith',
    genre: 'Mystery',
    coverUrl: 'https://source.unsplash.com/random/300x400?mystery',
    chapters: [
      { id: 1, title: 'The Vanishing', content: 'Chapter 1 content goes here...' },
      { id: 2, title: 'Clues in the Shadows', content: 'Chapter 2 content goes here...' },
      { id: 3, title: 'Revelations', content: 'Chapter 3 content goes here...' },
    ]
  },
  {
    id: 3,
    title: 'Starlight Dreams',
    author: 'Emily Brown',
    genre: 'Romance',
    coverUrl: 'https://source.unsplash.com/random/300x400?romance',
    chapters: [
      { id: 1, title: 'First Encounter', content: 'Chapter 1 content goes here...' },
      { id: 2, title: 'Stolen Glances', content: 'Chapter 2 content goes here...' },
      { id: 3, title: 'Under the Stars', content: 'Chapter 3 content goes here...' },
    ]
  },
  {
    id: 4,
    title: 'The Quantum Paradox',
    author: 'Alex Johnson',
    genre: 'Sci-Fi',
    coverUrl: 'https://source.unsplash.com/random/300x400?scifi',
    chapters: [
      { id: 1, title: 'The Experiment', content: 'Chapter 1 content goes here...' },
      { id: 2, title: 'Parallel Realities', content: 'Chapter 2 content goes here...' },
      { id: 3, title: 'The Convergence', content: 'Chapter 3 content goes here...' },
    ]
  },
];

export async function GET() {
  return NextResponse.json(stories);
}