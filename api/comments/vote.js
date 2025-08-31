import postgres from 'postgres';

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
  
  const validVoteTypes = ['up', 'down', 'remove_up', 'remove_down', 'switch_to_up', 'switch_to_down'];
  if (!commentId || !validVoteTypes.includes(voteType)) {
    return res.status(400).json({ error: 'Invalid request data' });
  }
  
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database not configured' });
  }
  
  let sql;
  try {
    // Create connection for this request
    sql = postgres(process.env.DATABASE_URL, {
      ssl: 'require',
      max: 1 // Single connection for serverless
    });
    
    let result;
    switch(voteType) {
      case 'up':
        // Add upvote
        result = await sql`UPDATE comments SET upvotes = upvotes + 1 WHERE id = ${commentId} RETURNING *`;
        break;
      case 'down':
        // Add downvote
        result = await sql`UPDATE comments SET downvotes = downvotes + 1 WHERE id = ${commentId} RETURNING *`;
        break;
      case 'remove_up':
        // Remove upvote (ensure it doesn't go below 0)
        result = await sql`UPDATE comments SET upvotes = GREATEST(upvotes - 1, 0) WHERE id = ${commentId} RETURNING *`;
        break;
      case 'remove_down':
        // Remove downvote (ensure it doesn't go below 0)
        result = await sql`UPDATE comments SET downvotes = GREATEST(downvotes - 1, 0) WHERE id = ${commentId} RETURNING *`;
        break;
      case 'switch_to_up':
        // Switch from downvote to upvote
        result = await sql`UPDATE comments 
                          SET upvotes = upvotes + 1, 
                              downvotes = GREATEST(downvotes - 1, 0)
                          WHERE id = ${commentId} 
                          RETURNING *`;
        break;
      case 'switch_to_down':
        // Switch from upvote to downvote
        result = await sql`UPDATE comments 
                          SET downvotes = downvotes + 1, 
                              upvotes = GREATEST(upvotes - 1, 0)
                          WHERE id = ${commentId} 
                          RETURNING *`;
        break;
    }
    
    await sql.end(); // Close connection
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error voting on comment:', error);
    if (sql) await sql.end();
    res.status(500).json({ 
      error: 'Failed to vote on comment', 
      details: error.message
    });
  }
}