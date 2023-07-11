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

const getCommitCount = () => {
    octokit.request(
        "GET /repos/{owner}/{repo}/stats/contributors",
        {
            owner: "GDSC-CAU",
            repo: "GDSC-SPACE",
            headers: {"X-GitHub-Api-Version": "2022-11-28"}
        })
        .then(res => {
            console.log(res["data"]);
        })
}

// https://docs.github.com/ko/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
const getOrganizationInfo = () => {
    octokit.request(
        "GET /orgs/{org}",
        {
            org: "GDSC-CAU"
        })
        .then(res => {
            console.log(res["data"]);
        })
}

// https://docs.github.com/ko/rest/orgs/members?apiVersion=2022-11-28#list-organization-members
const getOrganizationMembers = () => {
    octokit.request(
        "GET /orgs/{org}/members",
        {
            org: "GDSC-CAU",
            per_page: 100
        })
        .then(res => {
            let memberArr: Array<string> = [];
            res["data"].forEach((memberItem) => {
                memberArr.push(memberItem["login"]);
            });
            console.log(memberArr);
        })
}

authTest();

getOrganizationInfo();
getOrganizationMembers();

getCommitCount();