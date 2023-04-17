const express = require('express')
const cors = require('cors')

require('dotenv').config()
const { sequelize } = require("./models");

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결 성공");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const rootRoutes = require("./routes");

const app = express()
app.use(cors())

app.use("/", rootRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Start at ${port}`)
})
