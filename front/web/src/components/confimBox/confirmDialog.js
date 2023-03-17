import React, { createContext, useContext, useRef, useState }from 'react';
import { ConfirmBox } from '.';
const ConfirmDialog = createContext();

export  const ConfirmDialogProvider = ({ children }) => {
    const [state, setState] = useState({isOpen: false});
    const fn = useRef();
    const confirm = (data) => {
        return new Promise((resolve) => {
            setState({...data, isOpen: true});
            fn.current = (choice) => {
                resolve(choice);
                setState({ isOpen: false});
            }
        })
        
    }

    return(
        <ConfirmDialog.Provider value={confirm}>
            {children}
            <ConfirmBox isOpen={state.isOpen}
                {...state}
                onClose={()=>fn.current(false)}
                onConfirm={()=>fn.current(true)}
            />
        </ConfirmDialog.Provider>
    )
}

export default function useConfirm(){
    return useContext(ConfirmDialog);
}