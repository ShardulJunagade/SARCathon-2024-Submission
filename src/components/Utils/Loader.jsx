import React from 'react';
import * as LoaderSpinner from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  const Comment = LoaderSpinner.Comment;
  
  return (
    <div className='loader-component'>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
      Loading...
    </div>
  );
};

export default Loader;
