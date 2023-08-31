import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div
` 
    background-image: url(${props => props.src});
    background-size: cover;
    width: 45vw;
    height: 16vh;
    border-radius: 10px;
    padding: 5px 10px;
    box-shadow: inset 0 -50px 100px -10px rgba(0,0,0,0.80);
    position: relative;

    @media (min-width: 1024px) {
        width: 35vw;
        height: 45vh;
    }
`

const CardHeader = styled.div
`
    h1 { 
        color: #FFF;
        font-size: 14px;
        font-weight: 500;
    }

    height: 22px;
    width: 25%;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 22px;
    background-color: ${props => props.bgColor};
`

const CardContent = styled.div
`
    p { 
        color: #FFF;
        font-weight: 600;
        text-align: left;
        font-size: 18px;       
    }
    width: 90%;
    position: absolute;
    bottom: -5px;
    left: 15px;
`
 
export default class Cards extends Component {
 
    render() {
        return (
            <Card src={this.props.src}>
                <CardHeader bgColor={this.props.bgColor}>
                    <h1>{this.props.title}</h1>
                </CardHeader>
                <CardContent>
                    <p>{this.props.description}</p>
                </CardContent>
            </Card>
        );
    }
}