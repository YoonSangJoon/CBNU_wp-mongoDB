const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  res.cookie('myCookie', 'from Index');
  res.render('index', {
    title: 'Simple Board',
    cookie: JSON.stringify(req.cookies)
  });
});

router.get('/login', (req, res, next) => {
    res.render('login', {
      title: 'Simple Board - 로그인',
      errorMessage: req.flash('errorMessage')
    }); 
  });
  

module.exports = router;
