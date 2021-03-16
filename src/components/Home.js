import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring'

function HomeBgBox() {
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
            mass: 1,
            tension: 170,
            friction: 26
        }
    })

    return <animated.div className="home__bg--box" style={props} />
}

function HomeBg() {
    const homeBoxTotal = 5;
    const homeArrayBox = []

    for (let i = 0; i < homeBoxTotal; i++) {
        homeArrayBox.push(<HomeBgBox key={i}/>)
    }

    return (
        <div className='home__bg'>
            {homeArrayBox}
            <Link to={'./list'}>
                <div className="home__nameProject" variant='raised'>
                    <span>h</span>
                    <span>a</span>
                    <span>b</span>
                    <span>l</span>
                    <span>a</span>
                </div>
            </Link>
            <hr className="home__floor"></hr>
        </div>
    );
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { user: {} }
    }

    componentDidMount() {
        fetch('/api/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            return res.json()
        }).then(user => {
            this.setState({user: user})
        }).catch( err => {
            console.log(err)
        })
    }

    render() {
        let username = this.state.user.username
        return (
            <div className="home_body body">
                <HomeBg />
                {username}
            </div>
        );
    }
}
export default Home;
