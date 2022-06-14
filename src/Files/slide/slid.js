import React, {useState} from "react";


export default function Slid (props) {
    const [images, setImages] = useState([
        "https://cdn.pixabay.com/photo/2022/05/27/06/34/tre-cime-di-lavaredo-7224478__340.jpg",
        "https://cdn.pixabay.com/photo/2021/07/24/10/24/dewdrops-6489287__340.jpg",
        "https://cdn.pixabay.com/photo/2022/05/24/16/11/berlin-7218821__340.jpg",
        "https://cdn.pixabay.com/photo/2021/11/26/12/45/lemon-6825808__340.jpg",
        "https://cdn.pixabay.com/photo/2022/05/22/17/36/placa-despanya-7214152__340.jpg",
      ]);


      return (
          <>
          <img src={images.find((e, i) => props.index === i ? <img src={e}/> : 'no')}/>
          </>
      )
}