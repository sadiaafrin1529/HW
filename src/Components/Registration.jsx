import React, { useState } from 'react';

const Registration = () => {
    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleForm =async (e) => {
        e.preventDefault();
        const userInformation = {
            name,
            email,
            password,
            confirmPassword
        };
        console.log(userInformation);
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInformation),
            });

            if (response.ok) {
                console.log('Registration successful');
                // Optionally, you can redirect the user to a success page.
            } else {
                console.error('Registration failed');
                // Handle the registration failure, e.g., display an error message.
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Registration Form</h1>
            <form onSubmit={handleForm} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username" style={{ display: 'block' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setUseremail(e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password" style={{ display: 'block' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="confirm_password" style={{ display: 'block' }}>Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="submit"
                        value="Register"
                        style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}
                    />
                </div>
            </form>
        </div>
    );
};

export default Registration;