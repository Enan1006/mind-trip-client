import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { isLoading, error, data: categories } = useQuery(['category'], () =>
        fetch(`http://localhost:5000/category`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <div className='mx-10 my-20'>
            <h2 className='text-secondary text-4xl font-semibold'>Select Category</h2>
            <h4 className='text-accent text-2xl mt-3'>Find activities based on your adventure styles.
            </h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 mt-10'>
                {
                    categories.map(category => <Category
                        category={category}
                        key={category._id}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;