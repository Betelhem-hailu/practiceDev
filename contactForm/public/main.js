const form = document.getElementById('contactForm');
form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };
  
  const response = await fetch('http://localhost:3000/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (response.ok) {
    alert('We have received  your message successfully!');
  } else {
    alert('Error sending message');
  }
});

