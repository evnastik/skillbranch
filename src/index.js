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
  	fullname = fullname.trim();
    var re = new RegExp('[0-9_/]+');
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

app.get('/task2C',  (req, res) => {
  const url = req.query.username || 'Invalid username';
  if(url != 'Invalid username'){
  const clean_url = url.split('?')[0];
  var names=[];
  names=clean_url.split('/');
  var re = new RegExp('github');
  var re_vk = new RegExp('(http)+(.)+(.com)+');
    if (re.test(url)) {
  var username = names[names.length - 2];
    }
    else if(re_vk.test(url)){
  var username = names[3];
    }else{
  var username = names[names.length - 1];
  }
  if(username.charAt(0) != '@'){
  username = '@' + username;

  }
  res.send(username);
}else{
  res.send(url);
}
}
  );


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
