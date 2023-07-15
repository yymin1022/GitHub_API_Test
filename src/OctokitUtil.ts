import dotenv from "dotenv";
import {Octokit} from "octokit";

dotenv.config();
const GITHUB_TOKEN = process.env["GITHUB_TOKEN"];

let octokit: Octokit

const initOctokit = () => {
    if(octokit !== undefined){
        octokit = new Octokit({
            auth: GITHUB_TOKEN
        });
    }
}

const getOctokitAPI = (path: string, data: object) => {

}