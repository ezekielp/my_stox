const express = require('express');
const router = express.Router();
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require('passport');

router.post("/signup", (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, email: user.email, name: user.name, accountBalance: user.accountBalance };

                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                { expiresIn: 36000 },
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                }
                            )
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "User with this email does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, email: user.email, name: user.name, accountBalance: user.accountBalance };

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {  expiresIn: 36000 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.patch("/:user_id", (req, res) => {
    const updatedUser = req.body;

    User.findByIdAndUpdate(updatedUser.id, updatedUser, (err) => {
        if (err) res.status(400).send(err);
    }).then(updatedUser => {
        const { name, email, _id, accountBalance } = updatedUser;

        const passwordlessUpdatedUser = {
            id: _id,
            email,
            name,
            accountBalance
        };

        res.json(passwordlessUpdatedUser)}
    );

});

router.get(
    "/:user_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.findById(req.params.user_id)
            .then(user => {
                const { name, email, _id, accountBalance } = user;

                const passwordlessUser = {
                    id: _id,
                    email,
                    name,
                    accountBalance
                };

                res.json(passwordlessUser)
            })
            .catch(err =>
                res
                    .status(404)
                    .json({ noUserFound: "No user found with this user_id" })
            );
    }

)

module.exports = router;