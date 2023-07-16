import {MemberSimpleData} from "./DataClass";
import * as OctoUtil from "./OctokitUtil";

// https://docs.github.com/ko/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity
const getCommitCount = async () => {
    let repoList = await OctoUtil.sendOctoAPI(
        "GET /orgs/{org}/repos",
        {
            org: "GDSC-CAU"
        }
    );

    let contribCnt = 0;
    for (const repoItem of repoList["result"]) {
        let repoData = await OctoUtil.sendOctoAPI(
            "GET /repos/{owner}/{repo}/stats/contributors",
            {
                owner: "GDSC-CAU",
                repo: repoItem["name"]
            }
        );

        for(let i = 0; i < repoData["result"].length; i++){
            contribCnt += repoData["result"][i]["total"];
        }
        console.log(repoItem["name"])
    }
    return contribCnt;
}

// https://docs.github.com/ko/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
const getOrganizationInfo = async () => {
    return (await OctoUtil.sendOctoAPI(
        "GET /orgs/{org}",
        {
            org: "GDSC-CAU"
        }
    ));
}

// https://docs.github.com/ko/rest/orgs/members?apiVersion=2022-11-28#list-organization-members
const getOrganizationMembers = async () => {
    return (await OctoUtil.sendOctoAPI(
        "GET /orgs/{org}/members",
        {
            org: "GDSC-CAU",
            per_page: 100
        }
    ));
}

const getOrganizationMembersSimple = async () => {
    let memberList: Array<MemberSimpleData> = [];
    let memberData = await OctoUtil.sendOctoAPI(
        "GET /orgs/{org}/members",
        {
            org: "GDSC-CAU",
            per_page: 100
        }
    );

    memberData["result"].forEach((memberItem: any) => {
        memberList.push({
            avatar_url: memberItem["avatar_url"],
            html_url: memberItem["html_url"],
            login: memberItem["login"]
        });
    });

    return memberList;
}

const test = async () => {
    OctoUtil.initOctokit();

    console.log(await getCommitCount());
    // console.log(await getOrganizationInfo());
    // console.log(await getOrganizationMembers());
    // console.log(await getOrganizationMembersSimple());
}

test();