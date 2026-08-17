import { useState } from "react";

function PlantForm({ addPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newPlant = {
      name: name,
      image: image,
      price: Number(price),
      soldOut: false
    };

    addPlant(newPlant);

    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <section className="form-section">
      <h2>Add a New Plant</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Plant Name</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image URL</label>

          <input
            id="image"
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>

          <input
            id="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>

        <button type="submit">
          Add Plant
        </button>
      </form>
    </section>
  );
}

export default PlantForm;
