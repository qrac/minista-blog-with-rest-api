import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

import dayjs from "dayjs"
import "dayjs/locale/ja"

import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remark2rehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehype2react from "rehype-react"

import AppLayout from "../components/app-layout"

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehype2react, {
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
      // iframe: BlockIframe,
      // img: BlockImage,
    },
  })

const TemplatePost = ({ globalData, pageData }) => {
  return render(
    <AppLayout>
      <Helmet>
        <title>{pageData.title} - minista blog with REST API</title>
      </Helmet>
      <article className="section-article">
        <section className="section-header">
          <div className="section-header-inner">
            <h1 className="section-header-title">{pageData.title}</h1>
            <div className="section-header-meta">
              <div className="section-header-meta-date">
                <span>Published: </span>
                <time>{dayjs(pageData.created_at).format("YYYY.MM.DD")}</time>
              </div>
              {pageData.created_at !== pageData.updated_at && (
                <div className="section-header-meta-date">
                  <span>Updated: </span>
                  <time>{dayjs(pageData.updated_at).format("YYYY.MM.DD")}</time>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="section-contents">
          <div className="section-contents-inner">
            <div className="block-markdown">
              {processor.processSync(pageData.body).result}
            </div>
          </div>
        </section>
      </article>
    </AppLayout>
  )
}

export default TemplatePost
