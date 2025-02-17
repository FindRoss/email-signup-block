import { registerEmail } from './register-email';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.email-signup__form');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = form.querySelector('#email').value;

      try {
        const result = await registerEmail(email);
        console.log('Form submitted successfully:', result);

        // Two screens I am dealing with
        const formScreen = document.querySelector('.email-signup--form-screen');
        const successScreen = document.querySelector('.email-signup--success-screen');

        const formScreenHeight = formScreen.clientHeight;
        successScreen.style.height = `${formScreenHeight}px`;

        if (successScreen) {
          successScreen.style.display = 'block';
        }

        if (formScreen) {
          formScreen.style.display = 'none';
        }

        // clear the email input
        form.querySelector('#email').value = '';

        // set a timeout so the form screen is shown again after 5 seconds  
        setTimeout(() => {
          if (successScreen) {
            successScreen.style.display = 'none';
            successScreen.style.height = 'auto';
          }

          if (formScreen) {
            formScreen.style.display = 'block';
          }
        }, 5000);

      } catch (error) {
        console.error('Form submission failed:', error);
      }
    });
  }
});
