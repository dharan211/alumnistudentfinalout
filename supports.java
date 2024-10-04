function showForm(type) {
    const alumniForm = document.getElementById('alumniForm');
    const studentForm = document.getElementById('studentForm');
  
    if (type === 'alumni') {
      alumniForm.classList.toggle('hidden');
      studentForm.classList.add('hidden');
    } else if (type === 'students') {
      studentForm.classList.toggle('hidden');
      alumniForm.classList.add('hidden');
    }
  }
  
  

  

  