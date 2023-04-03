import { Route, Routes, Link } from "react-router-dom";
import AnecdoteList from "./Anecdotes";
import CreateNew from "./CreateAnecdote";
import About from "./About";
import Anecdote from "./Anecdote";

const Menu = ({ addNew, anecdotes }) => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to="/" style={padding}>
        anecdotes
      </Link>
      <Link to="/create" style={padding}>
        create new
      </Link>
      <Link to="/about" style={padding}>
        about
      </Link>

      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdotes={anecdotes} />}
        />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Menu;
