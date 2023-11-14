import React from 'react';
import PropTypes from 'prop-types';

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile">
        <h2>Profile Page</h2>
        <div>
          <strong>Username:</strong> {user.username}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

// ProfilePage.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     // Add more prop types for other user details as needed
//   }).isRequired,
// };

export default ProfilePage;
