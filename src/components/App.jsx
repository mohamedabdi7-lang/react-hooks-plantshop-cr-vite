import { useEffect, useState } from "react";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  function addPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((plant) => {
        setPlants([...plants, plant]);
      })
      .catch((error) => {
        console.error("Error adding plant:", error);
      });
  }

  function markAsSoldOut(id) {
    const plant = plants.find((plant) => plant.id === id);

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        soldOut: true
      })
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        const updatedPlants = plants.map((plant) => {
          if (plant.id === id) {
            return updatedPlant;
          }

          return plant;
        });

        setPlants(updatedPlants);
      })
      .catch((error) => {
        console.error("Error updating plant:", error);
      });
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🌱 Plantsy</h1>
        <p>Admin Plant Store</p>
      </header>

      <main>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <PlantForm addPlant={addPlant} />

        <PlantList
          plants={filteredPlants}
          markAsSoldOut={markAsSoldOut}
        />
      </main>
    </div>
  );
}

export default App;
