import { Typography, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';

function CreateCartoons() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [title, setTitle] = useState('Create Cartoons');

  useEffect(() => {
    const newTitle = `Create Cartoon-${formData.name}`;

    setTitle(newTitle);
  }, [formData.name]);

  useEffect(() => {
    setTitle('Create Cartoon');
    return () => {
      console.log('destroy');
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', description: '' });
  };

  const handleFormChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };
  return (
    <>
      <Navigation />
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <form>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleFormChange}
        />
        <Button variant="contained" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </form>
    </>
  );
}
export default CreateCartoons;
