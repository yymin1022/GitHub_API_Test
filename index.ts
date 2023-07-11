import dotenv from "dotenv";
import {Octokit} from "octokit";

dotenv.config();
const GITHUB_TOKEN = process.env["GITHUB_TOKEN"];

let octokit: Octokit;

const authTest = () => {
    octokit = new Octokit({
        auth: GITHUB_TOKEN
    });
}

const testOctokit = () => {
    octokit.request("GET /octocat")
        .then(res => {
            console.log(res);
        });
}

authTest();
testOctokit()