import React from 'react'
import './edu.scss'
const eduList = [
      {
      title: "Conestoga College Institute of Technology and Advanced Learning",
      course: "PostGrad Diploma Certification in Computer Application Development",
      grade: "3.85/4",
      image: "https://www.ebmag.com/wp-content/uploads/2023/11/Conestoga-Skilled-Trades-Cambridge-NOV2023-55803.jpeg"
    },
    {
      title: "Conestoga College Institute of Technology and Advanced Learning",
      course: "PostGrad Diploma Certification in Business Analytics",
      grade: "3.73/4",
      image: "https://www.ebmag.com/wp-content/uploads/2023/11/Conestoga-Skilled-Trades-Cambridge-NOV2023-55803.jpeg"
    },
    {
      title: "Mumbai University",
      course: "Bachelor of Engineering in Computer Science",
      grade: "7.1/10",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdwBelWplaDSIan6Fy-lELvYPZ_5EgD9BzA&s"
    }
];
const Education = () => {
  return (
    <div className='container sectionEven eduWrapper' id='education'>
      <div className='main-heading'>
        <h2>Education</h2>
        {eduList.map((item,index) => (
        <div className="row eduCard" key={index}>
          <div className="cardImage">
            <img src={item.image} alt="Conestoga College"/>
          </div>
          <div className="cardContent">
            <h5>
              {item.title}
              </h5>
              <h6>
              {item.course}
              </h6>
              <p>{item.grade}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Education
