"use client";
import React from "react";

const Departmentfilter = () => {
  const departments: string[] = [
    "Engineering",
    "Marketing",
    "Human Resources",
    "Finance",
    "Sales",
    "Information Technology",
    "Customer Service",
    "Operations",
    "Research and Development",
    // "Legal",
    // "Procurement",
    "Quality Assurance",
    "Logistics",
    "Corporate Strategy",
    "Public Relations",
    "Facilities Management",
    "Risk Management",
    "Health and Safety",
    "Training and Development",
    "Product Management",
    "Compliance",
    "Business Development",
    "Administration",
    "Security",
    // "Internal Audit",
    "Project Management",
    "Communications",
    // "Supply Chain Management",
    "Content Creation",
    // "Event Planning",
    "Social Media",
    "Investor Relations",
    "Environmental Health and Safety",
    "Graphic Design",
    "UX/UI Design",
    "Data Analytics",
    // "Customer Experience",
    // "Community Relations",
    // "Corporate Social Responsibility",
    // "Sustainability",
    // "Innovation",
    // "Change Management",
    // "Talent Acquisition",
    // "Employee Engagement",
    // "Compensation and Benefits",
    // "Diversity and Inclusion",
    // "Brand Management",
    // "E-commerce",
    // "Digital Marketing",
    // "Cloud Computing",
    // "Software Development",
    // "Network Administration",
    // "Technical Support",
    // "Architecture",
    // "Construction",
    // "Maintenance",
    // "Real Estate",
    // "Manufacturing",
    // "Production",
    // "Warehousing",
    // "Retail",
    // "Healthcare",
    // "Education",
    // "Entertainment",
    // "Hospitality",
    // "Tourism",
    // "Transportation",
    // "Agriculture",
    // "Forestry",
    // "Fishing",
    // "Mining",
    // "Energy",
    // "Utilities",
    // "Telecommunications",
    // "Media",
    // "Publishing",
    // "Advertising",
    // "Arts and Culture",
    // "Sports and Recreation",
    // "Nonprofit",
    // "Government",
    // "Military",
    // "Law Enforcement",
    // "Emergency Services",
    // "Pharmaceuticals",
    // "Biotechnology",
    // "Chemicals",
    // "Food and Beverage",
    // "Textiles",
    // "Apparel",
    // "Automotive",
    // "Aerospace",
    // "Defense",
    // "Marine",
    // "Insurance",
    // "Banking",
    // "Investment",
    // "Real Estate Development",
    // "Venture Capital",
    // "Private Equity",
    // "Public Administration",
    // "Library and Information Science",
    // "Museums and Galleries",
    // "Culinary Arts",
    // "Performing Arts",
    // "Writing and Editing",
    // "Translation and Interpretation",
    // "Research Institutes",
    // "Consulting",
    // "Freelance",
    // "Entrepreneurship",
    // "Startups",
    // "Franchising",
    // "Family Business",
    // "Import and Export",
    // "Wholesaling",
    // "Auctioneering",
    // "Crafts",
    // "Antiques and Collectibles",
    // "Photography",
    // "Videography",
    // "Broadcasting",
    // "Animation",
    // "Game Development",
    // "Virtual Reality",
    // "Augmented Reality",
    // "Robotics",
    // "Artificial Intelligence",
    // "Machine Learning",
    // "Blockchain",
    // "Cryptocurrency",
    // "Fintech",
    // "Edtech",
    // "Healthtech",
    // "Medtech",
    // "Greentech",
    // "Proptech",
    // "Legaltech",
    // "Regtech",
    // "Sportstech",
    // "Traveltech",
    // "Foodtech",
    // "Agtech",
    // "Biotech",
    // "Clean Energy",
    // "Smart Cities",
    // "Space Exploration",
    // "Quantum Computing",
    // "Nanotechnology",
    // "Material Science",
    // "Genomics",
    // "Bioinformatics",
    // "Astrobiology",
    // "Cybersecurity",
    // "Forensics",
    // "Criminology",
    // "Sociology",
    // "Anthropology",
    // "Psychology",
    // "Linguistics",
    // "Philosophy",
    // "Theology",
    // "Religious Studies",
    // "Political Science",
    // "International Relations",
    // "Economics",
    // "History",
    // "Geography",
    // "Archaeology",
    // "Classics",
    // "Literature",
    // "Poetry",
    // "Drama",
    // "Film Studies",
    // "Musicology",
    // "Art History",
    // "Aesthetics",
    // "Ethics",
    // "Metaphysics",
    // "Epistemology",
    // "Logic",
    // "Analytic Philosophy",
    // "Continental Philosophy",
    // "Philosophy of Science",
    // "Philosophy of Mind",
    // "Philosophy of Language",
    // "Philosophy of Religion",
    // "Political Philosophy",
    // "Social Philosophy",
    // "Philosophy of Law",
    // "Philosophy of Education",
    // "Philosophy of History",
    // "Philosophy of Technology",
    // "Philosophy of Art",
    // "Philosophy of Literature",
    // "Philosophy of Music",
    // "Philosophy of Mathematics",
    // "Philosophy of Physics",
    // "Philosophy of Biology",
    // "Philosophy of Medicine",
    // "Philosophy of Economics",
    // "Philosophy of Psychology",
    // "Philosophy of Sociology",
    // "Philosophy of Anthropology",
    // "Philosophy of Geography",
    // "Philosophy of Archaeology",
    // "Philosophy of Classics",
    // "Philosophy of Linguistics",
    // "Philosophy of Logic",
    // "Philosophy of Ethics",
    // "Philosophy of Metaphysics",
    // "Philosophy of Epistemology",
    // "Philosophy of Aesthetics",
    // "Philosophy of Political Science",
    // "Philosophy of International Relations",
    // "Philosophy of Economics",
    // "Philosophy of History",
    // "Philosophy of Geography",
    // "Philosophy of Archaeology",
    // "Philosophy of Classics",
    // "Philosophy of Linguistics",
    // "Philosophy of Logic",
    // "Philosophy of Ethics",
    // "Philosophy of Metaphysics",
    // "Philosophy of Epistemology",
    // "Philosophy of Aesthetics"
  ];

  return (
    <div className="flex flex-wrap max-h-[72vh] overflow-y-auto">
      {departments.map((department: string, index: number) => (
        <div className="flex items-center mr-4 mb-2" key={index}>
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
            style={{ borderColor: '#3B82F6' }}
          />

          <label htmlFor={`checkbox-${index}`} className="ml-2 text-sm">
            {department}
          </label>
        </div>
      ))}
    </div>
  )
};

export default Departmentfilter;
