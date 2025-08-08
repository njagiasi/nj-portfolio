import React from "react";
import PublicationCard from "../../Helpers/PublicationCard";
// import BottomSection from '../../Helpers/BottomSection';
import "./pp.scss";

const publications = [
  {
    imgSrc: "https://njagiasi.github.io/My-Portfolio/img/pp1.jpeg",
    title:
      "ACHIEVING DATA GOVERNANCE FUNCTIONALITIES USING GOOGLE CLOUD AND APPS",
    description:
      "This paper deals with structuring abundant unstructured data on Google cloud using Google technologies...",
    link: "https://ijacen.iraj.in/paper_detail.php?paper_id=8314&name=Achieving_Data_Governance_functionalities_using_Google_Cloud_and_Apps",
  },
  {
    imgSrc: "https://njagiasi.github.io/My-Portfolio/img/pp2.jpg",
    title: "APPLICATION OF GOOGLE CLOUD AND GOOGLE APPS IN DATA STRUCTURING",
    description:
      "This paper presents the way of using Google cloud services and google apps in ordered to obtain uniform good quality data that can be further used for analysis purpose.",
    link: "http://www.iosrjournals.org/iosr-jce/papers/Vol19-issue1/Version-2/D1901022328.pdf",
  },
];

const PPComponent = () => {
  return (
    <div className="publicationData container" id="paper-publications">
      <div className="main-heading">
        <h2>My Publications</h2>
      </div>
      <div className="publicationItems">
        {publications.map((pub, index) => (
          <PublicationCard key={index} {...pub} />
        ))}
      </div>

      {/* <BottomSection /> */}
    </div>
  );
};

export default PPComponent;
