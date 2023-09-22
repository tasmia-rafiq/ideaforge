import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User', // one to many relationship ( 1 user can create many prompts)
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is Required!'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is Required!']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;