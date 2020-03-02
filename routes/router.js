const {Router} = require('express')
const router = Router();


router.get('/',(req,res)=>{
    res.render('index')
})

// ... all other routes (app.get from index.js)

router.post('/', (req,res) => {
    
});

module.exports = router;