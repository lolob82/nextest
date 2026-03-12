# 🚀 NatureMama Heritage - Complete Deployment Guide

This guide will walk you through deploying your complete e-commerce website with shopping cart, order processing, and email notifications.

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ AWS Account with administrative access
- ✅ Node.js 16+ installed on your computer
- ✅ A domain name (optional, but recommended)
- ✅ Email address for order notifications

## 🏗️ Architecture Overview

Your website includes:
- **Frontend**: React website hosted on AWS Amplify
- **Backend**: Lambda function for order processing
- **Database**: DynamoDB for storing orders
- **Email**: Amazon SES for order confirmations
- **API**: API Gateway for secure communication

---

## 📧 Step 1: Set Up Amazon SES (Email Service)

### 1.1 Verify Your Email Address
1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Click **"Verified identities"** in the left menu
3. Click **"Create identity"**
4. Select **"Email address"**
5. Enter your business email (e.g., `orders@naturemama.com`)
6. Click **"Create identity"**
7. **Check your email** and click the verification link

### 1.2 Request Production Access (Important!)
1. In SES Console, click **"Account dashboard"**
2. If you see "Sandbox mode", click **"Request production access"**
3. Fill out the form:
   - **Use case**: Transactional emails
   - **Website URL**: Your website domain
   - **Description**: "Order confirmation emails for e-commerce website"
4. Submit the request (approval usually takes 24-48 hours)

> **Note**: In sandbox mode, you can only send emails to verified addresses. Production access allows sending to any email.

---

## 🏗️ Step 2: Deploy Backend Infrastructure

