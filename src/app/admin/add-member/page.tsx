"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Tooltip,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TeamMemberForm from "@/components/ui/team/TeamMemberForm";

// Define TypeScript types
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  facebook: string;
  linkedin: string;
  image: string;
}

const TeamMemberList: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get<TeamMember[]>(
          "https://vectaweb-backend.vercel.app/api/teamMembers"
        );
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchMembers();
  }, []);

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `https://vectaweb-backend.vercel.app/api/teamMembers/${id}`
      );
      setMembers(members.filter((member) => member._id !== id));
      setSnackbarMessage("Team member deleted successfully.");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error deleting team member:", error);
      setSnackbarMessage("Error deleting team member.");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Typography
        variant="h4"
        component="h1"
        className="font-extrabold text-center text-gray-800 mb-8"
      >
        Team Members
      </Typography>

      <div className="mb-8">
        <Typography
          variant="h5"
          component="h2"
          className="font-semibold text-gray-800 mb-4"
        >
          {editingMember ? "Edit Team Member" : "Add Team Member"}
        </Typography>
        <TeamMemberForm
          member={editingMember}
          onSave={() => {
            setEditingMember(null);
            setSnackbarMessage("Team member saved successfully.");
            setSnackbarOpen(true);
          }}
        />
      </div>

      <Grid container spacing={4}>
        {members.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member._id}>
            <Card className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <CardContent>
                <div className="flex items-center mb-4">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 80, height: 80 }}
                    className="mr-4"
                  />
                  <div>
                    <Typography
                      variant="h6"
                      component="h3"
                      className="font-semibold text-gray-800"
                    >
                      {member.name}
                    </Typography>
                    <Typography color="textSecondary" className="text-gray-600">
                      Role: {member.role}
                    </Typography>
                  </div>
                </div>
                <Typography color="primary" className="mb-2">
                  Facebook:{" "}
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {member.facebook}
                  </a>
                </Typography>
                <Typography color="primary" className="mb-4">
                  LinkedIn:{" "}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {member.linkedin}
                  </a>
                </Typography>
                <div className="flex justify-end">
                  <Tooltip title="Edit">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(member)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      color="secondary"
                      className="ml-2"
                      onClick={() => handleDelete(member._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage.includes("Error") ? "error" : "success"}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TeamMemberList;
