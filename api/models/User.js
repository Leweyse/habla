const bcrypt = require('bcryptjs');
const {Schema, model} = require('mongoose');

// MONGOOSE MODEL
const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 16,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// METHODS
UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
};

// EXPORT MONGOOSE "User" MODEL
module.exports = model('User', UserSchema);
