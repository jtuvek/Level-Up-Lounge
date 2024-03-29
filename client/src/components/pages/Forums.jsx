import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Forums = () => {
  // Assuming you have a list of forums or discussion boards
  const [forums, setForums] = useState([]);

  // useEffect(() => {
  //   const dummyForums = [
  //     { id: 1, name: 'General Discussion' },
  //     { id: 2, name: 'Game Reviews' },
  //     { id: 3, name: 'Technical Support' },
  //   ];

  //   setForums(dummyForums);
  // }, []);

  return (
    <div className="forums-container">
      <h2 className='forum-title'>Still in Development...</h2>
      <ul>
        {forums.map((forum) => (
          <li key={forum.id}>
            <Link to={`/forums/${forum.id}`}>{forum.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forums;
