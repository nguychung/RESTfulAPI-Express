const getHomePage = (req, res) => {
    // process model
    res.send('Hello World with chungnm2!')
}

const getABC = (req, res) => {
    res.send('ABC');
}

const getChungnm2 = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getChungnm2
};