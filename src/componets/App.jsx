
// import Card from "./Card";
// import sData from "./SData";

// console.log(sData[0]);

// function App() {
//   return (
//     <>
//       <h1 className="heading_style">list top 5 netflix series in 2020</h1>
//       <Card
//         imgsrc={sData[0].imgsrc}
//         title={sData[0].title}
//         sname={sData[0].sname}
//         link={sData[0].link}
//       />
//       <Card
//         imgsrc={sData[1].imgsrc}
//         title={sData[1].title}
//         sname={sData[1].sname}
//         link={sData[1].link}
//       />
//       <Card
//                   imgsrc={sData[2].imgsrc}
//         title={sData[2].title}
//         sname={sData[2].sname}
//         link={sData[2].link}
//       />
//       <Card
//                   imgsrc={sData[3].imgsrc}
//         title={sData[3].title}
//         sname={sData[3].sname}
//         link={sData[3].link}
//       />
//       <Card
//                   imgsrc={sData[4].imgsrc}
//         title={sData[4].title}
//         sname={sData[4].sname}
//         link={sData[4].link}
//       />
//     </>
//   );
// }

// export default App;

// simplified version of cards


import {HeadM} from './Heading';
import Gallery from './Gallery'
function App() {

  return (
    <>
    <HeadM/>
    <Gallery/>
    </>
  );
}

export default App;
