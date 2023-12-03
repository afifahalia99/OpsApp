import { Router } from "express";
import createIssue from "../controllers/issue/createIssue";
import updateIssue from "../controllers/issue/updateIssue";
import deleteIssue from "../controllers/issue/deleteIssue";
import listIssue from "../controllers/issue/listIssue";
import viewIssue from "../controllers/issue/viewIssue";
import isAuthenticated from "../middleware/isAuthenticated";

const issueRoutes = Router();

//Path based on role

//only user to enter create issue 
issueRoutes.post("/", isAuthenticated, (req, res) => {
  if (req.user.role === "user") {
    // user-specific logic
    createIssue(req, res);
  } else {
    // Other roles or generic logic
    res.status(401).json({ message: "Unauthorized", user: req.user });
    
  }
});

issueRoutes.patch("/:id", isAuthenticated, (req, res) => {
  if (req.user.role === "admin" || "superuser" || "team") {
    // Admin-specific logic
    updateIssue(req, res);
  } else {
    // Other roles or generic logic
    res.status(401).json({ message: "Unauthorized", user: req.user });
    
  }
});

issueRoutes.delete("/:id", isAuthenticated, (req, res) => {
  if (req.user.role === "admin") {
    // Admin-specific logic
    deleteIssue(req, res);
  } else {
    // Other roles or generic logic
    res.status(401).json({ message: "Unauthorized", user: req.user });
    
  }
});


issueRoutes.get("/", isAuthenticated, (req, res) => {
    if (req.user.role === "admin") {
      // Admin-specific logic
      
      listIssue(req, res);
    } else {
      // Other roles or generic logic
      res.status(401).json({ message: "Unauthorized", user: req.user });
      
    }
  });

  issueRoutes.get("/:issue_type", isAuthenticated, (req, res) => {
    if (req.user.role === "admin") {
      // Admin-specific logic
      viewIssue(req, res);
    } else {
      // Other roles or generic logic
      res.status(401).json({ message: "Unauthorized", user: req.user });
      
    }
  });

export default issueRoutes;