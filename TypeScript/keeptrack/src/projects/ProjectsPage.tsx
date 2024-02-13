import React, { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

// interface PersonBioData {
//   name: string;
//   age: number;
// }

// interface Person {
//   name: string;
//   id: number | string;
//   age: number;
//   isMarried?: boolean;
//   children?: PersonBioData;
//   friend?: PersonBioData[];
// }

// const dataobj: Person[] = [
//   {
//     name: "Devangi",
//     id: 26,
//     age: 21,
//     isMarried: false,
//   },
//   {
//     name: "Mahek",
//     id: "32",
//     age: 21,
//   },

//   {
//     name: "Chintan",
//     id: "red12",
//     age: 21,
//     isMarried: true,
//   },
// ];
// interface newdata {
//   key1: newdata[];
//   key2: Person[];
//   key3: "yes" | "no";
// }

// const newObj2: newdata = {
//   key2: [dataobj],
//   key3: "no",
// };
// console.log({ dataobj });
const ProjectsPage = () => {
  return (
    <div>
      <h1>Project</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
      <ProjectList projects={MOCK_PROJECTS} />
    </div>
  );
};

export default ProjectsPage;
