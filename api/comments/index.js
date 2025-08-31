const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { postSlug, displayName, content } = req.body;
  
  if (!postSlug || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO comments (post_slug, display_name, content, upvotes, downvotes) VALUES ($1, $2, $3, 0, 0) RETURNING *',
      [postSlug, displayName || 'Anonymous', content]
    );
    client.release();
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
};