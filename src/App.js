import React from "react";
import "./App.css";
import { List, ProfileCard } from "./components";

const App = () => {
  const pets = [
    {
      id: "1",
      name: "Lucky",
      stats: [{ species: "Cat" }, { breed: "Domestic Short Hair" }],
      aboutMe: "I was found on Lee Ben Rd in Kingsville, MD",
      imageUrl:
        "//bcgis.baltimorecountymd.gov/LostAdoptPetService/GetPetImageAsJpeg/20190317/A01000001292915MGIH52641O4OQ3F/lucky.PNG"
    }
  ];

  return (
    <div className="profile-card-list">
      <List
        dataSource={pets}
        renderItem={pet => <ProfileCard key={pet.id} {...pet} />}
      />
    </div>
  );
};

export default App;
