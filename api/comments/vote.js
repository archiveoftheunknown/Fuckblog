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

  const { commentId, voteType } = req.body;
  
  if (!commentId || (voteType !== 'up' && voteType !== 'down')) {
    return res.status(400).json({ error: 'Invalid request data' });
  }
  
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database not configured' });
  }
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    const field = voteType === 'up' ? 'upvotes' : 'downvotes';
    
    // Using parameterized query to safely update the field
    const query = voteType === 'up' 
      ? sql`UPDATE comments SET upvotes = upvotes + 1 WHERE id = ${commentId} RETURNING *`
      : sql`UPDATE comments SET downvotes = downvotes + 1 WHERE id = ${commentId} RETURNING *`;
    
    const result = await query;
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error voting on comment:', error);
    res.status(500).json({ error: 'Failed to vote on comment', details: error.message });
  }
}