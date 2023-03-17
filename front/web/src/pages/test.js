import React from 'react';


import { ConfirmBox } from '../components/confimBox';
import useConfirm from '../components/confimBox/confirmDialog';

const IndexPage = () => {
  const confirm = useConfirm();
  // const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = () => {
    confirm({ message: "Vous voulez vous déconnectez ?", confirmBtnLabel: "Déconnecter" })
    // setIsOpen(false);
  }

  return (
    <>
      <div style={{position: "relative", top: "200px", left: "200px"}}>
        <p style={{color: "white", fontSize: "20px"}}>Here I am the best</p>
        <button onClick={handleClose}>Confirm ?</button>
      </div>
      {/* <ConfirmBox message="Vous voulez vous déconnecter ?"
        isOpen={isOpen}
        onClose={()=>{console.log('closing...'); handleClose()} }
        confirmBtnLabel="Déconnecter"
        onConfirm={()=>{console.log("Confirm...")}}
      /> */}

    </>
  )
}

export default IndexPage

export const Head = () => <title>Test</title>
