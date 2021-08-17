import Button from './Button'


const Header = ( {onAdd, showAdd} ) => {

    return (
        <header className = 'navbar d-flex justify-content-between bg-info text-white'>
            <h1>NoteApp</h1>
           <Button
           text = {showAdd ? 'Close' : 'Add Note'}
           onClick = {onAdd} />
        </header>
    )
}

export default Header
