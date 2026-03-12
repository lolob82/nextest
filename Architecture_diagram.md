# 🏗️ NatureMama Heritage - System Architecture

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           NATUREMAMA HERITAGE E-COMMERCE                        │
│                                 ARCHITECTURE                                    │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌──────────────────┐    ┌─────────────────────────────────┐
│                 │    │                  │    │                                 │
│   CUSTOMER      │    │   AWS AMPLIFY    │    │         AWS BACKEND             │
│                 │    │                  │    │                                 │
│  🌐 Browser     │◄──►│  📱 React App    │◄──►│  ⚡ API Gateway                │
│  📱 Mobile      │    │  🎨 Tailwind CSS │    │  🔧 Lambda Function            │
│                 │    │  ⚛️  Components   │    │  📊 DynamoDB                   │
│                 │    │                  │    │  📧 Amazon SES                 │
└─────────────────┘    └──────────────────┘    └─────────────────────────────────┘
```

## Detailed Component Flow

### 1. Frontend Layer (AWS Amplify)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND (React)                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🏠 Home Page           📦 Products Page        🛒 Shopping Cart                │
│  ├─ Hero Video          ├─ Product Catalog     ├─ Cart Management              │
│  ├─ Featured Products   ├─ Search & Filter     ├─ Quantity Controls            │
│  ├─ Testimonials        ├─ Add to Cart         └─ Checkout Process             │
│  └─ Newsletter          └─ Product Gallery                                     │
│                                                                                 │
│  ℹ️ About Page           📞 Contact Page        🧪 Product Quiz                │
│  ├─ Company Timeline    ├─ Contact Form        ├─ Interactive Questions        │
│  ├─ Team Profiles       ├─ Location Maps       ├─ Product Recommendations     │
│  └─ Mission & Values    └─ Business Info       └─ Personalized Results        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 2. API Layer (AWS API Gateway)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            API GATEWAY (REST API)                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🔗 Endpoint: /orders                                                          │
│  ├─ POST /orders        ← Order submission from checkout                       │
│  ├─ OPTIONS /orders     ← CORS preflight handling                             │
│  ├─ 🔒 CORS Enabled     ← Cross-origin requests allowed                       │
│  └─ 🛡️ Rate Limiting     ← Protection against abuse                            │
│                                                                                 │
│  📊 Request Flow:                                                              │
│  Customer → Checkout Form → API Gateway → Lambda → DynamoDB + SES             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 3. Processing Layer (AWS Lambda)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         LAMBDA FUNCTION (Node.js 20.x)                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  📥 Input Processing:                                                          │
│  ├─ Parse order data from API Gateway                                         │
│  ├─ Validate customer information                                              │
│  ├─ Validate email format & phone number                                      │
│  └─ Generate unique order number                                               │
│                                                                                 │
│  💾 Data Storage:                                                              │
│  ├─ Store complete order in DynamoDB                                          │
│  ├─ Include customer info, items, totals                                      │
│  ├─ Add timestamps and order status                                           │
│  └─ Generate order confirmation                                                │
│                                                                                 │
│  📧 Email Processing:                                                          │
│  ├─ Generate HTML email template                                              │
│  ├─ Create plain text version                                                 │
│  ├─ Send via Amazon SES                                                       │
│  └─ Return success/error response                                              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 4. Data Layer (DynamoDB)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            DYNAMODB TABLE: NatureMamaOrders                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🔑 Primary Key: orderNumber (String)                                          │
│                                                                                 │
│  📋 Order Record Structure:                                                    │
│  ├─ orderNumber: "NM12345678"                                                 │
│  ├─ customerInfo: {                                                           │
│  │   ├─ fullName: "Customer Name"                                            │
│  │   ├─ email: "customer@email.com"                                          │
│  │   ├─ street: "123 Main St"                                                │
│  │   ├─ houseNumber: "123"                                                   │
│  │   ├─ postalCode: "12345"                                                  │
│  │   ├─ city: "City Name"                                                    │
│  │   └─ phoneNumber: "+1234567890"                                           │
│  │   }                                                                        │
│  ├─ items: [                                                                  │
│  │   ├─ { id, name, price, quantity, image }                                 │
│  │   └─ { ... }                                                              │
│  │   ]                                                                        │
│  ├─ total: "149.99"                                                           │
│  ├─ orderDate: "2026-03-12T10:30:00Z"                                        │
│  ├─ status: "confirmed"                                                       │
│  └─ createdAt: "2026-03-12T10:30:00Z"                                        │
│                                                                                 │
│  ⚡ Features:                                                                  │
│  ├─ Pay-per-request billing                                                   │
│  ├─ Point-in-time recovery                                                    │
│  ├─ DynamoDB Streams enabled                                                  │
│  └─ Automatic scaling                                                         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 5. Email Layer (Amazon SES)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              AMAZON SES (Email Service)                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  📧 Email Configuration:                                                       │
│  ├─ From: orders@naturemama.com (verified)                                    │
│  ├─ To: Customer email from order                                             │
│  ├─ Subject: "Order Confirmation - [OrderNumber]"                             │
│  └─ Content: HTML + Plain text versions                                       │
│                                                                                 │
│  🎨 Email Template Features:                                                   │
│  ├─ Branded header with company logo                                          │
│  ├─ Order number prominently displayed                                        │
│  ├─ Complete order details table                                              │
│  ├─ Customer shipping information                                             │
│  ├─ Order timeline visualization                                              │
│  ├─ Contact information footer                                                │
│  └─ Mobile-responsive design                                                  │
│                                                                                 │
│  🔒 Security & Compliance:                                                     │
│  ├─ DKIM signing enabled                                                      │
│  ├─ SPF records configured                                                    │
│  ├─ Bounce and complaint handling                                             │
│  └─ Production access for unlimited sending                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

### Order Processing Flow
```
1. Customer Journey:
   🛒 Browse Products → 🛍️ Add to Cart → 📝 Checkout Form → ✅ Order Confirmation

