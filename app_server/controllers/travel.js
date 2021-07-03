/* GET travel view */
const travel = (req, res) => {
    pageTitle = 'Travlr Getaways - Travel';
    res.render('travel', { title: pageTitle });
};

module.exports = {
    travel
};