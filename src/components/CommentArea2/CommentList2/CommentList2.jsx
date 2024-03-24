import React from 'react'
import { Accordion } from 'react-bootstrap'
import SingleComment2 from '../SingleComment2/SingleComment2';

export default function CommentList2({ comments, onRemoveComment, getComments }) {
  
  return (
    <>
      <Accordion className='mb-3'>
      {comments.map((comment, index) => (
        <SingleComment2 key={index} commentdata={comment} index={index} onRemoveComment={onRemoveComment} getComments={getComments} /> 
      ))}  
      </Accordion>

    </>
  );
}
