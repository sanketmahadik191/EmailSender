# Email Sending Application

## Hosted Link - [Click here](https://emailsender-j9rw.onrender.com/)

## Overview
This is a simple Node.js application that allows users to send emails using a form. The application uses the Nodemailer library to send emails and the Express.js framework to handle HTTP requests.

## Features
- Email Sending: Users can send emails using a form with fields for name, email, subject, and message.
- Validation: The application validates user input to ensure that the name and email fields are not empty.
- Email Template: The application uses an HTML template to format the email body.

## Setup
### Install Dependencies
Run `npm install` to install the required dependencies.

### Create Environment Variables
   Create a `.env` file with the following variables:
   - SMTP_USER: Your Gmail username.
   - SMTP_PASS: Your Gmail password.

  Enter your username , password key given by google email account

### Start the Server
Run `node app.js` to start the server.

## Usage
1. Open the Form
Open the form at [http://localhost:3000](http://localhost:3000) in your web browser.
2. Fill in the Form
Fill in the form with your name, email, subject, and message.
3. Submit the Form
Click the "Send Email" button to send the email.

### Contributions
Contributions are welcome. Please create a pull request with your changes.

## Made By - Sanket Mahadik
