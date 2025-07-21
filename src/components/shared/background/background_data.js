// Import images
import logo1 from '../../../assets/_imgs/logo/aes.jpg';
import logo2 from '../../../assets/_imgs/logo/cccs.jpg'; 
import logo3 from '../../../assets/_imgs/logo/cpc.jpg';
import AesBack from "../../../assets/_imgs/aesback.jpg"
import CCCSback from "../../../assets/_imgs/cccsback.jpg"
import CPCback from "../../../assets/_imgs/cpcback.jpg"

// Define the data object
const backgroundData = {
  schools: [
    {
      id: 1,
      name: "Alegria Elementary School",
      location: "Alegria, Cordova, Cebu",
      batch: "Batch 2018",
      logo: logo1,
      background: AesBack
    },
    {
      id: 2,
      name: "Cordova Catholic Cooperative School",
      location: "Poblacion, Cordova, Cebu",
      batch: "Batch 2024",
      logo: logo2,
      background: CCCSback
    },
    {
      id: 3,
      name: "Cordova Public College",
      location: "Gabi, Cordova, Cebu",
      batch: "Present",
      logo: logo3,
      background: CPCback
    }
  ]
};

// ✅ Export the object itself (not calling it)
export default backgroundData;
