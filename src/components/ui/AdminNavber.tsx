import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbars: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('x-auth-token');

    // Redirect to home page
    router.push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/admin/dashboard" passHref>
              <span style={{ textDecoration: 'none' }}>Dashboard</span>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/admin/case-studies" passHref>
              <span style={{ textDecoration: 'none' }}>Case Studies</span>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/admin/add-member" passHref>
              <span style={{ textDecoration: 'none' }}>Add Team Member</span>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/admin/settings" passHref>
              <span style={{ textDecoration: 'none' }}>Settings</span>
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbars;
