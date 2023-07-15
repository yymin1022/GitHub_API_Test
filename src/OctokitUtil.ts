import dotenv from "dotenv";
import {Octokit} from "octokit";

dotenv.config();
const GITHUB_TOKEN = process.env["GITHUB_TOKEN"];

let octokit: Octokit

export const initOctokit = () => {
    if(octokit !== undefined){
        octokit = new Octokit({
            auth: GITHUB_TOKEN
        });
    }
}

export const sendOctoAPI = async (path: string, data: any) => {
    await octokit.request(path, data)
        .then(res => {
            console.log(res["data"]);
        })
        .catch((err) => {
            console.log(err);
        })
}