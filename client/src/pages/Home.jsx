import React from "react";
import AddClientModels from "../components/addClientModels";
import AddProjectModels from "../components/addProjectModel";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModels />
        <AddProjectModels />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
