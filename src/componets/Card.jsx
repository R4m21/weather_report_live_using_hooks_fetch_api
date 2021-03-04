

// props jo Card ke function as paramter pas kiye hai ,vo ab object form me show hog jo hamne card ke tag me custom attribute jo create kiya hai
// props means "JXS properties for HTML attribute"
// props as a object ki tarah use krenge is form me -> {props.imgsrc}
// jaruri nhi hai ki hum " props " hi likhe kuch or bhi nam suggest kr sakte hai jese mene parameter me mani pass kiya hu --> Card(mani) but jaha bhi use krnge is function ke under use {mani.custom_attribute}

// function Card(mani) {
//   console.log(mani);
//   return <img src={mani.imgsrc} alt="myPic" className="card_img" />
// }

// function Fun_name() se ham new HTML elemnt create kr sakte hai
// <Fun_name/> ye use kr sakte hai HTML element
// function Fun_name(props) se hum new custom attribut create kr sakte hai
// <Fun_name imgsrc="URL"/> -->hum ne imgsrc ye new custom atribute banya hai us ham props ki madad se use handle karenge
// function create karete to function name hamesh funtion pahela leter capital me hona chahiye
import "../style/card.css";
import Head from './Heading'
import Image from './Image'
function Card(props) {
    // console.log(props);
    return (
        <div className="cards">
          <div className="card">
            <Image imgsrc={props.imgsrc}/>
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <Head sname={props.sname}/>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
    );
  }

  export default Card;