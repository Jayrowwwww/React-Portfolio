import backgroundData from "./background_data.js";


export default function Background() {
  return (
    <div className="flex flex-col text-white flex-wrap justify-center font-[Montserrat]">
        {backgroundData.schools.map((school) => (
            <div key={school.id} className="relative flex items-center justify-between p-5 m-5 bg-gray-600 rounded-lg shadow-lg text-center">
                <div className="absolute inset-0">
                    <img src={school.background} alt={`${school.name} background`} className="w-full h-full object-cover rounded-lg opacity-50"/>
                </div>

                <img src={school.logo} alt={`${school.name} logo`} className="w-32 h-32 mb-4 mx-auto object-cover rounded-full z-1" />
                
                <div className="z-1 w-[80%]">
                  <h2 className="text-xl font-bold ">{school.name}</h2>
                  <h3>{school.location}</h3>
                  <p className="">{school.batch}</p>
                </div>
            </div>
        ))}
    </div>
  );
}
