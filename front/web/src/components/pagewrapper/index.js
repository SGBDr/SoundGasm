import React, { useState } from "react"
import { SideBar } from "../sideBare"
import { Reader } from "../reader"
import { LoginBox } from "../loginbox"
import { Searchbar } from "../searchbar"
import { GlobalStyles } from "../../utils/GlobalStyles" 

const PageWrapper = ({ element, props }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    function handleSetAuthToken(newToken) {
        setAuthToken(newToken);
    }
    return (
        <>
            <SideBar setAuthToken={handleSetAuthToken} />
            <GlobalStyles />
            {
                (authToken == undefined) ?
                    <LoginBox
                        setAuthToken={handleSetAuthToken}
                    />
                    :
                    <>
                        <Searchbar />
                        {React.cloneElement(element, { ...props })}
                        <Reader />
                    </>
            }
        </>
    )
}

export default PageWrapper


