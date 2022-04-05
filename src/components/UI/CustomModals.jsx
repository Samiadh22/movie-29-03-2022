import {useState} from 'react'
import {Button, Modal,InputGroup, FormControl} from 'react-bootstrap'
import {addMovie} from '../../redux/action'
import { useDispatch } from 'react-redux';
export default function CustomModals() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] =useState('')
    const [description, setDescription] =useState('')
    const [image, setImage] =useState('')
    const [rating, setRating] =useState('')

    const addNewMovie =() => {
        dispatch (addMovie({title,description,image,rating }))
    }
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">
                <FormControl onChange ={(e)=> setTitle(e.target.value)}
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange ={(e)=> setDescription(e.target.value)}
                placeholder="Description"
                aria-label="description"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange ={(e)=> setImage(e.target.value)}
                placeholder="Image"
                aria-label="image"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange ={(e)=> setRating(e.target.value)}
                placeholder="Rating"
                aria-label="rating"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addNewMovie()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  