import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import {Link} from 'gatsby';

export const SideBar = (props) => {

    const [showConfirmation, setShowConfirmation] = useState(false);
    const confRef = useRef(null);

    const handleDisconnect = () => {
      setShowConfirmation(true);
      window.alert("year");
    //   confRef.current.focus();
    };

    const handleConfirm = (evt) => {
        const val = evt.target.textContent;
        setShowConfirmation(false);
        // Perform the action of disconnecting here
        if(localStorage.getItem("authToken") && val === "Oui") {
                localStorage.removeItem('authToken');
                props.setAuthToken(undefined);
        }
    };


    return(
        <>
            <Wrapper>
                <ContentWrapper>
                    <Link  to="/" titleTooltip='Home' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/home2.svg" /> </Link>
                    <Link  to="/liked" titleTooltip='Liked' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/heart.svg" /> </Link>
                    <Link  to="/album" titleTooltip='Album' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/album.svg" /> </Link>
                    <Link  to="/playlist" titleTooltip='Playlist' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/playlist.svg" /> </Link>
                    <Link  to="#" titleTooltip='Logout' className='tooltip' onClick={handleDisconnect}> <Img className='icon' alt="kk" src="/images/icons/profil.svg" /> </Link>

                </ContentWrapper>
            </Wrapper>
            {showConfirmation && (
                <ConfirmationBox ref={confRef} tabIndex={-1}>
                    <p>Vous allez être déconnecté ?</p>
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0, 20px"}} >
                        <button className='bttn' onClick={handleConfirm} style={{backgroundColor: `${COLOR.primary}`}} >Oui</button>
                        <button className='bttn' onClick={handleConfirm} style={{backgroundColor: `${COLOR.secondary}`}} >Non</button>
                    </div>
                </ConfirmationBox>
            )}
        </>
    );

}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    position: fixed;
    left: 20px;
    top: 96px;

    width: 52px;
    height: 300px;
    border-radius: 32px;


    background-color: ${COLOR.darkAlt};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    height: 250px;

    .icon: hover {
        fill: #DA4567;
        left: 30;
    }

    .tooltip{ pointer-events: all ;}

    .tooltip::after {
        content: attr(titleTooltip);
        position: absolute;
        bottom: auto;
        left: 100%;
        // transform: translateX(-50%);
        padding: 5px;
        background-color: ${COLOR.text};
        color: ${COLOR.darkAlt};
        font-size: 15px;
        font-weight: 700;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .tooltip:hover::after {
  opacity: 1;
}


`;

const Img = styled.img`
    transition: 0.2s ease-in-out;
    :hover{
        transform: scale(2);
    }
`

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
