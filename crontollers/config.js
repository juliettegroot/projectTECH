const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');



//register
const register = (req, res, next) => {
    bcrypt.hash(req.body.wachtwoord, 8, function (err, hashedPassword) {
        if (err) {
            res.json({
                error: err
            });
        }

        let user = new User({
            name: req.body.name,
            mail: req.body.mail,
            password: hashedPassword,


        });
        user.save()
            .then(user => {
                res.redirect('/login');
                return;
            })
            .catch(error => {
                errors.push({msg: 'er gaat hier iets fout probeer het opnieuw'});
                res.redirect('/register');
                return;
            });
    });

};


//login
const login = (req, res, next) => {
    const naam = req.body.name;
    const wachtwoord = req.body.wachtwoord;

    User.findOne({ $or: [{ mail: naam }, { name: naam }] })
        .then(user => {
            if (user) {
                bcrypt.compare(wachtwoord, user.password, function (err, result) {
                    console.log(wachtwoord);
                    console.log(user.wachtwoord);
                    console.log(naam);
                    if (err) {
                        res.json({
                            error: err,
                            message: 'Oops something went wrong...'
                        });
                        return;
                    }
                    if (result) {
                        res.redirect('/logged');
                        return;
                    } else {
                        res.json({
                            message: 'Password is incorrect. Try again',
                        });
                        return;
                    }
                });

            } else {
                res.json({
                    message: 'User not found',
                });
                return;
            }
        });
};

module.exports = {
    register, login
};