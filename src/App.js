import logo from './logo.svg';
import './App.css';

import Film from './Film';
import PersonalResume from './PersonalResume';
import FavouritePet from './FavouritePet';
import TimeCheck from './TimeCheck';

function App() {

  let movieName = "Scooby-Doo";
  let movieYear = "2004";
  let movieRated = "PG";
  let movieRuntime = "86 min";
  let movieDirector = "Raja Gosnell";
  let movieActors = "Matthew Lillard, Freddie Prinze Jr., Sarah Michelle Gellar,  Linda Cardellini"
  let moviePlot = "The Mystery Inc. gang have gone their separate ways and have been apart for two years, until they each receive an invitation to Spooky Island. Not knowing that the others have also been invited, they show up and discover an amusement park that affects young visitors in very strange ways. Fred, Daphne, Velma, Shaggy and Scooby soon realize that they cannot solve this mystery without help from each other.";
  let moviePicture = "movie.jpg"

  let personalName = "Baranivskyy Yaroslav Dmytrovych";
  let personalPhone = "+380954321278";
  let personalEmail = "baranivskyy.yaroslav2017@gmail.com";
  let personalTown = "Bila Tserkva";
  let personalSkills = "SQL, HTML, CSS, JS, C++, C#, Windows Form, WPF";
  let personalExperience = "A lot!";
  let personalInterests = "cooking, eating, music, outdoor activities, sport, fashion, pets.";

  let petType = "Cat";
  let petBreed = "Sphynx";
  let petOrigin = "Canada";
  let petLifespan = "8-16 years";
  let petWeight = "6 to 12 pounds";
  let petTemperament = "Affectionate, Playful, Vocal";
  let petPicture = "cat.jpg";


  return (
    <div className="App">
      <div className='row'>
        <Film name={movieName}
          year={movieYear}
          rated={movieRated}
          runtime={movieRuntime}
          director={movieDirector}
          actors={movieActors}
          plot={moviePlot}
          image={moviePicture}>
        </Film>

        <PersonalResume name={personalName}
          phone={personalPhone}
          email={personalEmail}
          town={personalTown}
          work={personalExperience}
          skills={personalSkills}
          interests={personalInterests}>
        </PersonalResume>
      </div>

      <div className='row'>
        <FavouritePet type={petType}
          breed={petBreed}
          origin={petOrigin}
          lifespan={petLifespan}
          weight={petWeight}
          temperament={petTemperament}
          image={petPicture}
        ></FavouritePet>

        <TimeCheck></TimeCheck>

      </div>


    </div>
  );
}

export default App;
