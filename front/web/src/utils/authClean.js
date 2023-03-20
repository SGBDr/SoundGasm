export const tokenCleanUp = () => {
    localStorage.removeItem("authToken");
    window.dispatchEvent(new CustomEvent("token", {
        detail: {
          key: "authToken",
          newValue: undefined
        }
      }))
}

export const errMsg = "Forbidden";