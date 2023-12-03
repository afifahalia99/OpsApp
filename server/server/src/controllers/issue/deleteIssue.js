import Issue from "../../model/issue";
import { parseMessage } from "../../utils/helper";

const deleteIssue = async (req, res) => {
    const { id } = req.params;
    const issue = await Issue.findOne({ where: { id }});

    if (issue ===  null ){
        res.status(404).json(parseMessage("Issue Not found"));
        return;
    }
    try {
        await issue.destroy();
        res.status(200).json(parseMessage("Issue Deleted", issue));
        return;
    } catch (error){
        res.status(500).json({ message: "Server Error", error:error });
        console.log(error);
        return;
    }
};

export default deleteIssue;