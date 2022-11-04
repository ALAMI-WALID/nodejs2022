const index = (req, res, next) => {
    res.render('index', { title: 'Home Express', message: 'Enjoy this cour !' });
};


module.exports = {
    index
}