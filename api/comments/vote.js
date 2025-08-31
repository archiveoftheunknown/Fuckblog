const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { commentId, voteType } = req.body;
  
  if (!commentId || (voteType !== 'up' && voteType !== 'down')) {
    return res.status(400).json({ error: 'Invalid request data' });
  }
  
  try {
    const client = await pool.connect();
    const field = voteType === 'up' ? 'upvotes' : 'downvotes';
    const result = await client.query(
      `UPDATE comments SET ${field} = ${field} + 1 WHERE id = $1 RETURNING *`,
      [commentId]
    );
    client.release();
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error voting on comment:', error);
    res.status(500).json({ error: 'Failed to vote on comment' });
  }
};