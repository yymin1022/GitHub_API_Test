import * as OctoUtil from "./OctokitUtil";

// https://docs.github.com/ko/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity
const getCommitCount = () => {
    OctoUtil.sendOctoAPI(
        "GET /repos/{owner}/{repo}/stats/contributors",
        {
            owner: "GDSC-CAU",
            repo: "GDSC-SPACE",
            headers: {"X-GitHub-Api-Version": "2022-11-28"}
        }
    );
}

// https://docs.github.com/ko/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
const getOrganizationInfo = () => {
    OctoUtil.sendOctoAPI(
        "GET /orgs/{org}",
        {
            org: "GDSC-CAU"
        }
    );
}

// https://docs.github.com/ko/rest/orgs/members?apiVersion=2022-11-28#list-organization-members
const getOrganizationMembers = () => {
    OctoUtil.sendOctoAPI(
        "GET /orgs/{org}/members",
        {
            org: "GDSC-CAU",
            per_page: 100
        }
    );
}

OctoUtil.initOctokit();

getOrganizationInfo();
getOrganizationMembers();
getCommitCount();