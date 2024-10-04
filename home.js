// JavaScript for the dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', () => {
      document.querySelector('.dropdown-content').style.display = 'block';
    });
  
    dropdown.addEventListener('mouseout', () => {
      document.querySelector('.dropdown-content').style.display = 'none';
    });
  });
  
  // Modal popup for "Alumni Profile"
  const alumniBtn = document.querySelector('.alumni-btn');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.close');
  
  alumniBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));