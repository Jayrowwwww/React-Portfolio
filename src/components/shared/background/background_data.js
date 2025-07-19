// Import images
import logo1 from '../../../assets/_imgs/logo/aes.jpg';
import logo2 from '../../../assets/_imgs/logo/cccs.jpg'; 
import logo3 from '../../../assets/_imgs/logo/cpc.jpg';

// Define the data object
const backgroundData = {
  schools: [
    {
      id: 1,
      name: "Alegria Elementary School",
      location: "Alegria, Cordova, Cebu",
      batch: "Batch 2018",
      logo: logo1
    },
    {
      id: 2,
      name: "Cordova Catholic Cooperative School",
      location: "Poblacion, Cordova, Cebu",
      batch: "Batch 2024",
      logo: logo2
    },
    {
      id: 3,
      name: "Cordova Public College",
      location: "Gabi, Cordova, Cebu",
      batch: "Present",
      logo: logo3
    }
  ]
};

// ✅ Export the object itself (not calling it)
export default backgroundData;
