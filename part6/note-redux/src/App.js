import NewNote from "./components/NewNote";
import { useSelector, useDispatch } from "react-redux";
import Notes from "./components/Notes";

const App = () => {
  const importantNotes = useSelector((state) =>
    state.filter((note) => note.important)
  );

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
