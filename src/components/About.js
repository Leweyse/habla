import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring'

function AboutBgBox() {
    const props = useSpring({
        from: {
            left: Math.floor(Math.random() * 90) + 'vw',
            top: Math.floor(Math.random() * 80) + 'vh'
        },
        to: async next => {
            while (1) {
                await next({
                    left: Math.floor(Math.random() * 90) + 'vw',
                    top:  Math.floor(Math.random() * 80) + 'vh'
                })
            }
        },
        config:  {
            mass: 5,
            tension: 80,
            friction: 40
        }
    })

    return <animated.div className="home__bg--box" style={props} />
}

function AboutBg() {
    const aboutBoxTotal = 5;
    const aboutArrayBox = []

    for (let i = 0; i < aboutBoxTotal; i++) {
        aboutArrayBox.push(<AboutBgBox key={i}/>)
    }

    return (
        <div className='home__bg'>
            {aboutArrayBox}
            <Link to={'./list'}>
                <div className="home__nameProject" variant='raised'>
                    <span>f</span>
                    <span>u</span>
                    <span>n</span>
                    <span>H</span>
                    <span>H</span>
                </div>
            </Link>
            <hr className="home__floor"></hr>
        </div>
    );
}

class About extends Component {
    render() {
        return (
            <div className="home_body body">
                <AboutBg />
            </div>
        );
    }
}
export default About;
