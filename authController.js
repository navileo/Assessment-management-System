const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // This will be replaced by a proper data store later

const registerSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
});

exports.register = async (req, res) => {
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { username, password } = value;

        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'User already registered.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: users.length + 1, username, password: hashedPassword };
        users.push(newUser);

        // Generate a token for immediate login after registration
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, 'supersecretjwtkey', { expiresIn: '1h' });
        res.status(201).json({ message: 'User registered successfully.', token });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error.' });
    }
};

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

exports.login = async (req, res) => {
    try {
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const { username, password } = value;

        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(400).json({ message: 'User not found. Please sign up.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'supersecretjwtkey', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error.' });
    }
};