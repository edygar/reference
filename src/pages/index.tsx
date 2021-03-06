import React from "react";
import dynamic from "next/dynamic";
import { Settings } from "@components/Settings";
import GitHubCorners from "react-github-corner";

const Scene = dynamic(() => import("@components/ModelLoader/ModelLoader"), {
  ssr: false,
});

export default function App() {
  return (
    <div className="wrapper">
      <Settings />
      <div className="container">
        <Scene />
      </div>
      <GitHubCorners
        direction="right"
        href="https://github.com/ritz078/reference"
        bannerColor={"#333"}
      />
    </div>
  );
}
