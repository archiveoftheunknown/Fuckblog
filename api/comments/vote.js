import { Pool } from '@neondatabase/serverless';

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
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const client = await pool.connect();
    const field = voteType === 'up' ? 'upvotes' : 'downvotes';
    const result = await client.query(
      `UPDATE comments SET ${field} = ${field} + 1 WHERE id = $1 RETURNING *`,
      [commentId]
    );
    client.release();
    await pool.end();
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error voting on comment:', error);
    res.status(500).json({ error: 'Failed to vote on comment', details: error.message });
  }
}