2. Technical Flow:
   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
   │   React     │    │ API Gateway │    │   Lambda    │    │  DynamoDB   │
   │   Frontend  │───►│   Endpoint  │───►│  Function   │───►│   Storage   │
   │             │    │             │    │             │    │             │
   └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                │
                                                ▼
                                         ┌─────────────┐
                                         │ Amazon SES  │
                                         │    Email    │
                                         │   Service   │
                                         └─────────────┘
```

### Shopping Cart State Management
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           CART CONTEXT (React State)                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🔄 State Management:                                                          │
│  ├─ Add to Cart: Product → Cart Context → Local Storage                       │
│  ├─ Update Quantity: Cart Context → Re-render Components                      │
│  ├─ Remove Item: Cart Context → Update Local Storage                          │
│  └─ Clear Cart: After successful order → Reset state                          │
│                                                                                 │
│  💾 Persistence:                                                               │
│  ├─ Local Storage: Cart persists across browser sessions                      │
│  ├─ Real-time Updates: All components sync automatically                      │
│  └─ Cross-page Navigation: Cart state maintained                              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Security Architecture

### Authentication & Authorization
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              SECURITY LAYERS                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🌐 Frontend Security:                                                         │
│  ├─ HTTPS enforced by Amplify                                                 │
│  ├─ Input validation on all forms                                             │
│  ├─ Email & phone format validation                                           │
│  └─ XSS protection via React                                                  │
│                                                                                 │
│  🔗 API Security:                                                              │
│  ├─ CORS properly configured                                                  │
│  ├─ Rate limiting on API Gateway                                              │
│  ├─ Request size limits                                                       │
│  └─ HTTPS-only endpoints                                                      │
│                                                                                 │
│  🔒 Backend Security:                                                          │
│  ├─ IAM roles with least privilege                                            │
│  ├─ Lambda function isolation                                                 │
│  ├─ DynamoDB encryption at rest                                               │
│  └─ CloudWatch logging for audit                                              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Scalability & Performance

### Auto-Scaling Components
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            SCALABILITY FEATURES                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  📈 Automatic Scaling:                                                         │
│  ├─ AWS Amplify: Global CDN with auto-scaling                                 │
│  ├─ API Gateway: Handles thousands of concurrent requests                     │
│  ├─ Lambda: Auto-scales from 0 to 1000+ concurrent executions                │
│  ├─ DynamoDB: On-demand scaling for any traffic level                        │
│  └─ SES: Scales to millions of emails per day                                │
│                                                                                 │
│  ⚡ Performance Optimizations:                                                 │
│  ├─ React code splitting for faster loading                                   │
│  ├─ Image optimization and lazy loading                                       │
│  ├─ CDN caching for static assets                                             │
│  ├─ Lambda cold start optimization                                            │
│  └─ DynamoDB single-table design                                              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Monitoring & Logging

### Observability Stack
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          MONITORING & LOGGING                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  📊 CloudWatch Integration:                                                    │
│  ├─ Lambda function logs and metrics                                          │
│  ├─ API Gateway request/response logs                                         │
│  ├─ DynamoDB performance metrics                                              │
│  ├─ SES delivery and bounce metrics                                           │
│  └─ Custom business metrics                                                   │
│                                                                                 │
│  🚨 Alerting:                                                                  │
│  ├─ Lambda function errors                                                    │
│  ├─ API Gateway 4xx/5xx errors                                               │
│  ├─ DynamoDB throttling                                                       │
│  ├─ SES bounce rate monitoring                                                │
│  └─ Custom business alerts                                                    │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Cost Optimization

### Pay-as-you-Scale Pricing
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              COST STRUCTURE                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  💰 Service Costs (Estimated Monthly):                                        │
│  ├─ AWS Amplify: $1-5 (hosting + build minutes)                              │
│  ├─ API Gateway: $3.50 per million requests                                   │
│  ├─ Lambda: $0.20 per million requests                                        │
│  ├─ DynamoDB: $1.25 per million requests                                      │
│  ├─ SES: $0.10 per 1,000 emails                                              │
│  └─ CloudWatch: $0.50 per GB of logs                                         │
│                                                                                 │
│  📈 Scaling Economics:                                                         │
│  ├─ No upfront costs or minimum fees                                          │
│  ├─ Pay only for actual usage                                                 │
│  ├─ Automatic cost optimization                                               │
│  └─ Free tier eligible for new accounts                                       │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Key Benefits of This Architecture

### ✅ **Serverless & Scalable**
- Zero server management required
- Automatically scales from 0 to millions of users
- Pay only for actual usage

### ✅ **Highly Available**
- Multi-AZ deployment across AWS regions
- 99.99% uptime SLA
- Automatic failover and recovery

### ✅ **Secure by Design**
- AWS security best practices
- Encrypted data at rest and in transit
- IAM-based access control

### ✅ **Developer Friendly**
- Infrastructure as Code (CloudFormation)
- Easy deployment and updates
- Comprehensive logging and monitoring

### ✅ **Cost Effective**
- No upfront infrastructure costs
- Automatic cost optimization
- Free tier eligible

This architecture provides a production-ready, scalable e-commerce platform that can handle everything from a few orders per day to thousands of orders per hour, all while maintaining security, performance, and cost efficiency.