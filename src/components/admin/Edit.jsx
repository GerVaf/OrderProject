import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  const naviagte = useNavigate();
  const item = location.state;
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [image, setImage] = useState(item.image);

  const createNewItem = async (pdData) => {
    const { data } = await axios.put(
      `http://localhost:3000/products/${item.id}`,
      pdData
    );
  };
  const productData = { name, price, image };
  const updateItem = async () => {
    await createNewItem(productData);
    naviagte("/dashboard");
  };
  return (
    <div>
      <div className="">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-[400px] lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold ">
                Create New Product
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pizza Name</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    placeholder="Image Url"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn main-bg-color font-color"
                    onClick={updateItem}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