### 2.1 Deploy CloudFormation Stack
1. Go to [AWS CloudFormation Console](https://console.aws.amazon.com/cloudformation/)
2. Click **"Create stack"** → **"With new resources"**
3. Select **"Upload a template file"**
4. Upload the `cloudformation-template.yaml` file from your project
5. Click **"Next"**

### 2.2 Configure Stack Parameters
1. **Stack name**: `naturemama-heritage-backend`
2. **FromEmail**: Enter your verified SES email (e.g., `orders@naturemama.com`)
3. **WebsiteDomain**: Enter your website domain (e.g., `https://naturemama.com`)
4. Click **"Next"** twice
5. Check **"I acknowledge that AWS CloudFormation might create IAM resources"**
6. Click **"Create stack"**

### 2.3 Wait for Deployment
- The stack will take 5-10 minutes to deploy
- Wait until status shows **"CREATE_COMPLETE"**
- If it fails, check the "Events" tab for error details

### 2.4 Get Your API Endpoint
1. Go to the **"Outputs"** tab of your stack
2. Copy the **"ApiEndpoint"** value
3. It will look like: `https://abc123.execute-api.us-east-1.amazonaws.com/prod/orders`

---

## ⚙️ Step 3: Configure Your Website

### 3.1 Update Environment Variables
1. Open the `.env` file in your project
2. Replace `VITE_API_ENDPOINT` with your actual API endpoint:
   ```
   VITE_API_ENDPOINT=https://your-actual-api-endpoint.execute-api.us-east-1.amazonaws.com/prod/orders
   ```
3. Update `VITE_FROM_EMAIL` with your verified email:
   ```
   VITE_FROM_EMAIL=orders@naturemama.com
   ```
4. Save the file

### 3.2 Test Locally
1. Open terminal in your project folder
2. Run: `npm run dev`
3. Open `http://localhost:5173` in your browser
4. Test the shopping cart:
   - Add products to cart
   - Go to checkout
   - Fill out the form with a test email
   - Submit the order
5. Check if you receive the confirmation email

---

## 🌐 Step 4: Deploy to AWS Amplify

### 4.1 Prepare for Deployment
1. Create a GitHub repository for your project
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/naturemama-heritage.git
   git push -u origin main
   ```

### 4.2 Deploy with Amplify
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select **"GitHub"** and authorize access
4. Choose your repository and `main` branch
5. Click **"Next"**

### 4.3 Configure Build Settings
1. Amplify will auto-detect the build settings
2. Add environment variables:
   - Click **"Advanced settings"**
   - Add each variable from your `.env` file (without `VITE_` prefix for Amplify)
3. Click **"Next"** then **"Save and deploy"**

### 4.4 Wait for Deployment
- First deployment takes 10-15 minutes
- You'll get a URL like: `https://main.abc123.amplifyapp.com`

---

## 🧪 Step 5: Test Your Complete System

### 5.1 End-to-End Testing
1. Visit your deployed website
2. Browse products and add items to cart
3. Go through the complete checkout process
4. Use a real email address for testing
5. Verify you receive the order confirmation email
6. Check the DynamoDB table for your order

### 5.2 Check Order Storage
1. Go to [DynamoDB Console](https://console.aws.amazon.com/dynamodb/)
2. Click **"Tables"** → **"NatureMamaOrders"**
3. Click **"Explore table items"**
4. You should see your test orders

---

## 🔧 Step 6: Customize Your Website

### 6.1 Update Company Information
Edit these files to match your business:
- `src/components/Footer.jsx` - Contact information
- `src/components/CompanyTimeline.jsx` - Your company history
- `src/components/TeamSection.jsx` - Your team members
- `src/pages/About.jsx` - Company story

### 6.2 Update Products
Edit `src/pages/Products.jsx` and `src/components/FeaturedProducts.jsx`:
- Replace product images with your actual products
- Update product names, descriptions, and prices
- Add your real product categories

### 6.3 Customize Styling
- Colors: Edit `tailwind.config.js`
- Fonts: Update the Google Fonts import in `src/index.css`
- Logo: Replace the leaf icon in `src/components/Navbar.jsx`

---

## 🎯 Step 7: Production Checklist

### 7.1 Security & Performance
- [ ] SES production access approved
- [ ] Test order processing with real emails
- [ ] Verify all form validations work
- [ ] Test mobile responsiveness
- [ ] Check website loading speed

### 7.2 Business Setup
- [ ] Add real product images and descriptions
- [ ] Set up payment processing (Stripe, PayPal, etc.)
- [ ] Configure shipping rates and tax calculations
- [ ] Set up inventory management
- [ ] Create privacy policy and terms of service

### 7.3 Marketing
- [ ] Set up Google Analytics
- [ ] Configure SEO meta tags
- [ ] Set up social media links
- [ ] Create newsletter signup incentives
- [ ] Plan product launch strategy

---

## 🆘 Troubleshooting

### Common Issues

**❌ "Email not verified" error**
- Solution: Verify your email in SES console and wait for confirmation

**❌ "CORS error" in browser**
- Solution: Check that your API Gateway has CORS enabled and your domain is correct

**❌ Orders not saving to database**
- Solution: Check Lambda function logs in CloudWatch for error details

**❌ Emails not sending**
- Solution: Ensure SES has production access and your email is verified

**❌ Website not loading after deployment**
- Solution: Check Amplify build logs and ensure all environment variables are set

### Getting Help

1. **AWS Support**: Use AWS Support Center for infrastructure issues
2. **Documentation**: Check AWS documentation for specific services
3. **Logs**: Always check CloudWatch logs for Lambda function errors
4. **Testing**: Use the AWS console to test individual components

---

## 🎉 Congratulations!

Your NatureMama Heritage e-commerce website is now live with:
- ✅ Complete shopping cart functionality
- ✅ Secure order processing
- ✅ Automated email confirmations
- ✅ Order storage and tracking
- ✅ Mobile-responsive design
- ✅ Professional email templates

Your customers can now browse products, add them to cart, complete checkout, and receive beautiful confirmation emails - all automatically!

---

## 📞 Support

If you need help with any step, the deployment creates detailed logs in AWS CloudWatch that can help diagnose issues. Each component is designed to work independently, making troubleshooting easier.

**Next Steps**: Consider adding payment processing, inventory management, and advanced analytics to complete your e-commerce platform.