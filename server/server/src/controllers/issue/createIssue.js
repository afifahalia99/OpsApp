import Issue from "../../model/issue";
import { parseMessage } from "../../utils/helper";

const createIssue = async ( req, res) => {
    try {
        const { issue_type, reported_by, description, status, commencement_by} = req.body;
        const issue = await Issue.create({ issue_type, reported_by, description, status, commencement_by });
        res.status(201).json(parseMessage( "New Issue Created",  issue));
        return;
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error });
        return;
    }
};

export default createIssue;