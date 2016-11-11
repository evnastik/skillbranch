import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A',  (req, res) => {
	const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
}
  );

app.get('/task1B',  (req, res) => {
	var fullname = req.query.fullname ? req.query.fullname : undefined;
  var names = [];
  if (fullname != undefined) {
    var re = new RegExp('[0-9]+');
    if (re.test(fullname)) {
      res.status(200).send('Invalid fullname');
      return;
    }
    names = fullname.split(' ');



    switch (names.length) {
      case 1:
        res.status(200).send(fullname);
        break;
      case 2:
        res.status(200).send(names[1] + ' ' + names[0].charAt(0) + '.');
        break;
      case 3:
        res.status(200).send(names[2] + ' ' + names[0].charAt(0) + '. ' +
      names[1].charAt(0) + '.');
        break;
      default:
        res.status(200).send('Invalid fullname');
        break;
    }
  }
  else {
    res.status(200).send('Invalid fullname');
  }

}
  );

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
