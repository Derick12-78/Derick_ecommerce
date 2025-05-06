import React from 'react';

function Sidebar() {
  return (
    <div style={styles.sidebar}>

      <h2 style={styles.sidebarTitle}>Sidebar</h2>
      <ul style={styles.sidebarList}>
        <li style={styles.sidebarItem}>Home</li>
        <li style={styles.sidebarItem}>About</li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    top: 80,
    left: 0,
    height: '100%',
    width: '250px',
    backgroundColor: '#111',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out',
  },
  sidebarTitle: {
    color: 'white',
    marginBottom: '20px',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: '0',
  },
  sidebarItem: {
    padding: '10px 0',
    cursor: 'pointer',
    color: 'white',
  },
};

export default Sidebar;
