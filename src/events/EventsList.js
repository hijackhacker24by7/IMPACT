import React from 'react';

const cardClasses = "bg-card p-4 rounded-lg shadow-lg flex flex-col items-center justify-center";
const textClasses = "text-muted-foreground";

export default function EventsList(){

  return (
    <div className="absolute left-96 bottom-5 top-20">
      <section>
        <h1 className="text-3xl font-bold mb-4">Unstop Pro Coding</h1>
        <p className={textClasses + " mb-8"}>Learn fundamental and advanced concepts of high-demand programming languages with ease!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            imgSrc="https://placehold.co/150?text=C"
            altText="C Programming"
            title="C Programming"
            lessons="6 Lessons"
            description="This comprehensive C language course is designed for you, regardless of your..."
          />
          <Card
            imgSrc="https://placehold.co/150?text=BC"
            altText="Basic Coding in C"
            title="Basic Coding in C"
            lessons="2 Lessons"
            description="This course is designed for beginners in programming. It focuses..."
          />
          <Card
            imgSrc="https://placehold.co/150?text=IC"
            altText="Intermediate Coding in C"
            title="Intermediate Coding in C"
            lessons="5 Lessons"
            description="The Intermediate Coding in C is tailored for you with a basic coding..."
          />
          <Card
            imgSrc="https://placehold.co/150?text=DSA"
            altText="DSA in C"
            title="DSA in C"
            lessons="11 Lessons"
            description="Data Structures and Algorithms (DSA) in C is a fundamental course that explores..."
          />
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mt-10 mb-4">Aptitude</h1>
        <p className={textClasses + " mb-8"}>Give yourself the best preparation to clear pre-assessment rounds and competitive exams.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            imgSrc="https://placehold.co/150?text=VR"
            altText="Visual Reasoning"
            title="Visual Reasoning"
            lessons="7 Lessons"
            description="Visual Reasoning is a cognitive skill centered around comprehending and..."
          />
          <Card
            imgSrc="https://placehold.co/150?text=VR"
            altText="Verbal Reasoning"
            title="Verbal Reasoning"
            lessons="8 Lessons"
            description="Elevate your advanced verbal reasoning skills for success in academics..."
          />
          <Card
            imgSrc="https://placehold.co/150?text=EW"
            altText="Essay Writing"
            title="Essay Writing"
            lessons="11 Lessons"
            description="A course in educational program that aims to impart knowledge and..."
          />
          <Card
            imgSrc="https://placehold.co/150?text=PT"
            altText="Psychometric Test"
            title="Psychometric Test"
            lessons="3 Lessons"
            description="Psychometric Test assesses an individual's behavioral, emotional, and cognitive..."
          />
        </div>
      </section>
    </div>
  );
};

const Card = ({ imgSrc, altText, title, lessons, description }) => {
  return (
    <a href="Eventd_details" className={cardClasses}>
      <img src={imgSrc} alt={altText} className="mb-4" />
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className={textClasses}>{lessons}</p>
      <p className={textClasses}>{description}</p>
    </a>
  );
};


