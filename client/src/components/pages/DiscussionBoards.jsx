import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DiscussionBoards = () => {
  const { forumId } = useParams();
  const [discussionBoards, setDiscussionBoards] = useState([]);

  useEffect(() => {
    // Fetch discussion boards data for the specific forum from your API or data source
    // For simplicity, using a dummy data array here
    const dummyDiscussionBoards = [
      { id: 1, title: 'Discussion Board 1', forumId: 1 },
      { id: 2, title: 'Discussion Board 2', forumId: 1 },
      { id: 3, title: 'Discussion Board 3', forumId: 2 },
      // Add more discussion boards as needed
    ];

    // Filter discussion boards based on the current forumId
    const filteredBoards = dummyDiscussionBoards.filter(
      (board) => board.forumId === parseInt(forumId)
    );

    setDiscussionBoards(filteredBoards);
  }, [forumId]);

  return (
    <div className="discussion-boards-container">
      <h2>Discussion Boards</h2>
      <ul>
        {discussionBoards.map((board) => (
          <li key={board.id}>
            <Link to={`/forums/${forumId}/discussion/${board.id}`}>
              {board.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionBoards;
