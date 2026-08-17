import PlantCard from "./PlantCard";

function PlantList({ plants, markAsSoldOut }) {
  return (
    <section>
      <h2>All Plants</h2>

      {plants.length === 0 ? (
        <p>No plants found.</p>
      ) : (
        <div className="plant-list">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              markAsSoldOut={markAsSoldOut}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PlantList