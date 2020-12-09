import React, { useState, useEffect } from 'react'
import {Arrow} from './Arrow.js'
import '../css/header.css'

export function Header() {
    const [arrow, setArrow] = useState("")
    function typeWriter() {
        const txt = "Nice to meet you, internet stranger! I'm Charles Wang"
        const speed = 50
        var i = 0;
        function write() {
            if (i < txt.length) {
                document.getElementById("intro-text").innerHTML += txt.charAt(i);
                setTimeout(write, speed);
                i++;
            } else {
                const svg_element = (
                    <Arrow target="experience-header" direction="down"/>
                )
                setArrow(svg_element)
            }
        }
        write();
    }
    useEffect( () => {
        typeWriter();
        return () => {
            document.getElementById("intro-text").innerHTML = "";
        }
    }, []);
    return(
        <div id="header-container">
            <div id="img-container">
                <img id="header-img" src="header.png"/>
            </div>
            <p id="intro-text"></p>
            <svg className="arrow">
                {arrow}
            </svg>
        </div>
    )
}