// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { comments } from '@/data/comments';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(req.query.id)
    );
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    comments.map((comment, index) => {
      if (comment.id === parseInt(req.query.id)) {
        comments.splice(index, 1);
      }
    });
    res.status(201).json(comments);
  }
}
