import React from "react";
import "../assets/scss/style.scss";
import { ProjectComponent } from "../components/Projects/ProjectComponent";
export const PROJECTS = (props) => {
  return (
    <ProjectComponent projects={props.projects} />
  );
};
