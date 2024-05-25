const router = require('express').Router();

router.get('/', (req, res) => {
res.render('home');
})
router.get('/git', (req, res) => {
    res.render('git');
    })
router.get('/sql', (req, res) => {
    res.render('sql');
    })
router.get('/lecss', (req, res) => {
    res.render('lecss');
    })

module.exports = router;