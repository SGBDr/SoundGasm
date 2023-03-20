import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils";

export const RightContext = React.memo(({ isOpen, onClose, elements, xyPosition, onChoice, playlist }) => {
    return (
        isOpen && (
            <ContentBox onClick={()=>onClose()} onContextMenu={(evt)=>evt.preventDefault()}>
                <RightClickWrap style={{ top: xyPosition.y, left: xyPosition.x }} className={(playlist)?"playlist":""} >
                    {elements === undefined ? <></> : elements?.map((elm, i) => <MenuElement key={i} onClick={() => onChoice(i+1)}>{elm}</MenuElement>)}
                </RightClickWrap>
            </ContentBox>
        )
    )
})

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
    &.playlist{
        width: 200px;
        >*{
            display: flex;
            justify-content: center;
            align-items: center,
        }
        border: 2px solid ${COLOR.secondary};
    }
`;


const MenuElement = styled.div`
    color: #222222;
    font-weight: 700;
    font-color: Teko;
    cursor: pointer;
    padding: 10px;
    height: 20px;
    border-bottom: 1px solid rgba(40, 40, 40, 0.5);
    :hover {
        color: #fff;
        background:  ${COLOR.menuHover};
    }
`;