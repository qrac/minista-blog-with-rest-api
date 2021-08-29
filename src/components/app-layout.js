import React from "react"
import { Helmet } from "react-helmet"

const AppLayout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      {children}
    </main>
  )
}

export default AppLayout
