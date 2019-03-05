import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding-top: 25px;
`;

export default class Dashboard extends Component {
    render () {
      return (
        <div>
            <ButtonContainer>
                <Button 
                    variant='danger' 
                    size='lg' 
                    style={{ maginBottom: '10px' }} 
                    onClick={this.props.callStrike} 
                    data-test-id='strike-btn'
                >
                    Strike!
                </Button>
                <Button 
                    variant='secondary' 
                    size='lg' 
                    style={{ maginBottom: '10px' }} 
                    onClick={this.props.callBall} 
                    data-test-id='ball-btn'
                >
                    Ball!
                </Button>
                <Button 
                    variant='warning' 
                    size='lg' 
                    style={{ maginBottom: '10px' }} 
                    onClick={this.props.callFoul} 
                    data-test-id='foul-btn'
                >
                    Foul!
                </Button>
                <Button 
                    variant='success' 
                    size='lg' 
                    style={{ maginBottom: '10px' }} 
                    onClick={this.props.callHit} 
                    data-test-id='hit-btn'
                >
                    Hit!
                </Button>
            </ButtonContainer>
        </div>
      );
    } //render
} //component