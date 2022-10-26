import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStorageKey = "fdb62d443d8a4e8ad2ccd3508e1340dd";
    const onSubmit = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div>
            <h2 className='text-primary text-4xl text-center font-semibold'>Add Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        className="input input-bordered w-full"
                        {...register("name", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                </div>


                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full"
                        {...register("image", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                </div>



                <div className='mt-5'>
                    <input type="submit" className='btn btn-primary w-full' />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;