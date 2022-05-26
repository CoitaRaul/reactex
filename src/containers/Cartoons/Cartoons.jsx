import { Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Navigation from '../../components/Navigation';
import CartoonCard from './CartoonCard';

const cartoons = [
  { name: 'Sailor Moon', description: 'asas', image: 'https://picsum.photos/200' },
  { name: 'Tom and Jerry', description: 'asas', image: 'https://picsum.photos/200' },
  { name: 'Courage the Cowardly Dog', description: 'sasaf', image: 'https://picsum.photos/200' },
  { name: 'Cow and Chicken', description: 'adad', image: 'https://picsum.photos/200' },
  { name: 'Ben 10', description: 'dadaa', image: 'https://picsum.photos/200' },
];

function Cartoons() {
  const [open, setOpen] = useState(false);

  const CenterModal = styled(Modal)({
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: 'background.paper',
    transform: 'translate(-50%, -50%)',
    width: 250,
    border: '2px solid #000',
    justifyContent: 'center',
    alignContent: 'center',
  });

  const [currentCartoon, setCurrentCartoon] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (title, image, description) => {
    setOpen(!open);
    setCurrentCartoon({ title, image, description });
  };

  return (
    <>
      <Navigation />
      <Typography variant="h1" gutterBottom sx={{ marginTop: 10 }}>
        Cartoons
      </Typography>
      {cartoons.map((cartoon) => {
        return (
          <CartoonCard
            title={cartoon.name}
            image={cartoon.image}
            description={cartoon.description}
            key={cartoon.name}
            handleOpenModal={handleOpenModal}
          />
        );
      })}

      <CenterModal open={open} onClose={handleClose}>
        <Box>
          <Typography variant="h6" component="h2">
            {currentCartoon.title}
          </Typography>
          <img src={currentCartoon.image} />
          <Typography sx={{ mt: 2 }}>{currentCartoon.description}</Typography>
        </Box>
      </CenterModal>
    </>
  );
}
export default Cartoons;
