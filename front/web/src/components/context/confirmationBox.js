import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';

export function ConfirmBox ({ isOpen, onClose, message, confirmBtnLabel, onConfirm }) {
    return (
        isOpen && (
            <Box>
                <ConfirmationBox >
                    <p>{message}</p>
                    <div style={{ width: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0, 20px", gap: "20px" }} >
                        <button className='bttn' onClick={() => {onConfirm()}} style={{ backgroundColor: `${COLOR.primary}` }} >{confirmBtnLabel}</button>
                        <button className='bttn' onClick={() => onClose()} style={{ backgroundColor: "orange" }} >Annuler</button>
                    </div>
                </ConfirmationBox>
            </Box>
        )
    )
}

const Box = styled.div`
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(255,255,255,0.5); 
    z-index: 9999;
`;


const ConfirmationBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-radius: 32px;
    background-color: ${COLOR.background};
    border: 10px solid ${COLOR.playButtonCard};
    box-shadow: 0 0 10px ${COLOR.playButtonCard};
    z-index: 9999;
    transition: 0.3s ease-in-out;
    :hover{
       border: 10px solid ${COLOR.text};
    }
    p, .bttn{
        font-size: 25px;
        font-weight: 700;
        color: white;
    }

    .bttn{
        font-size: 20px;
        padding: 5px 10px;
        border-radius: 32px;
        border: none;
        transition: 0.3s ease-in-out;
        :hover{
            cursor: pointer;
            transform: scale(1.1);
            border: 2px solid;
        }
    }

`;
