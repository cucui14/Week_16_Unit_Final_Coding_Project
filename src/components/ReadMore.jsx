import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTextEmpty, setIsTextEmpty] = useState(text)
  //sets useState for the More button on the post text
  const [isTruncated, setIsTruncated] = useState(true);
  //handles the More button toggle
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTextEmpty ? (
        isTruncated ? (
        <p className='px-1'>
          {text.slice(0, maxLength)}
          <span>...</span>
          <button className='border-0 bg-transparent text-dark-emphasis' onClick={toggleTruncate}>more</button>
        </p>
      ) : (
        <p className='px-1'>
            {text}
        </p>
      )
      ) : (
          null
      )}
    </div>
  );
};

export default ReadMore;
