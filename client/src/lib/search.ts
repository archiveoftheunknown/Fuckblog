import Fuse from 'fuse.js';
import { blogPosts, type BlogPost } from '@/data/blog-posts';

const fuseOptions = {
  keys: [
    'title',
    'excerpt',
    'content',
    'category',
    'tags',
    'author.name'
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true
};

const fuse = new Fuse(blogPosts, fuseOptions);

export function searchPosts(query: string): BlogPost[] {
  if (!query.trim()) {
    return blogPosts;
  }
  
  const results = fuse.search(query);
  return results.map(result => result.item);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}
