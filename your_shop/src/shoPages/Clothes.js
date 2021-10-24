import React from 'react';
import ClothesItems from '../components/items/ClothesItems.js'


function Clothes() {

	const info = [
		{ id: 1, image: "pics/pic8.jpg", name: "aohorhgho", type: "aohorhgho", price: "10" },
		{ id: 2, image: "pics/pic9.jpg", name: "berllrlr", type: "aohorhgho", price: "10" },
		{ id: 3, image: "pics/pic2.jpg", name: "berlknrnlrb", type: "aohorhgho", price: "10" },
		{ id: 4, image: "pics/pic9.jpg", name: "berlnrlnr", type: "aohorhgho", price: "10" },
		{ id: 5, image: "pics/pic8.jpg", name: "belrnlrbr", type: "aohorhgho", price: "10" },
		{ id: 6, image: "pics/pic2.jpg", name: "berneùbrbl", type: "aohorhgho", price: "10" },
	];

	const items = info.map((item) => {

		return <ClothesItems
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

export default Clothes;