import React from "react";
import ContentCard from "../ContentCard/Contentcard";
import QuestionInput from "../QuestionInput/QuestionInput";

const Contentpage = () => {
  return (
    <div className="container mx-auto">
      {/* <div className="fixed md:block "> */} <QuestionInput />
      {/* </div> */}
      <div className="grid">
        <ContentCard
          title="Struggling with Complex Programming Concepts"
          content="Break down concepts into smaller parts, seek help from professors or classmates, and practice coding regularly to grasp complex programming concepts."
        />
        <ContentCard
          title="Trouble Finding Internship Opportunities"
          content="Attend career fairs, networking events, and utilize online platforms to find internship opportunities in computer science."
        />
      </div>
    </div>
  );
};

export default Contentpage;
