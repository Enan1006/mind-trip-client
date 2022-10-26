import React from 'react';

const PackageCard = ({ pack }) => {
    const { name, img, country, region, duration, type } = pack;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <label className="swap swap-flip text-2xl">

                    {/* // <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" />

                    <div className="swap-on">💙</div>
                    <div className="swap-off">🖤</div>
                </label>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{type} | {region}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;