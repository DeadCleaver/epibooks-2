import React from 'react'
import { Accordion } from 'react-bootstrap'
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList({ comments, onRemoveComment, getComments }) {
  
  return (
    <>
      <Accordion className='mb-3'>
      {comments.map((comment, index) => (
        <SingleComment key={index} commentdata={comment} index={index} onRemoveComment={onRemoveComment} getComments={getComments} /> 
      ))}  
      </Accordion>

    </>
  );
}
