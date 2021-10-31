import React, { useState } from 'react';
import people from '../layout/Reviews';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';


const Review = () => {

    const [index, setIndex] = useState(1);
    const { name, image, job, text } = people[index];

    const prevReview = () => {

        setIndex((index) => {

            let newIndx = index - 1;

            if (newIndx < 0) {
                newIndx = people.length - 1;
            }
            return newIndx;
        })
    }
    const nextReview = () => {

        setIndex((index) => {

            let newIndx = index + 1;

            if (newIndx > people.length - 1) {
                newIndx = 0;
            }
            return newIndx;
        })
    }

    return (
        <article>
            <div className="card myReviewCard shadow-lg p-3 mb-5 bg-body rounded ">
                <img src={image} className=" myReviewImg  shadow p-3 mb-3 bg-body " alt={name} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-title">{job}</p>
                    <p className="card-text">{text}</p>
                </div>
                <div class=" d-grid gap-2 d-md-flex  mx-auto">
                    <button class="btn btn-secondary me-md-2" onClick={prevReview}><FaChevronLeft /></button>
                    <button class="btn btn-secondary me-md-2" onClick={nextReview}><FaChevronRight /></button>
                </div>
            </div>
        </article>
    )
};


export default Review;
