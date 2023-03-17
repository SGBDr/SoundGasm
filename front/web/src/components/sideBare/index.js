import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { Link } from 'gatsby';
import useConfirm from '../confimBox/confirmDialog';

export const SideBar = (props) => {

    // const [showConfirmation, setShowConfirmation] = useState(false);
    const confirm = useConfirm();

    // const handleOui = () => {
    //     return Promise.resolve("Oui");
    // }

    // const handleNon = () => {
    //     return Promise.resolve("Non");
    // }


    // function showConfirmationBox(message) {
    //     return new Promise((resolve, reject) => {
    //         function handleButtonClick(value) {
    //             setShowConfirmation(false);
    //             if (value === "Oui") {
    //                 resolve('Oui');
    //             } else {
    //                 reject('Non');
    //             }
    //         }
    //         const customConfirmationBox = (
    //             <ConfBox
    //                 onConfirmation={(value) => handleButtonClick(value)}
    //                 onCancelation={(value) => handleButtonClick(value)}
    //             />
    //         )
    //         createRoot(confRef).render(customConfirmationBox)
    //         if (window.confirm(message)) {
    //             resolve('confirmed');
    //         } else {
    //             reject('canceled');
    //         }
    //     });
    // }

    // function onConfirm() {
    //     console.log('User confirmed.');
    // }

    // function onCancel() {
    //     console.log('User canceled.');
    // }

    const handleDisconnect = async () => {
        // Default confirm box
        if (localStorage.getItem("authToken")){
            const choice = await confirm({ message: "Vous voulez vous déconnectez ?", confirmBtnLabel: "Déconnecter" });
            if(choice){
                // window.confirm("Vous allez être déconnecté ?")) {
                localStorage.removeItem("authToken");
                props.setAuthToken(undefined);
            }
        }

        // setShowConfirmation(true);
        // showConfirmationBox('Are you sure you want to proceed?')
        //     .then(onConfirm)
        //     .catch(onCancel);

    };



    // const handleConfirm = (evt) => {
    //     const val = evt.target.textContent;
    //     setShowConfirmation(false);
    //     // Perform the action of disconnecting here
    //     if (localStorage.getItem("authToken") && val === "Oui") {
    //         localStorage.removeItem('authToken');
    //         props.setAuthToken(undefined);
    //     }
    // };

    return (
        <>
            <Wrapper>
                <ContentWrapper>
                    <Link to="/" data-tooltip='Home' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/home2.svg" /> </Link>
                    <Link to="/liked" data-tooltip='Liked' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/heart.svg" /> </Link>
                    <Link to="/album" data-tooltip='Album' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/album.svg" /> </Link>
                    <Link to="/playlist" data-tooltip='Playlist' className='tooltip'> <Img className='icon' alt="kk" src="/images/icons/playlist.svg" /> </Link>
                    <Link to="#" data-tooltip='Logout' className='tooltip' onClick={handleDisconnect}> <Img className='icon' alt="kk" src="/images/icons/profil.svg" /> </Link>

                </ContentWrapper>
            </Wrapper>
        </>
    );

}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: absolute;
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
        content: attr(data-tooltip);
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

