import React, { useState } from "react"
import { SideBar } from "../sideBare"
import { Reader } from "../reader"
import { LoginBox } from "../loginbox"
import { Searchbar } from "../searchbar"
import { GlobalStyles } from "../../utils/GlobalStyles"

const PageWrapper = ({ element, props }) => {
    const [authToken, setAuthToken] = useState("TOKEN_01036ee5c48a425148cf6a127cdfe4d3a416d8cb " || null);

    function handleSetAuthToken(newToken) {
        setAuthToken(newToken);
    }
    // const pages=["/","/album/","/liked/","/playlist/"];
    return (
        <>  
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
                                    {/* <Reader /> */}
                                </>
                        }
                    </>
            }
        </>
    )
}

export default PageWrapper


