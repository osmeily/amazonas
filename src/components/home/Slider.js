import React, {  useState } from 'react'
import styled from 'styled-components'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import "../../styles/slider.css"



const StyledSlider = styled.section`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 300px;
overflow: hidden;

`

const StyledImg = styled.div`
    cursor: pointer;
    margin-top: 300px;
`


const Slider = () => {

    const [slider, setSlider] = useState(0)

    const imgArray = [
        {
            "img": "https://m.media-amazon.com/images/I/61IUQBqfQ1L._SX3000_.jpg",
            "id": 1
        }
        ,
        {
            "img": "https://m.media-amazon.com/images/I/61uIjme4x8L._SX3000_.jpg",
            "id" : 2
        },
        {
            "img" :  "https://m.media-amazon.com/images/I/61tX6L542kL._SX3000_.jpg",
            "id" : 3
        },
        {
            "img" :  "https://m.media-amazon.com/images/I/61DCztVDLCL._SX3000_.jpg",
            "id" : 4
        },
        {
            "img" :  "https://m.media-amazon.com/images/I/61UQQeoWdvL._SX3000_.jpg",
            "id" : 5
        }
    ]


    const nextSlide = () => {
        setSlider(slider === 4 ? 0 : slider +1)
        console.log(slider)
    }

    const prevSlide = () => {
        setSlider(slider === 0 ? 4 : slider -1)
        console.log(slider)
    }

    return (
        <StyledSlider>

            <FaArrowAltCircleLeft style={{ position: 'absolute', top: "50%", left : "32px", fontSize: "2rem", color: "#FFFFFF", zIndex: "10", cursor: "pointer", userSelect: "none"}} onClick={prevSlide}/>

            <FaArrowAltCircleRight style={{ position: 'absolute', top: "50%", right: "32px", fontSize: "2rem", color: "#FFFFFF", zIndex: "10", cursor: "pointer", userSelect: "none" }} onClick={nextSlide}/>
        {
            imgArray.map((img, index) => {
        return (
            
            <StyledImg className={index===slider ? 'img active' : 'img'} key={index}>
            
            {index === slider && (<img src={img.img} alt=""/>)}
            
            </StyledImg>
        )
        }
    )
}
    </StyledSlider>
    )
}


export default Slider
