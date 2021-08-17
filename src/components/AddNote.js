import { Button, Form } from "react-bootstrap";
import { useState } from "react";


const AddNote = ( {onAdd} ) => {
 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = (e) => {
       e.preventDefault()

    
       onAdd({title, content})
       setTitle('')
       setContent('')
    }

    return (
        <div>
            <Form className = 'form'onSubmit = {onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className = 'text-info'>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange = {(e) => setTitle(e.target.value)} />
                    
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='text-info'>Body</Form.Label>
                    <Form.Control as="textarea" rows={9} placeholder="Write your note here" value={content} onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Button className = 'btn btn-block btn-danger text-white'
                type="submit">
                    Save</Button>
            </Form>
           
           
        </div>
    )
}

export default AddNote
