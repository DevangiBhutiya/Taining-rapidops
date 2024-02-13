import React from "react";
import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void
}

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + "...";
};
const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {

const handleClick = (projectBeingEdited: Project) => {
  onEdit(projectBeingEdited);
    // console.log(projectBeingEdited.id)
}
  return (
    <div>
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
        <section className="section dark">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
          <button className="bordered" onClick={()=> handleClick(project)}>
          <span className="icon-edit "></span>
          Edit
        </button>
        </section>
       
      </div>
    </div>
  );
};

export default ProjectCard;