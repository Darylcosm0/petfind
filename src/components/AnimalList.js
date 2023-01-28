import React, { useEffect, useState } from "react";
import Animal from "./Animal";
import Search from "./Search";
import Breeds from "./Breeds";
import AnimalDetails from "./AnimalDetails";
function AnimalList() {
  const [allAnimals, setAllAnimals] = useState([])
const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/85a754bf9c1951c51700/animals/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllAnimals(data)
        setAnimals(data);
      });
  }, []);

  function handleSearch(value){
    console.log(animals);
    const updatedAnimals = allAnimals.filter(animal=> animal.breeds.primary.toLowerCase() === value.toLowerCase())
    setAnimals(updatedAnimals)
  }

  function handleClick(e){
    console.log(e.target.alt);
    const updatedAnimals = allAnimals.filter(animal=>animal.type===e.target.alt)
    setAnimals(updatedAnimals)
  }

  
  return (
    <div className="bg-gray">
        <div onClick={handleClick} className="flex justify-center">
        <Breeds breed="Cats" image="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"/>
        <Breeds breed="Dogs" image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jiffpom-attends-the-3rd-annual-reality-tv-awards-at-avalon-news-photo-473261466-1548694593.jpg"/>
        <Breeds breed="Others" image="https://t4.ftcdn.net/jpg/04/41/20/85/360_F_441208550_SiIyWkhCUAzGlIEo021bRKGbM3SMUvuD.jpg"/>
        </div>
        <Search onSearch={handleSearch}/>
      <div className="flex flex-wrap w-3/4 mx-auto">

        {animals.map((animal, index) => {
          let imageUrl = animal.primary_photo_cropped?.small;
          return (
            <Animal
              key={index}
              image={
                imageUrl
                  ? imageUrl
                  : "https://i2-prod.mirror.co.uk/incoming/article9691512.ece/ALTERNATES/s1200b/Main-CatsandDogs.jpg"
              }
              name={animal.name ? animal.name : "Milo"}
              breed={animal.breeds.primary}
            />
          );
        })}
         <AnimalDetails
        animals={allAnimals}
      />
      </div>
    </div>
  );
}

export default AnimalList;
