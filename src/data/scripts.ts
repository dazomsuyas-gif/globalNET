export interface Script {
  id: string;
  title: string;
  category: string;
  durationMinutes: number;
  pages: number;
  author: string;
  description: string;
  content: string;
  tags: string[];
}

const scriptCategories = ['Education', 'Business', 'Tech', 'Marketing', 'Storytelling', 'Culture', 'Health', 'Finance'];

function createScript(index: number): Script {
  const category = scriptCategories[index % scriptCategories.length];
  const title = `${category} Script ${index + 1}`;
  return {
    id: `script-${index + 1}`,
    title,
    category,
    durationMinutes: 5 + (index % 6) * 3,
    pages: 3 + (index % 8),
    author: `Author ${((index % 12) + 1)}`,
    description: `This is a complete ${category.toLowerCase()} script intended for creators building videos, podcasts, or presentations. It includes structure, talking points, and pacing guidance.`,
    content: `Introduction:\nThis is the opening section of ${title}.\n\nMain section:\nDescribe the key points clearly and share examples.\n\nConclusion:\nSummarize the value proposition and call to action.`,
    tags: [category.toLowerCase(), 'script', 'content', 'creator']
  };
}

export const scripts: Script[] = Array.from({ length: 120 }, (_, index) => createScript(index));

export const getScriptsByCategory = (category: string) => {
  return scripts.filter(script => script.category.toLowerCase() === category.toLowerCase());
};

export const getScriptById = (id: string) => {
  return scripts.find(script => script.id === id);
};
