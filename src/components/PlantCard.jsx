function PlantCard({ plant, markAsSoldOut }) {
  return (
    <div className={plant.soldOut ? "plant-card sold-out" : "plant-card"}>
      <img
        src={plant.image}
        alt={plant.name}
      />

      <h2>{plant.name}</h2>

      <p>${plant.price.toFixed(2)}</p>

      {plant.soldOut ? (
        <p className="sold-text">Sold Out</p>
      ) : (
        <button onClick={() => markAsSoldOut(plant.id)}>
          Mark as Sold Out
        </button>
      )}
    </div>
  );
}

export default PlantCard;
