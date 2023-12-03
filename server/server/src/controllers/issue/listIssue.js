import Issue from "../../model/issue";

const listIssue = async ( req, res ) => {
    try {
        const issue = await Issue.findAll();
        const issueCount = await Issue.count();
        res.status(200).json({message: "List of Issue", issues: issue, count: issueCount});
        return;
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error });
        return;
    }
};

export default listIssue;