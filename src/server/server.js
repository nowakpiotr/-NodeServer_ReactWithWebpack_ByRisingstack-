import express from 'express';
import path from 'path';

const app = express();

const PATH_DIST = path.resolve(__dirname, '../client/public');
app.use(express.static(PATH_DIST));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
