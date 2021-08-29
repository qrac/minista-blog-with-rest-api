import React from "react"

const AppFooter = () => {
  const nowYear = new Date().getFullYear()
  const startYear = 2021
  const checkOverYear = startYear < nowYear
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <p className="app-footer-copylight">
          {"©️ "}
          {"QRANOKO"} {checkOverYear ? `${startYear} - ${nowYear}` : nowYear}
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
