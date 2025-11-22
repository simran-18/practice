import { useState } from "react";

const CommentBox = ({ data, updateComments }) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(data.comment);

  const updateCommentTree = (comments, commentId, callback) => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        return callback(comment);
      }
      if (comment.reply && comment.reply.length > 0) {
        return {
          ...comment,
          reply: updateCommentTree(comment.reply, commentId, callback)
        };
      }
      return comment;
    });
  };

  const deleteNode = (comments, commentId) => {
    return comments
      .filter(comment => comment.id !== commentId)
      .map(child => ({
        ...child,
        reply: deleteNode(child.reply || [], commentId)
      }));
  };

  const handleDelete = () => {
    updateComments(prev => deleteNode(prev, data.id));
  };

  const handleAddComment = () => {
    const newReply = {
      id: crypto.randomUUID(),
      username: "You",
      comment: replyText,
      likes: 0,
      reply: []
    };

    updateComments(prev =>
      updateCommentTree(prev, data.id, comment => ({
        ...comment,
        reply: [...(comment.reply || []), newReply]
      }))
    );

    setShowReply(false);
    setReplyText("");
  };

  const handleEditSave = () => {
    updateComments(prev =>
      updateCommentTree(prev, data.id, comment => ({
        ...comment,
        comment: editText
      }))
    );
    setIsEditing(false);
  };

  return (
    <div className="comment-container ml-4 mt-2">
      <h1>{data?.username}</h1>

      {isEditing ? (
        <div className="flex gap-2 my-2">
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
            className="border p-1 rounded"
          />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <h3>{data?.comment}</h3>
      )}

      <div className="flex gap-2 text-sm my-1">
        <button onClick={() => setShowReply(prev => !prev)}>Reply</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>

      {showReply && (
        <div className="flex gap-2 my-2">
          <input
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            placeholder="Reply..."
            className="border p-1 rounded"
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      )}

      <div className="ml-6 border-l pl-4">
        {data?.reply?.map(child => (
          <CommentBox
            key={child.id}
            data={child}
            updateComments={updateComments}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
