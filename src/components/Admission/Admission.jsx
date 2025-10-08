


import "./Admission.css";

const Admission = () => {
  const process = [
    {
      id: "01",
      hed: "Inquiry",
      ppar: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
    },
    {
      id: "02",
      hed: "School Tour",
      ppar: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
    },
    {
      id: "03",
      hed: "Application Form",
      ppar: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
    },
    {
      id: "04",
      hed: "Parent Interview",
      ppar: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
    },
    {
      id: "05",
      hed: "Student Assessment",
      ppar: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
    },
    {
      id: "06",
      hed: "Acceptance",
      ppar: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
    },
  ];

  return (
    <div className="admission">
      {process.map((adm, index) => (
        <div key={index} className="adm">
          <div className="adm-header">
            <span>{adm.id}</span>
          </div>
          <h2>{adm.hed}</h2>
          <p>{adm.ppar}</p>
        </div>
      ))}
    </div>
  );
};

export default Admission;
