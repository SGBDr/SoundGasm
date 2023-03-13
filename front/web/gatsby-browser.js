import React from "react"
import PageWrapper from "./src/components/pagewrapper"

export const wrapPageElement = ({ element, props }) => {
  return <PageWrapper element={element} props={props} />
}
