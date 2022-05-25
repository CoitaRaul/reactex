import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const pages = [
  { path: '/', title: 'HomePage' },
  { path: '/cartoons', title: 'Cartoons' },
  { path: '/create-cartoon', title: 'Create Cartoon' },
];

function Navigation() {
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cartoons
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleRouteChange(page.path);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
