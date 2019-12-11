var Hobby = require('../models/hobby');

module.exports = {
    index,
    create,
    delete: deleteHobby
};

function deleteHobby(req, res) {
    console.log('hey!!!!!!!!')
    Hobby.findByIdAndDelete(req.params.id, function(err, hobby) {
        res.redirect('/')
    })
};

function create(req, res) {
    var hobby = new Hobby(req.body);
    hobby.save(function (err) {
        if (err) return res.render('index')
        res.redirect('/')
    })
};

function index(req, res) {
    Hobby.find({}, function (err, hobby) {
        res.render('index', {
            title: 'Hobbies Page',
            hobby
        })
    });
};
