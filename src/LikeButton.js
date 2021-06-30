import React, { useState } from 'react';

function LikeButton() {
  let [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  return <button onClick={counter}>{count} Likes</button>;
}

export default LikeButton;
