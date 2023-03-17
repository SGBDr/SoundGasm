import React, { useState } from "react"
import { SideBar } from "../sideBare"
import { Reader } from "../reader"
import { LoginBox } from "../loginbox"
import { Searchbar } from "../searchbar"
import { GlobalStyles } from "../../utils/GlobalStyles"
import { ContextDialogProvider } from "../context/contextDialog"

const PageWrapper = ({ element, props }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || undefined);

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
                            <SideBar setAuthToken={handleSetAuthToken} />
                            <GlobalStyles />
                            {
                                (authToken === undefined) ? <LoginBox setAuthToken={handleSetAuthToken} /> :
                                    <>
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
}

export default PageWrapper;
