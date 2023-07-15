import dotenv from "dotenv";
import {Octokit} from "octokit";

import {OctoResult} from "./DataClass";

dotenv.config();
const GITHUB_TOKEN = process.env["GITHUB_TOKEN"];

let octokit: Octokit

export const initOctokit = () => {
    if(octokit === undefined){
        octokit = new Octokit({
            auth: GITHUB_TOKEN
        });
    }
}

export const sendOctoAPI = async (path: string, data: any) => {
    let resultData: OctoResult = {
        success: false,
        result: {}
    }

    await octokit.request(path, data)
        .then(res => {
            resultData.success = true;
            resultData.result = res["data"];
        })
        .catch((err) => {
            resultData.success = false;
            resultData.result = err.toString();
        })

    return resultData;
}