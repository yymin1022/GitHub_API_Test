"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var octokit_1 = require("octokit");
dotenv_1.default.config();
var GITHUB_TOKEN = process.env["GITHUB_TOKEN"];
var octokit;
var authTest = function () {
    octokit = new octokit_1.Octokit({
        auth: GITHUB_TOKEN
    });
};
// https://docs.github.com/ko/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity
var getCommitCount = function () {
    octokit.request("GET /repos/{owner}/{repo}/stats/contributors", {
        owner: "GDSC-CAU",
        repo: "GDSC-SPACE",
        headers: { "X-GitHub-Api-Version": "2022-11-28" }
    })
        .then(function (res) {
        console.log(res["data"]);
    });
};
// https://docs.github.com/ko/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
var getOrganizationInfo = function () {
    octokit.request("GET /orgs/{org}", {
        org: "GDSC-CAU"
    })
        .then(function (res) {
        console.log(res["data"]);
    });
};
// https://docs.github.com/ko/rest/orgs/members?apiVersion=2022-11-28#list-organization-members
var getOrganizationMembers = function () {
    octokit.request("GET /orgs/{org}/members", {
        org: "GDSC-CAU",
        per_page: 100
    })
        .then(function (res) {
        var memberArr = [];
        res["data"].forEach(function (memberItem) {
            memberArr.push(memberItem["login"]);
        });
        console.log(memberArr);
    });
};
authTest();
getOrganizationInfo();
getOrganizationMembers();
getCommitCount();
