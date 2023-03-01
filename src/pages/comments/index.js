import Link from 'next/link';
import { useState } from 'react';

function CommentsList() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([]);
  const fetcher = async () => {
    const response = await fetch(`/api/comments`);
    const data = await response.json();
    setComments(data);
  };
  const poster = async () => {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment: newComment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setComments([...comments, data]);
  };
  const deleter = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    setComments(data);
  };
  const getOne = async (id) => {
    const response = await fetch(`/api/comments/${id}`);
    const data = await response.json();
    setNewComment(data.comment);
  };
  return (
    <>
      <p className='text-2xl font-bold'>List of Comments</p>
      <input
        type='text'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className='ml-4 border-2 rounded-md border-gray-500 px-2 py-1'
      />
      <button
        onClick={poster}
        className='ml-4 px-3 py-1 rounded-lg border bg-blue-500 text-white'
      >
        Post
      </button>
      <button
        onClick={fetcher}
        className='m-4 px-3 py-1 rounded-lg border bg-blue-500 text-white'
      >
        Fetch
      </button>
      {comments.map((comment, index) => {
        return (
          <h2 className='text-lg font-bold' key={comment.id}>
            {comment.id}&nbsp; &nbsp; |&nbsp; &nbsp;
            {comment.comment}&nbsp; &nbsp; |&nbsp; &nbsp;
            <button
              onClick={() => deleter(comment.id)}
              className='ml-4 px-3 py-1 rounded-lg border bg-red-500 text-white'
            >
              Delete
            </button>
            &nbsp;
            <button
              onClick={() => getOne(comment.id)}
              className='m-4 px-3 py-1 rounded-lg border bg-blue-400 text-white'
            >
              Set
            </button>
            <Link href={`/comments/${comment.id}`}>
              <button className='m-4 px-3 py-1 rounded-lg border bg-blue-300 text-white'>
                View
              </button>
            </Link>
          </h2>
        );
      })}
    </>
  );
}

export default CommentsList;
