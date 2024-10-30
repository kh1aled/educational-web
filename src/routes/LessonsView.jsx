import { div } from "framer-motion/client";
import React from "react";
import { useParams } from "react-router-dom";
import GamesView from "../Components/GamesView/GamesView";

const LessonsView = () => {
  const { id } = useParams();
  return (
    <div className="lessonViewContainer  w-100 h-100 overflow-hidden">
        <GamesView/>
    </div>
  );
};

export default LessonsView;
