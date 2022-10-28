import React from 'react';

const Category = ({ category }) => {
    const { _id, type } = category;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{type}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;