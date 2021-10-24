import React from 'react';
import AccessoriesItems from '../components/items/AccessoriesItems.js'


function Accessories() {

	const access = [
		{ id: 1, image: "pics/pic1.jpg", name: "azemberb", type: "azemberb", price: "10" },
		{ id: 2, image: "pics/pic11.jpg", name: "brnermer", type: "azemberb", price: "10" },
		{ id: 3, image: "pics/pic1.jpg", name: "brùrùer", type: "azemberb", price: "10" },
		{ id: 4, image: "pics/pic11.jpg", name: "bergrir", type: "azemberb", price: "10" },
		{ id: 5, image: "pics/pic1.jpg", name: "brnùrùer", type: "aazemberb", price: "10" },
		{ id: 6, image: "pics/pic11.jpg", name: "bergrgrig", type: "azemberb", price: "10" },
	];

	const items = access.map((item) => {

		return <AccessoriesItems
			key={item.id}
			image={item.image}
			name={item.name}
			type={item.type}
			price={item.price} />

	});


	return (

		<div className="row px-5 m-5">

			{items}
		</div>


	);
}

export default Accessories;