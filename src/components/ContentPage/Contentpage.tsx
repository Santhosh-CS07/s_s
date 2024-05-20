import React from "react";
import ContentCard from "../ContentCard/Contentcard";
const Contentpage = () => {
  return (
    <div>
      <ContentCard
        title="Difficulty Understanding Algorithms"
        content="Offer extra practice problems, seek help from professors or online resources, and join study groups to discuss and understand algorithms better."
      />
      <ContentCard
        title="Difficulty Managing Time Effectively"
        content="Use time management tools, create a study schedule, prioritize tasks, and eliminate distractions to manage time effectively."
      />
      <ContentCard
        title="Struggling with Complex Programming Concepts"
        content="Break down concepts into smaller parts, seek help from professors or classmates, and practice coding regularly to grasp complex programming concepts."
      />
      <ContentCard
        title="Trouble Finding Internship Opportunities"
        content="Attend career fairs, networking events, and utilize online platforms to find internship opportunities in computer science."
      />
      <ContentCard
        title="Feeling Overwhelmed by Coursework"
        content="Break tasks into smaller, manageable parts, practice self-care, and seek support from friends, family, or counseling services to cope with overwhelming coursework."
      />
      <ContentCard
        title="Lack of Motivation in Programming Assignments"
        content="Set achievable goals, reward yourself for progress, and find inspiration from coding communities or successful programmers to stay motivated in programming assignments."
      />
    </div>
  );
};

export default Contentpage;
