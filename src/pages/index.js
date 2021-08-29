import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

import AppLayout from "../components/app-layout"

const PageHome = ({ globalData }) => {
  return render(
    <AppLayout>
      <Helmet>
        <title>minista blog</title>
      </Helmet>
      <h1>minista blog</h1>
      <ul>
        {globalData.map((item, index) => (
          <li key={index}>
            <a href={`/posts/${item.id}/`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </AppLayout>
  )
}

export default PageHome
