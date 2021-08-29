import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

import AppLayout from "../components/app-layout"

const PageHome = ({ globalData }) => {
  return render(
    <AppLayout>
      <Helmet>
        <title>minista blog with REST API</title>
      </Helmet>
      <section className="section-contents">
        <div className="section-contents-inner">
          <ul>
            {globalData.map((item, index) => (
              <li key={index}>
                <a href={`/posts/${item.number}/`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppLayout>
  )
}

export default PageHome
