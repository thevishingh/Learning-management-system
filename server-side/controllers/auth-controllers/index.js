const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Register User
const registerUser = async (req, res) => {
    const { userName, userEmail, password, role } = req.body;

    try {
        // Check for existing user
        const checkingExistingUser = await User.findOne({
            $or: [{ userEmail }, { userName }],
        });

        if (checkingExistingUser) {
            return res.status(400).json({
                success: false,
                message: "Username or email already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            userName,
            userEmail,
            password: hashedPassword,
            role,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser,
        });
    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// Login user
const LoginUser = async (req, res) => {
    const { userEmail, password } = req.body;

    const checkUser = await User.findOne({ userEmail });
    if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
        return res.status(401).json({
            success: false,
            message: "Invalid Credenctials",
        });
    }

    // payload
    const accessToken = jwt.sign({
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        role: checkUser.role,
    }, 'JWT_SECRET', { expiresIn: '120m' });

    res.status(200).json({
        success: true,
        message: "Login SuccessFully",
        data: {
            accessToken,
            user: {
                _id: checkUser._id,
                userName: checkUser.userName,
                userEmail: checkUser.userEmail,
                role: checkUser.role,
            }
        }
    });
};

module.exports = { registerUser, LoginUser };
