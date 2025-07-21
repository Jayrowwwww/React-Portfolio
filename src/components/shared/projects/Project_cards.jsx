import project_data from "./projects_data";

export default function ProjectCards() {
  return (
    <div className="flex gap-10 flex-col font-[Montserrat]">
      {project_data.map((project) => (
        <div key={project.id} className="flex justify-between w-full h-93 bg-gray-300/30 outline-5 outline-gray-100/60 rounded-3xl p-4">
          <img src={project.image} alt={project.title} className="w-200 object-contain" />
          <div className="p-4 flex flex-col w-1/2">
            <h2 className="text-3xl text-blue-400 font-bold mt-2">{project.title}</h2>
            <p className="text-gray-200 mt-5">{project.description}</p>

            <div className="flex mt-2">
              {project.tools.map((tool, index) => (
                <span key={index} className="text-white text-sm bg-blue-500 rounded-full px-3 py-1 mr-2 mt-2 cursor-pointer hover:bg-blue-600 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
