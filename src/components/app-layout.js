import React from "react"

import AppHeader from "./app-header"
import AppFooter from "./app-footer"

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <AppHeader />
      <main className="app-main">{children}</main>
      <AppFooter />
    </div>
  )
}

export default AppLayout
