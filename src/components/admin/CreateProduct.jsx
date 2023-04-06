import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createNewItem = async (pdData) => {
    const { data } = await axios.post("http://localhost:3000/products", pdData);
  };
  const productData = { name, price, image };
  const createItem = async () => {
    await createNewItem(productData);
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
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    placeholder="Image Url"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn main-bg-color font-color"
                    onClick={createItem}
                  >
                    Create
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

export default CreateProduct;
