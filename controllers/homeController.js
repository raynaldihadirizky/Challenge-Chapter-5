class HomeController {
    
    static mainPage(req, res) {
        res.render('/home')
    }

    static games(req,res) {
        res.render('/games')
    }
}

module.exports = HomeController