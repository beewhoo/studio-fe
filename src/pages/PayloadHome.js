import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const backendUrl = process.env.REACT_APP_BACKEND_URL;

const buttonStyles = {
    padding: '10px 20px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    marginRight: '10px'
};

const buttonContainerStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const containerStyles = {
    fontFamily: 'Arial',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #00ccff, #cc00ff)'
};

const navStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
};

const pageTitleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '20px'
};


const LoginButton = (props) => <a href={`${backendUrl}/api/connect/capsule`}>
    <button style={buttonStyles}>Connect using Capsule</button>
</a>;
const LogoutButton = (props) => <button style={buttonStyles} onClick={props.onClick}>Logout</button>;

const Emoji = (props) => <span style={{ fontSize: '100px' }} rrole="img" aria-label="wave">👋</span>




const PayloadHome = (props) => {

    console.log(props);

    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('payload_jwt'));

    console.log(isLogged);


    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('payload_jwt');
        localStorage.removeItem('payload_username');
        setIsLogged(false);
    };

    const handleStrapiBackend = (e) => {
        window.alert('Ask Bibek for Backend admin login!');
        window.open('https://studio-strapi-api.herokuapp.com/admin', '_blank')
    }

    const handleStrapiDocs = (e) => {
        window.open('https://docs.strapi.io', '_blank')
    }


    let text;

    if (isLogged) {
        text = `Hello ${localStorage.getItem('payload_username')}, you are connected to Payload studio!`;

        const orgPath = 'projects-org';

        return <div style={containerStyles}>
            <p style={pageTitleStyles}>{text}</p>
            <Emoji />
        </div>;
    } else {
        text = 'You are not connected. Please log in.';

        return <div style={containerStyles}>
            <h1 style={pageTitleStyles}>Studio</h1>
            <p style={pageTitleStyles}>{text}</p>

            <div style={buttonContainerStyles}>
                <LoginButton providerName={'capsule'} />
            </div>
        </div>;
    }

}

export default PayloadHome;