import React, { useState, useEffect } from "react";

function User({ users }) {

  return (
    <div className="user-list">
      <h2>Thread Users</h2>
      {users.sort((a, b) => a.name - b.name).map((user) => (
        <span key={user.id} className="user">
          {user.name}<br />
        </span>
      ))}
    </div>
  );
}

export default User;