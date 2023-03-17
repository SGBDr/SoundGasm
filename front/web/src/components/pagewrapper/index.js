import React, { useState } from "react"
import { SideBar } from "../sideBare"
import { Reader } from "../reader"
import { LoginBox } from "../loginbox"
import { Searchbar } from "../searchbar"
import { GlobalStyles } from "../../utils/GlobalStyles"
import { ConfirmDialogProvider } from "../confimBox/confirmDialog"

const PageWrapper = ({ element, props }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || undefined);

    function handleSetAuthToken(newToken) {
        setAuthToken(newToken);
    }
    // const pages=["/","/album/","/liked/","/playlist/"];
    return (
        <ConfirmDialogProvider>
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
        </ConfirmDialogProvider>
    )
}

export default PageWrapper;
