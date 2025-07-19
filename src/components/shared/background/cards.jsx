import backgroundData from "./background_data.js";

export default function Background() {
  return (
    <div className="flex flex-wrap justify-center font-[Montserrat]">
        {backgroundData.schools.map((school) => (
            <div key={school.id} className="p-5 m-5 bg-white rounded-lg shadow-lg w-64 text-center">

                <img src={school.logo} alt={`${school.name} logo`} className="w-32 h-32 mb-4 mx-auto object-cover rounded-full"/>
                
                <h2 className="text-xl font-bold">{school.name}</h2>

                <p>{school.batch}</p>
            </div>
        ))}
    </div>
  );
}
