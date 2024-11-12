import Marks from "./Marks"

const DisplayMarks = () => {
    const students =[{m1: 87, m2:97,m3:95},
    {m1: 67, m2:77,m3:75},
    {m1: 77, m2:87,m3:85},
    {m1: 57, m2:67,m3:65},
    ];
  return (
    <>
        {students.map((student,index) => (
            <Marks key={index} m1={student.m1} m2={student.m2} m3={student.m3}/>
        ))}
        
    </>
  );
  }


export default DisplayMarks