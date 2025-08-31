import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { postSlug } = req.query;
  
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database not configured' });
  }
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      SELECT * FROM comments 
      WHERE post_slug = ${postSlug} 
      ORDER BY created_at DESC
    `;
    
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments', details: error.message });
  }
}