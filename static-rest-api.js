const fs = require("fs")
const axios = require("axios")

const distPath = "./.minista/api"
const apiUrl = "https://api.github.com/repos/qrac/minista/issues"
const apiParams = {
  params: {
    state: "all",
  },
}

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true })
}

axios.get(apiUrl, apiParams).then((res) => {
  fs.writeFile(
    `${distPath}/github-issues.json`,
    JSON.stringify(res.data),
    function (err) {
      if (err) console.log("error", err)
    }
  )
})
