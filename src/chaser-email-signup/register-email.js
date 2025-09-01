import axios from 'axios'; // Import axios

export async function registerEmail(email) {
  // Make API call to the WordPress REST API endpoint

  const response = await axios.post('/wp-json/email-signup/v1/register', {
    email: email
  });

  console.log('Email contact registered:', response);
  return response.data;
}