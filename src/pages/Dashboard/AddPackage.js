import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { toast } from 'react-toastify';

const AddPackage = () => {
    const [html, setHtml] = useState('');

    function onChange(e) {
        setHtml(e.target.value);
    }

    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data, country, region)
        const image = data.image[0];
        const formData = new FormData();
        //step-1: parameter(input_type, image_info)
        formData.append('file', image);
        //step-2: parameter('upload_preset', upload_preset_name)
        formData.append('upload_preset', 'upload');
        //step-3: parameter('cloud_name', cloud_name(from dashboard))
        formData.append('cloud_name', 'drgmzbim5');
        const url = `https://api.cloudinary.com/v1_1/drgmzbim5/image/upload`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                console.log('imgbb', result)
                console.log('url', result.url)
                const img = result.url;
                const packageInfo = {
                    img: img,
                    name: data.name,
                    price: data.price,
                    country: country,
                    region: region,
                    duration: data.duration,
                    type: data.type,
                    description: data.description
                }
                fetch(`http://localhost:5000/package`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(packageInfo)
                })

            })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Doctor added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the doctor');
                }
            })
    };
    return (
        <div>
            <h2 className='text-primary text-4xl text-center font-semibold'>Add Package</h2>
            {/* //This is form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Package Name</span>
                    </label>
                    <input
                        className="input input-bordered w-full"
                        {...register("name", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                </div>


                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Your Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full" required
                        {...register("image", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                </div>


                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Select Destination</span>
                    </label>
                    <CountryDropdown
                        className="input input-bordered w-1/2"
                        value={country}
                        onChange={(val) => setCountry(val)} required />
                    <RegionDropdown
                        className="input input-bordered w-1/2"
                        country={country}
                        value={region}
                        onChange={(val) => setRegion(val)} required />
                </div>

                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Select Type</span>
                    </label>
                    <select  {...register("type", { required: true })} className="select input-bordered w-full" required>
                        <option>City Tour</option>
                        <option>Beach Tour</option>
                        <option>Hiking Tour</option>
                    </select>
                </div>

                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Duration in Days (ex: 2)</span>
                    </label>
                    <input
                        type='number'
                        className="input input-bordered w-full" required
                        {...register("duration", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                </div>
                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Package Price</span>
                    </label>
                    <input
                        type='number'
                        className="input input-bordered w-full" required
                        {...register("price", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                </div>

                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full"></textarea>
                </div>

                <div className='mt-5'>
                    <input type="submit" className='btn btn-primary w-full' />
                </div>
            </form>
        </div>
    );
};

export default AddPackage;