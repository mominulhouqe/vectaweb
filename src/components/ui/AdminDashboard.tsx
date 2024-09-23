"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";
import Navbars from "./AdminNavber";

interface CaseStudy {
  _id: string;
  title: string;
  description: string;
  challenges: string;
  solutions: string;
  imgSrc: string;
  demoLink: string;
}

interface FormData {
  title: string;
  description: string;
  challenges: string;
  solutions: string;
  imgSrc: string;
  demoLink: string;
}

const AdminDashboard: React.FC = () => {
  const router = useRouter(); // For redirection
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [editCaseStudy, setEditCaseStudy] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    challenges: "",
    solutions: "",
    imgSrc: "",
    demoLink: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Ensure localStorage is only accessed in the client environment
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("x-auth-token");
      if (!storedToken) {
        router.push("/adminonlylogin");
        return;
      }
      setToken(storedToken);
    }
  }, [router]);

  useEffect(() => {
    if (!token) return;

    const fetchCaseStudies = async () => {
      setLoading(true);
      try {
        const response = await axios.get<CaseStudy[]>(
          "https://vectaweb-backend.vercel.app/api/case-studies",
          {
            headers: { "x-auth-token": token },
          }
        );
        setCaseStudies(response.data);
      } catch (error) {
        setError("Error fetching case studies.");
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, [token]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      await axios.post(
        "https://vectaweb-backend.vercel.app/api/case-studies",
        formData,
        {
          headers: { "x-auth-token": token },
        }
      );
      const response = await axios.get<CaseStudy[]>(
        "https://vectaweb-backend.vercel.app/api/case-studies",
        {
          headers: { "x-auth-token": token },
        }
      );
      setCaseStudies(response.data);
      setFormData({
        title: "",
        description: "",
        challenges: "",
        solutions: "",
        imgSrc: "",
        demoLink: "",
      });
      setSuccess("Case study added successfully.");
    } catch (error) {
      setError("Error adding case study.");
      console.error("Error adding case study:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    if (editCaseStudy) {
      setLoading(true);
      try {
        await axios.put(
          `https://vectaweb-backend.vercel.app/api/case-studies/${editCaseStudy._id}`,
          formData,
          {
            headers: { "x-auth-token": token },
          }
        );
        const response = await axios.get<CaseStudy[]>(
          "https://vectaweb-backend.vercel.app/api/case-studies",
          {
            headers: { "x-auth-token": token },
          }
        );
        setCaseStudies(response.data);
        setEditCaseStudy(null);
        setFormData({
          title: "",
          description: "",
          challenges: "",
          solutions: "",
          imgSrc: "",
          demoLink: "",
        });
        setSuccess("Case study updated successfully.");
      } catch (error) {
        setError("Error editing case study.");
        console.error("Error editing case study:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://vectaweb-backend.vercel.app/api/case-studies/${id}`,
        {
          headers: { "x-auth-token": token },
        }
      );
      const response = await axios.get<CaseStudy[]>(
        "https://vectaweb-backend.vercel.app/api/case-studies",
        {
          headers: { "x-auth-token": token },
        }
      );
      setCaseStudies(response.data);
      setSuccess("Case study deleted successfully.");
    } catch (error) {
      setError("Error deleting case study.");
      console.error("Error deleting case study:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editCaseStudy ? handleEdit() : handleAdd();
  };

  return (
    <>
      <Navbars />
      <Container style={{ padding: 16, marginTop: 64 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {editCaseStudy ? "Edit Case Study" : "Add New Case Study"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Solutions"
                name="solutions"
                value={formData.solutions}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Image Source"
                name="imgSrc"
                value={formData.imgSrc}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Demo Link"
                name="demoLink"
                value={formData.demoLink}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 16 }}
                disabled={loading}
              >
                {editCaseStudy ? "Update" : "Add"}
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Case Studies
            </Typography>
            {loading ? (
              <CircularProgress />
            ) : (
              <List>
                {caseStudies.map((study) => (
                  <ListItem key={study._id} style={{ marginBottom: 16 }}>
                    <Card style={{ width: "100%" }}>
                      <CardContent>
                        <Typography variant="h5">{study.title}</Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setEditCaseStudy(study);
                            setFormData(study);
                          }}
                          style={{ marginRight: 8 }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(study._id)}
                        >
                          Delete
                        </Button>
                      </CardContent>
                    </Card>
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>
        </Grid>

        {/* Snackbar for success messages */}
        <Snackbar
          open={Boolean(success)}
          autoHideDuration={6000}
          onClose={() => setSuccess(null)}
        >
          <Alert onClose={() => setSuccess(null)} severity="success">
            {success}
          </Alert>
        </Snackbar>

        {/* Snackbar for error messages */}
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={() => setError(null)}
        >
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default AdminDashboard;
