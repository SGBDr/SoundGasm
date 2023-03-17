import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils";

export const RightContext = ({ isOpen, onClose, elements, xyPosition, onChoice }) => {
    
    return (
        isOpen && (
            <ContentBox onClick={()=>onClose()} onContextMenu={(evt)=>evt.preventDefault()}>
                <RightClickWrap style={{ top: xyPosition.y, left: xyPosition.x }} >
                    {elements === undefined ? <></> : elements?.map((elm, i) => <MenuElement key={i} onClick={() => onChoice(i+1)}>{elm}</MenuElement>)}
                </RightClickWrap>
            </ContentBox>
        )
    )
}

const ContentBox = styled.div`
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: transparent; 
    z-index: 999;
`;


const RightClickWrap = styled.div`
    z-index: 9999;
    position: fixed;
    background: ${COLOR.menu};
    border-radius: 5px;
`;


const MenuElement = styled.div`
    color: #222222;
    font-weight: 700;
    font-color: Roboto;
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid rgba(40, 40, 40, 0.5);
    :hover {
        color: #fff;
        background:  ${COLOR.menuHover};
    }
`;