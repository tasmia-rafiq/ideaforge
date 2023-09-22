import { Schema, model, models } from "mongoose"; 

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already Exists!'],
        required: [true, 'Email is required!'],
    },

    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Usename invalid, should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

// The 'models' object is provided by the mongoose library and stores all the registered models.
// If a model named "User" already exists in the "models" object, it assign that existing model to the "User" variable.
// This prevents redefining the model and ensures that he existing model is reused.
// If a model named "user" does not exist in the "models" object. the "model" function from mongoose is called to create a new model
// The newly created model is then assigned to the "User" variable.

const User = models.User || model("User", UserSchema);

export default User;