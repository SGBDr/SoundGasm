import React, { createContext, useContext, useRef, useState }from 'react';
import { ConfirmBox } from './confirmationBox';
import { RightContext } from './contextMenu';
const ContextDialog = createContext();

export  const ContextDialogProvider = ({ children }) => {
    const [diagState, setDiagState] = useState({isOpen: false});
    const [rightState, setRightState] = useState({isOpen: false});

    const diag = useRef();
    const menu = useRef();

    const context = (action, data) => {
        if(action==="confirm")
            return new Promise((resolve) => {
                setDiagState({...data, isOpen: true});
                diag.current = (choice) => {
                    resolve(choice);
                    setDiagState({ isOpen: false});
                }
            }) 
        if(action==="menu")
            return new Promise((resolve) => {
                setRightState({...data, isOpen: true});
                menu.current = (choice) => {
                    resolve(choice);
                    setRightState({ isOpen: false});
                }
            }) 
    }
        
    

    return(
        <ContextDialog.Provider value={context}>
            {children}
            <ConfirmBox isOpen={diagState.isOpen}
                {...diagState}
                onClose={()=>diag.current(false)}
                onConfirm={()=>diag.current(true)}
            />
            <RightContext isOpen={rightState}
                {...rightState}
                onClose={()=>menu.current(undefined)}
                onChoice={(elm)=>menu.current(elm)}
            />
        </ContextDialog.Provider>
    )
}

export default function useMyContext(){
    return useContext(ContextDialog);
}