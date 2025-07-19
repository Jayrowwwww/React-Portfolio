import Project_Cards from "../components/shared/projects/Project_cards";

export default function Projects() {
  return (
    <div className="flex flex-col items-center py-5 mt-20 h-screen w-[90%]" id="2">
      <h1 className="text-left text-4xl text-gray-400 font-[Montserrat]">- PROJECTS</h1>
      <div className="bg-slate-900 rounded-4xl overflow-auto p-6 mt-10">
        <Project_Cards />
      </div>
    </div>
  );
}
