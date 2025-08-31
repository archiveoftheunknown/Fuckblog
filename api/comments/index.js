import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { postSlug, displayName, content } = req.body;
  
  if (!postSlug || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database not configured' });
  }
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      INSERT INTO comments (post_slug, display_name, content, upvotes, downvotes)
      VALUES (${postSlug}, ${displayName || 'Anonymous'}, ${content}, 0, 0)
      RETURNING *
    `;
    
    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Failed to create comment', details: error.message });
  }
}