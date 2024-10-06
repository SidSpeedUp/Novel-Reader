"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function StoryReader({ story, chapter }: { story: any; chapter: any }) {
  const [theme, setTheme] = useState('default');
  const [fontSize, setFontSize] = useState('medium');

  return (
    <>
      <div className="mb-6 flex space-x-4">
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger>
            <SelectValue placeholder="Choose theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="sepia">Sepia</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={fontSize} onValueChange={setFontSize}>
          <SelectTrigger>
            <SelectValue placeholder="Font size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className={`reading-area p-6 rounded-lg theme-${theme}`}>
        <p className={`${fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-xl' : 'text-base'}`}>
          {chapter.content}
        </p>
      </div>
    </>
  );
}