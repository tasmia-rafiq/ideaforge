// connecting to DB
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// api endpoint format
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        params.id;

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        return new Response("Failed to fetch all Prompts", { status: 500 });
    }
}