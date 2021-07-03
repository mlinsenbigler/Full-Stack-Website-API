/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Getaways'});
};

module.exports = {
    index
};