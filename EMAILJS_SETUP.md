# EmailJS Setup for Contact Form

## Quick Setup (5 minutes)

1. **Sign up at EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (allows 200 emails/month)

2. **Add Email Service**
   - Go to Email Services
   - Click "Add New Service"
   - Choose "Gmail" 
   - Connect your Gmail account
   - Service ID will be auto-generated (e.g., "service_xxxxxx")

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Template ID: `template_contact`
   - Template content:
   ```
   Subject: Contact Form: {{from_name}} - {{service}}
   
   New contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}
   Industry: {{industry}}
   Service: {{service}}
   
   Message:
   {{message}}
   ```
   - To Email: khubaib.khalid@emaago.com
   - Reply To: {{from_email}}

4. **Get Public Key**
   - Go to Account → General
   - Copy your Public Key

5. **Update contact.jsx**
   - Replace `'YOUR_PUBLIC_KEY'` with your actual public key
   - Replace `'service_lingoscribe'` with your Service ID (if different)

Done! The form will now send emails directly to khubaib.khalid@emaago.com
