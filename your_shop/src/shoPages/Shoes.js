import React from 'react';
import ShoesItems from '../components/items/ShoesItems.js'



function Shoes() { 

	const shoes = [
		{ id: 1, image: "pics/pic14.jpg", name: "bfouerru", type: "bfouerru", price: "1200" },
		{ id: 2, image: "pics/pic7.jpg", name: "brglrrv", type: "bfouerru", price: "1020" },
		{ id: 3, image: "pics/pic14.jpg", name: "berlnerbrb", type: "bfouerru", price: "1200" },
		{ id: 4, image: "pics/pic7.jpg", name: "brlnerlner", type: "abfouerru", price: "1200" },
		{ id: 5, image: "pics/pic14.jpg", name: "brgrgergr", type: "bfouerru", price: "1200" },
		{ id: 6, image: "pics/pic7.jpg", name: "berlgnergrg", type: "bfouerru", price: "1200" },
	];

	const items = shoes.map((item) => {

		return <ShoesItems
			key={item.id}
			image={item.image}
			name={item.name}
			type={item.type}
			price={item.price} />

	});

	


	return (

		<div className="row px-5 ms-5">

			{items}

		</div>


	);
}

export default Shoes;