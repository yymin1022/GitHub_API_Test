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
    octokit.request(
        "GET /octocat",
        {})
        .then(res => {
            console.log(res);
        });
}

// https://docs.github.com/ko/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
const getOrganizationInfo = () => {
    octokit.request(
        "GET /orgs/{org}",
        {
            org: "GDSC-CAU"
        })
        .then(res => {
            console.log(res);
        })
}

// https://docs.github.com/ko/rest/orgs/members?apiVersion=2022-11-28#list-organization-members
const getOrganizationMembers = () => {
    octokit.request(
        "GET /orgs/{org}/members",
        {
            org: "GDSC-CAU"
        })
        .then(res => {
            console.log(res);
        })
}

authTest();
testOctokit();

getOrganizationInfo();
getOrganizationMembers();