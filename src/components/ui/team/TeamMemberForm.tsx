"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button, TextField, Grid, Typography, Paper } from "@mui/material";

// Define TypeScript types
interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  facebook: string;
  linkedin: string;
  image?: string;
}

interface TeamMemberFormProps {
  member?: TeamMember | undefined | null;
  onSave: () => void;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ member, onSave }) => {
  const [formData, setFormData] = useState<TeamMember>({
    name: member ? member.name : "",
    role: member ? member.role : "",
    facebook: member ? member.facebook : "",
    linkedin: member ? member.linkedin : "",
    image: member ? member.image : "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (member) {
        await axios.put(
          `https://vectaweb-backend.vercel.app/api/teamMembers/${member._id}`,
          formData
        );
      } else {
        await axios.post(
          "https://vectaweb-backend.vercel.app/api/teamMembers",
          formData
        );
      }
      if (onSave && typeof onSave === "function") {
        onSave(); // Call the onSave function if provided
      }
      // Clear the form data
      setFormData({
        name: "",
        role: "",
        facebook: "",
        linkedin: "",
        image: "",
      });
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  return (
    <Paper
      elevation={3}
      className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg"
    >
      <Typography variant="h5" className="mb-4 font-semibold text-gray-800">
        {member ? "Update Team Member" : "Add Team Member"}
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="role"
              label="Role"
              value={formData.role}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="facebook"
              label="Facebook URL"
              value={formData.facebook}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="linkedin"
              label="LinkedIn URL"
              value={formData.linkedin}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="image"
              label="Image URL"
              value={formData.image}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
        </Grid>
        <div className="flex justify-end mt-4">
          <Button type="submit" variant="contained" color="primary">
            {member ? "Update Member" : "Add Member"}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default TeamMemberForm;
