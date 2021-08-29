import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

import dayjs from "dayjs"
import "dayjs/locale/ja"

import AppLayout from "../components/app-layout"

const PageHome = ({ globalData }) => {
  return render(
    <AppLayout>
      <Helmet>
        <title>minista blog with REST API</title>
      </Helmet>
      <section className="section-contents">
        <div className="section-contents-inner">
          <ul className="block-posts">
            {globalData.map((item, index) => (
              <li className="block-posts-item" key={index}>
                <a
                  className="block-posts-item-link"
                  href={`/posts/${item.number}/`}
                >
                  <h2 className="block-posts-item-title">{item.title}</h2>
                </a>
                <div className="block-posts-item-meta">
                  <div className="block-posts-item-meta-date">
                    <span>Published: </span>
                    <time>{dayjs(item.created_at).format("YYYY.MM.DD")}</time>
                  </div>
                  {item.created_at !== item.updated_at && (
                    <div className="block-posts-item-meta-date">
                      <span>Updated: </span>
                      <time>{dayjs(item.updated_at).format("YYYY.MM.DD")}</time>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppLayout>
  )
}

export default PageHome
