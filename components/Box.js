import React from 'react';
import styled, {css} from  'styled-components';

const Box = styled.div`
  width: 33%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  color: white;
  padding: 18px;
  border-radius: 10px;
  font-size: 0.6rem;
  text-align: center;
  // background-color: #192f5a;
  transition: ease all 0.4s;
  margin: 5px;
  cursor: pointer;
  outline: 0;
  background-color: ${props => props.submenu === true ? '#4470c8' : '#192f5a'};
  ${props => props.active && css`background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);` }
  // ${props => props.active && props.submenu &&  css`background-image: linear-gradient(to right,#1f8c5a 48%,#3ebf62 66%,#40c350 78%,#3cc869 89%,#37cf3b 100%,#37cfa0);`}
  

  &:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  	left: auto;
	right: auto;
  	top: auto;
	bottom: -20px;
	border: 10px solid;
	border-color: ${props => props.active === true ? '#77bf43 transparent transparent transparent' : 'transparent'};
	
  }

  @media (min-width: 768px) {
  	font-size: 1rem;
  }	

  @media (min-width: 1284px) {
  	font-size: 1.3rem;
  }
`

export default Box
