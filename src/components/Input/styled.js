import styled, { keyframes, css } from 'styled-components';
const blueColor = '#3376a5';

const inputHighlighter = keyframes`
    from { background:#5264AE; }
    to { width:0; background:transparent; }
`;

export const Highligter = styled.span`
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
`;

export const Label = styled.label`
    color:${(props) => props.error ? 'rgb(221,44,0)' : '#999'};
    font-size: 18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`;

export const Bar = styled.span`
    position:relative;
    display:block;
    width:100%;

    &:after{
        content:'';
        height:2px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background:${(props) => props.error ? 'rgb(221,44,0)' : blueColor}; 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all; 
        right:50%; 
    };

    &:before{
        content:'';
        height:2px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background:${(props) => props.error ? 'rgb(221,44,0)' : blueColor};  
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all; 
        left:50%;
    };
`;

export const InputComponent = styled.input`
    font-size:18px;
    padding:5px;
    display:block;
    width:100%;
    border:none;
    border-bottom:1px solid ${(props) => props.error ? 'rgb(221,44,0)' : '#757575'};
    box-sizing: border-box;
    ${(props) => props.blocked ? 'pointer-events:none;' : ''};

    &:focus{
      outline:none;
    }
    
`;


const activeBar = css`
    ${InputComponent}{
        &:focus ~ ${Bar}{
            &:before{
                width:50%;
            }
            &:after{
                width:50%;
            }
        };
        
    }

    ${InputComponent}{
        &:focus ~ ${Highligter}{
            animation: ${inputHighlighter} 0.3s ease;
        }
    }

    ${InputComponent}{
        &:focus ~ ${Label}, &:valid ~ ${Label}{
            top:-15px;
            font-size:12px;
            color:${(props) => props.error ? 'rgb(221,44,0)' : blueColor}; 
        }
    }
    
`;
export const Group = styled.div`
    position:relative; 
    margin-top:24px;
    width:100%;

    ${activeBar};
`;

export const ErrorLabel = styled.div`
    color: rgb(221,44,0);
    font-size: 12px;
    line-height: 14px;
    padding-top: 5px;
    padding-left: 5px;
    position:absolute;
`;

