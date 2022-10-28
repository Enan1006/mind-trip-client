import React, { useState } from 'react';

const PackageCard = ({ pack }) => {
    const [favourite, setFavourite] = useState(false)
    const { _id, name, img, country, region, duration, type, price } = pack;
    if (favourite) {
        console.log('favourite', name)
        const datas = {
            img: img,
            name: name,
            country: country,
            region: region,
            duration: duration,
            type: type
        }
        fetch(`http://localhost:5000/favourite`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    if (!favourite) {
        fetch(`http://localhost:5000/favourite/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <label className="swap swap-flip text-2xl">

                    {/* // <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" onClick={() => setFavourite(!favourite)} />

                    <div className="swap-on">💙</div>
                    <div className="swap-off">🖤</div>

                </label>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{type} | {region}</p>
                    <p>${price} | {duration} Days</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
