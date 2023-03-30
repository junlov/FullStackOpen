import NewNote from "./components/NewNote";
import VisibilityFilter from "./components/VisibilityFilter";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
