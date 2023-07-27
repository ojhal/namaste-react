import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        {/* Replace 'logo.png' with the path to your logo image */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJ7CBZpGO0w58fuzfGwZf0sPkfK-KIAI_56W5-SKN&s" alt="Logo" style={logoImageStyle} />
      </div>
      <div style={searchBarStyle}>
        {/* You can use any search input component library or create your own */}
        <input type="text" placeholder="Search..." style={searchInputStyle} />
        {/* You can add a search button here if you want */}
      </div>
      <div style={userIconStyle}>
        {/* Placeholder for the user icon */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User" style={userIconImageStyle} />
      </div>
    </header>
  );
};

// Styling for the header and its components
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
  padding: '0 20px',
  backgroundColor: '#f0f0f0',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoImageStyle = {
  height: '60px', // Set the height of your logo image
};

const searchBarStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  marginLeft: '20px', // Add some spacing between logo and search bar
};

const searchInputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
};

const userIconStyle = {
  display: 'flex',
  alignItems: 'center',
};

const userIconImageStyle = {
  height: '40px',
  marginLeft: '20px', // Add some spacing between search bar and user icon
};

export default Header;
