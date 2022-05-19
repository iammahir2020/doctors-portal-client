import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://safe-shelf-64042.herokuapp.com/service").then((res) =>
      res.json()
    )
  );

  /**
   * # 3 ways to store images
   * 1. third party storage // free open public storage is ok for practice project
   * 2. your own storage in your own server(file system)
   * 3. database: mongodb
   *
   * YUP: to validate file: Search YUP file validation for react hook form
   */

  const imageStorageKey = "18a71459c4944f29646f860968c71813";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialization: data.specialization,
            img: img,
          };

          fetch("https://safe-shelf-64042.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-accent text-3xl my-4 font-semibold">Add doctors</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="type here"
              className="input input-bordered w-full max-w-md"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="type here"
              className="input input-bordered w-full max-w-md"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Specialization</span>
            </label>
            <select
              {...register("specialization")}
              className="select input-bordered w-full max-w-md"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
            <label className="label">
              {errors.specialization?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.specialization.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-md"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-accent text-white w-full max-w-md"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
