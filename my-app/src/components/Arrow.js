import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

export function Arrow(props) {
    var arrow;
    if (props.direction == "down") { // down arrow
        arrow = (<path d="M0 0 L60 30 L120 0"></path>)
    } else { // up arrow
        arrow = (<path d="M0 30 L60 0 L120 30"></path>)
    }
    return (
    <React.Fragment>
        <Link 
            to={props.target}
            smooth={true}
            duration={500}
        >
            {arrow}
        </Link>   
    </React.Fragment>
    )
}