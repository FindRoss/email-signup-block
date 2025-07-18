import axios from 'axios'; // Import axios

export async function registerEmail(email) {
  // Make API call to the WordPress REST API endpoint
  // console.log('Registering email contact: ', email);

  const response = await axios.post('/wp-json/email-signup/v1/register', {
    email: email
  });

  // console.log('Email contact registered:', response.data);
  return response.data;
}