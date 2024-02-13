import React,{useState} from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";


interface ProjectListProps {
  projects: Project[];
}   

const ProjectList = ({ projects }: ProjectListProps) => {
    const [isEdited, setIsEdited] = useState({})
//   console.log(projects);
  const handleEdit = (project: Project) => {
      setIsEdited(project)
      // console.log(project)
  }

console.log(isEdited)
      return (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="cols-sm">
             {/* <ProjectCard project = {project} onEdit={handleEdit}/>
             <ProjectForm/> */}
             {project === isEdited ? (
              <ProjectForm/>
             ) : (
              <ProjectCard project = {project} onEdit={handleEdit}/>
             )}
            </div>
          ))}
        </div>
      );

    
};

export default ProjectList;
