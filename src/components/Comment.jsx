import { useState } from "react";
import CommentBox from "./CommentBox";

const Comment = () => {
  const initialData = [
    {
      id: 1,
      username: "Simrandeep",
      comment: "Great Product!",
      likes: 0,
      reply: [
        {
          id: 2,
          username: "John",
          comment: "I agree!",
          likes: 0,
          reply: [
            {
              id: 3,
              username: "Doe",
              comment: "Me too!",
              likes: 0,
              reply: [
                {
                  id: 4,
                  username: "Smith",
                  comment: "Same here!",
                  likes: 0,
                  reply: [
                    {
                      id: 5,
                      username: "Tony Stark",
                      comment: "Exactly!",
                      likes: 0,
                      reply: [
                        {
                          id: 6,
                          username: "Bruce Wayne",
                          comment: "I approve.",
                          likes: 0,
                          reply: [
                            {
                              id: 7,
                              username: "Peter Parker",
                              comment: "Count me in!",
                              likes: 0,
                              reply: [
                                {
                                  id: 8,
                                  username: "Natasha",
                                  comment: "Following!",
                                  likes: 0,
                                  reply: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 20,
          username: "Jane",
          comment: "Well said!",
          likes: 0,
          reply: [],
        },
      ],
    },
    {
      id: 30,
      username: "Elon Musk",
      comment: "Great Product!!!",
      likes: 0,
      reply: [
        {
          id: 31,
          username: "Tony Stark",
          comment: "Indeed!",
          likes: 0,
        },
      ],
    },
  ];
  const [comments, setComments] = useState(initialData);
  const [comment, setComment] = useState("");
  const addComment = () => {
    const newReply = {
      id: new Date(),
      username: "You",
      comment: comment,
      likes: 0,
      reply: [],
    };
    setComments(prevComments=>[newReply,...prevComments])
  };
  return (
    <div>
      <textarea
        value={comment}
        className="p-2 rounded-md border-2 border-white"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
      {comments?.map((comment) => {
        return (
          <CommentBox
            key={comment.id}
            data={comment}
            updateComments={setComments}
          />
        );
      })}
    </div>
  );
};

export default Comment;
