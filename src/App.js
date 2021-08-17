import { useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";

function App() {
  const [showAddNote, setShowAddNote] = useState(false);
  const [notes, setNotes] = useState([]);

  //Add Note
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newNote = { id, ...note };
    setNotes([...notes, newNote]);
  };

  //Delete note

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <Header
        onAdd={() => setShowAddNote(!showAddNote)}
        showAdd={showAddNote}
      />
      {showAddNote && <AddNote className="body" onAdd={addNote} />}
      {notes.length > 0 ? (
        <Notes notes={notes} onDelete={deleteNote} />
      ) : (
        <h2 className="text-info">No notes available</h2>
      )}

      
    </div>
  );
}

export default App;
