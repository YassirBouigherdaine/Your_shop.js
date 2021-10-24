import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function ShoesItems(props) {

	const [isActive, setIsActive] = useState(false)

	const imageHandler = () => {
		setIsActive(!isActive)
	}

	const {
		buttonLabel,
		className
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);


	return (

		<div  className={`${isActive ? 'card bg-dark text-white row w-100 px-4 m-5  py-4' : 'card bg-dark text-white row   m-5  py-2'}`} style={{ maxWidth: "18rem" }} >
			<img src={props.image} alt="..." className='card-img-top  mt-3' onMouseOver={imageHandler}/>
			<div className="card-body">
				<h3 className="card-title">{props.name}</h3>
				<h4>{props.type}</h4>
				<h4>{props.price}</h4>
				<br />
				<div class="d-grid gap-2">
					<button class="btn btn-danger" type="button" onClick={toggle}>Buy it now</button>
				</div>
				
			</div>

			<div>
				
				<Modal isOpen={modal} toggle={toggle} className={className}>
					<ModalHeader toggle={toggle}>Item name</ModalHeader>
					<ModalBody>
						<form>
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">Item name</label>
								<input type="name" className="form-control" id="name" />

							</div>
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">amount</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
								<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
							</div>

							<div cclassNamelass="mb-3 form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" />
								<label className="form-check-label px-1" for="exampleCheck1">Confirm</label>
							</div>
							<br />
						</form>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={toggle}>Submit</Button>{' '}
						<Button color="secondary" onClick={toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
			
		</div>
	)
}


export default ShoesItems;