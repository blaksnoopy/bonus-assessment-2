var Hobby = require('../models/hobby');

module.exports = {
    index,
    create,
    delete: deleteHobby,
    show,
    update
};

function update(req, res) {
    Hobby.findByIdAndUpdate(req.params.id, req.body, function(err, hobby) {
        res.redirect(`/show/${req.params.id}`)
    })
};

function show(req, res) {
    Hobby.findById(req.params.id, function(err, hobby) {
        res.render('show', {
            title: 'Hobbies Details Page',
            hobby
        })
    })
};

function deleteHobby(req, res) {
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
