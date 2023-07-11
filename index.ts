import dotenv from "dotenv";
import {Octokit} from "octokit";

dotenv.config();
const GITHUB_TOKEN = process.env["GITHUB_TOKEN"];

const authTest = async () => {
    const octokit = new Octokit({
        auth: GITHUB_TOKEN
    });
    console.log(await octokit.auth());
}

authTest();