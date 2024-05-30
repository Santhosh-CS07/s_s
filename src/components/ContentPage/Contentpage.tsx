import React from "react";
import ContentCard from "../ContentCard/Contentcard";
import QuestionInput from "../QuestionInput/QuestionInput";
import UserPost from "../ContentCard/Contentcard";

const Contentpage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid">
        <UserPost
          title="Sample Post with Video"
          content="This is a sample post content with a video."
          media={{ type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        />
        <UserPost
          title="Sample Post"
          content="This is a sample post content with an image."
          media={{ type: 'image', url: 'https://via.placeholder.com/400' }}
        />



      </div>
    </div>
  );
};

export default Contentpage;
