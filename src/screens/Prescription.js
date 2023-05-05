import React, { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function Prescription(props) {
  const [show, setShow] = useState(false);
  const [disease, setDisease] = useState("");
  const [prescription, setPrescription] = useState("");
  
  
  const [obj, setObj] = useState({});
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect( async () => {
    
    await axios.get(`https://opd.onrender.com/api/users/prescription/${props.data}`)
    .then((response) => {
        // console.log("getting data ",response.data.prescription)
        if(response.data.prescription){
           setPrescription(response.data.prescription)
        }
    }).catch((err)=>{console.log(err);}); 

    
  }, [])
  
    
   
  
  const submitform =  async () => {
    console.log(prescription);
    // setObj({
    //     "prescription":prescription,
    //     "disease":disease
    // })
    
    // const presData = new FormData();
    // presData.append("prescription",json);
    // console.log(obj,"frontend presdata");
    // await axios.get(`https://opd.onrender.com/api/users/prescription`)
    // .then(response => console.log("Get response",response)).catch((err)=>{console.log(err);}); 
    
        await axios.put(`https://opd.onrender.com/api/users/prescription/${props.data}`,{prescription:prescription} )
        .then((response) => {
            console.log(response)
            // setPrescription(response.data.user.prescription)
        }).catch((err)=>{console.log(err);}); 
    
        await axios.put(`https://opd.onrender.com/api/users/prescription/${props.data}`,{prescription:prescription} )
        .then((response) => {
            console.log(response)
            // setPrescription(response.data.user.prescription)
        }).catch((err)=>{console.log(err);}); 
    
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Prescription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prescription {props.data}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="PrescriptionForm.ControlInput1">
              <Form.Label>Diseases</Form.Label>
              <Form.Control
                type="text"
                placeholder="diseases"
                value={disease}
                onChange={(e)=>{setDisease(e.target.value)}}
                autoFocus
              />
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="PrescriptionForm.ControlTextarea1"
            >
              <Form.Label>Prescription textarea</Form.Label>
              <Form.Control value={prescription} onChange={(e)=>{setPrescription(e.target.value)}} as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitform}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Prescription;