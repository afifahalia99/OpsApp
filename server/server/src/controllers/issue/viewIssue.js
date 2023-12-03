import Issue from "../../model/issue";

const viewIssue = async (req, res) => {
    try {
        const { issue_type } = req.params;
        const issue= await Issue.findOne({ where: { issue_type }});
        const issueCount = await Issue.count({ where: { issue_type }});
        res.status(200).json({message: "Issue retrieved", issues: issue, count: issueCount});
        return;
    } catch (error) {
        res.status(500).json({ message: "Server Error", error:error});
        console.log(error);
        return;
    }
};

export default viewIssue;