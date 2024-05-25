const router = require('express').Router();

router.get('/', (req, res) => {
res.render('home');
})
router.get('/git', (req, res) => {
    res.render('git');
    })

module.exports = router;