# Contact Form Email Setup

## Overview
The contact form sends emails to `info@satwave.ai` using Resend API.

## Setup Instructions

### 1. Get Resend API Key
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variable
1. Open `.env.local` file in the project root
2. Replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   ```

### 3. Verify Domain (Optional but Recommended)
For production use, you should verify your domain with Resend:
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., satwave.ai)
3. Follow DNS verification steps
4. Once verified, update the `from` field in `/src/app/api/contact/route.ts`:
   ```typescript
   from: 'Contact Form <noreply@satwave.ai>',
   ```

### 4. Restart Development Server
After adding the API key, restart your dev server:
```bash
npm run dev
```

## How It Works

1. **User fills out the form** with:
   - First Name
   - Last Name
   - Email Address
   - Message

2. **Form submits to API route** (`/api/contact`)
   - Validates all fields
   - Checks email format

3. **API sends email via Resend**
   - To: `info@satwave.ai`
   - Reply-To: User's email address
   - Subject: "New Contact Form Submission from [Name]"
   - Body: Formatted HTML with user's information

4. **User receives feedback**
   - Success message: "Thank you! Your message has been sent successfully."
   - Error message: If something goes wrong
   - Form resets on successful submission

## Testing

### Test the form locally:
1. Fill out all fields
2. Click "Send Message"
3. Check the console for any errors
4. Verify email arrives at info@satwave.ai

### Free Tier Limits (Resend):
- 100 emails per day
- 3,000 emails per month
- Perfect for contact forms!

## Troubleshooting

**Error: "Failed to send email"**
- Check that RESEND_API_KEY is set correctly in `.env.local`
- Verify the API key is valid in Resend dashboard
- Check server console for detailed error messages

**Emails not arriving:**
- Check spam folder
- Verify the recipient email (info@satwave.ai) is correct
- Check Resend dashboard for delivery logs

**Form not submitting:**
- Open browser console to check for JavaScript errors
- Ensure all required fields are filled
- Check network tab for API request/response

## Security Notes

- Never commit `.env.local` to version control (already in .gitignore)
- API key should be kept secret
- The API route validates all inputs server-side
- Email addresses are validated with regex
- All fields are required to prevent spam

## Future Enhancements

Consider adding:
- Rate limiting to prevent spam
- CAPTCHA for additional security
- Email templates with better styling
- Auto-reply to user confirming receipt
- Database logging of submissions
