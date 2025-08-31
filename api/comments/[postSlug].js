const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { postSlug } = req.query;
  
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM comments WHERE post_slug = $1 ORDER BY created_at DESC',
      [postSlug]
    );
    client.release();
    
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};