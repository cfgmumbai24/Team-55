import React, { useState } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        faminc: '',
        gender: '',
        marstat: '',
        aadharNo: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Takes the full height of the viewport
        }}>
            <h1 style={{
                fontSize: '20px',
                width: '100%',
                textAlign: 'center',
                margin: '0 0 20px 0',
                padding: '10px 0',
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textDecorationSkipInk: 'auto',
                textUnderlineOffset: '5px'
            }}>Data Collection Form</h1>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '500px' // Increased form width
            }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth // Makes the TextField take up the full width of the form
                />
                <TextField
                    label="Age"
                    type="number"
                    variant="outlined"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Family Income"
                    type="number"
                    variant="outlined"
                    name="familyincome"
                    value={formData.faminc}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Marital Status</FormLabel>
                    <RadioGroup
                        row
                        name="status"
                        value={formData.marstat}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="married" control={<Radio />} label="Married" />
                        <FormControlLabel value="single" control={<Radio />} label="Single" />
                        <FormControlLabel value="widow" control={<Radio />} label="Widow" />
                        <FormControlLabel value="widower" control={<Radio />} label="Widower" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    label="Aadhar No."
                    variant="outlined"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </main>
    );
};

export default UserForm;