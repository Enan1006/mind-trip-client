import React from 'react';
import { useQuery } from '@tanstack/react-query'
import PackageCard from './PackageCard';


const Packages = () => {
    const { isLoading, error, data: packages } = useQuery(['packages'], () =>
        fetch('http://localhost:5000/package').then(res =>
            res.json()
        )
    )
    return (
        <div className='mx-10 my-20'>
            <h2 className='text-accent text-4xl font-semibold'>Trending Places</h2>
            <h4 className='text-2xl font-semibold'>The trending tours are based on user bookings.</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5'>
                {
                    packages?.map(pack => <PackageCard
                        pack={pack}
                        key={pack._id}
                    ></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Packages;