import React, { useState, useEffect } from "react"
import { SideBar } from "../sideBare"
import { Reader } from "../reader"
import { LoginBox } from "../loginbox"
import { Searchbar } from "../searchbar"
import { GlobalStyles } from "../../utils/GlobalStyles"
import { ContextDialogProvider } from "../context/contextDialog"

const PageWrapper = React.memo(({ element, props }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || undefined);

    useEffect(()=>{
        const handleTokenError=(evt)=>{
            console.log("I met an error with token");
            if(evt.detail.key === "authToken")
                setAuthToken(evt.detail.newValue);
        }
        window.addEventListener("token", handleTokenError)
    }, [])
    function handleSetAuthToken(newToken) {
        setAuthToken(newToken);
    }
    // const pages=["/","/album/","/liked/","/playlist/"];
    return (
        <ContextDialogProvider>
            <div style={{ height: "98.2vh", padding: "0", margin: "0" }}>
                {
                    (props.path === "/404/") ? <> {React.cloneElement(element, { ...props })} </> :
                        <>
                            <GlobalStyles />
                            {
                                (authToken === undefined) ? <LoginBox setAuthToken={handleSetAuthToken} /> :
                                    <>
                                        <SideBar setAuthToken={handleSetAuthToken} />
                                        <Searchbar />
                                        {React.cloneElement(element, { ...props })}
                                        <Reader />
                                    </>
                            }
                        </>
                }
            </div>
        </ContextDialogProvider>
    )
})

export default PageWrapper;
