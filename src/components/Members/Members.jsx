import './Members.css'; 
import { MdEmail} from 'react-icons/md';

const membersData = [
    {
      image: "/assets/images/mem1.png", 
      name: "Ms. Sarah Anderson",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
      image: "/assets/images/mem2.png ", 
      name: "Mr. David Roberts",
      qualification: "Master's Degree in Elementary Education",
      description: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      image: "/assets/images/mem3.png", 
      name: "Ms. Emily Hernandez",
      qualification: "Diploma in Child Psychology",
      description: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring attitude fosters a strong sense of belonging and confidence in her students.",
    },
    {
      image: "/assets/images/mem4.png", 
      name: "Mr. Michael Turner",
      qualification: "Bachelor's Degree in Physical Education",
      description: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    },
    {
      image: "/assets/images/mem5.png" ,
      name: "Ms. Jessica Lee",
      qualification: "Master's Degree in Special Education",
      description: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    },
    {
      image: "/assets/images/mem6.png", 
      name: "Mr. William Parker",
      qualification: "Bachelor's Degree in Fine Arts",
      description: "Mr. William's background in fine arts brings creativity and imagination to his lessons. He encourages self-expression and self-confidence in his students through various artistic mediums.",
    },
  ];

const MemberCard = ({ member }) => (
  <div className="member-card">
    <div className="member-header">
      <img src={member.image} alt={member.name} className="member-image" />
      <h3>{member.name}</h3>
  
      <MdEmail className="icon" />
    </div>
    <div className="member-info">
      <h4>Qualification: {member.qualification}</h4>
      <p>{member.description}</p>
    </div>
  </div>
);

const Members = ({ members = membersData }) => {
  return (
    <div className="members-container">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default Members;