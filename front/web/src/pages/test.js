import React from 'react';
import styled from 'styled-components';


import { ConfirmBox } from '../components/context/confirmationBox';
import useMyContext from '../components/context/contextDialog';

const IndexPage = () => {
  const context = useMyContext();

   const showNav = async (event) => {
        event.preventDefault();
        const position = {
            x: event.pageX,
            y: event.pageY,
        };
        const elmts=["Ajouter à la liste","Ajouter à la playlist","Ajouter aux favoris", "Voir l'artiste"];
        const choice = await context("menu", {elements: elmts, xyPosition: position})
    };
  // const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = async () => {
    // const choise = await confirm({ message: "Vous voulez vous déconnectez ?", confirmBtnLabel: "Déconnecter" })
    // setIsOpen(false);
  }

  return (
    <>
      <div style={{position: "relative", top: "200px", left: "200px"}}>
        <p style={{color: "white", fontSize: "20px"}}>Here I am the best</p>
        <button onClick={handleClose}>Confirm ?</button>
      </div>
      <ContentWrapper onContextMenu={showNav}>
      </ContentWrapper>

    </>
  )
}

export default IndexPage

export const Head = () => <title>Test</title>

const ContentWrapper = styled.div`
  height: 500px;
  width: 300px;
  background: red;
`
