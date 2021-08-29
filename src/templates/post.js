import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

import AppLayout from "../components/app-layout"

const TemplatePost = ({ globalData, pageData }) => {
  return render(
    <AppLayout>
      <Helmet>
        <title>{pageData.title} - minista blog</title>
      </Helmet>
      <h1>{pageData.title}</h1>
    </AppLayout>
  )
}

export default TemplatePost
