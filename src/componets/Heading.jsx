import React from 'react';
import Dt from './Date';
import sData from "./SData";

function Head(props){
    return <h3 className="card_title"> {props.sname} </h3>
}

const HeadM = () => <h1 className="heading_style"> list top {sData.length} netflix series in {Dt.getFullYear()}</h1>;

export default Head;
export {HeadM};