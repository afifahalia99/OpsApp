import Issue from "../../model/issue";
import { parseMessage } from "../../utils/helper";

const updateIssue = async ( req, res) => {
    const { status } = req.body;
    const { id } =req.params;

    //fetch data issue by using id
    const  issue = await Issue.findOne({ where: { id }});

    //check issue available or not
    if (issue === null) {
        res.status(404).json(parseMessage("Issue Not Found"));
        return;
    }

    try {
        await issue.update({ status});
        await issue.save();
        res.status(200).json(parseMessage("Issue updated", issue));
        return;
    } catch (error){
        res.status(500).json({message: "Server error", error: error});
        return;
    }
};

export default updateIssue;

