import { useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const id = useParams().id;
  const anecdote = anecdotes.find((n) => n.id === Number(id));
  return (
    <div>
      {anecdote.content} by {anecdote.author} has {anecdote.votes} votes for
      more info see {anecdote.info}
    </div>
  );
};

export default Anecdote;
