import Note from './Note'
const Notes = ( {notes, onDelete}) => {

  return (
    <div className="notepad">
    <div className = 'row'>
      {notes.map((note) => (
      <Note key= {note.id} note = {note} onDelete = {onDelete}/> 
           
              
      ))}
    </div>
    </div>
  ) 
}

export default Notes;
