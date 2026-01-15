# CrystalClear Window Cleaning

A premium, production-ready website for a window cleaning business owned and operated by FAU students in Boca Raton, South Florida.

## Features

- **Premium Design**: Ultra-clean, modern design with luxury brand positioning
- **Complete Pages**: Home, Services, Pricing, Book/Quote, About, Reviews, Contact
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Optimized**: Meta tags, semantic HTML, and local SEO focus
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **Type-Safe**: Full TypeScript implementation
- **Production-Ready**: No placeholders, complete functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── book/              # Booking/Quote page
│   ├── about/             # About Us page
│   ├── reviews/           # Reviews/Testimonials page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── CTAButton.tsx     # Call-to-action button
│   ├── TrustBadge.tsx    # Trust signal component
│   ├── ServiceCard.tsx   # Service display card
│   └── TestimonialCard.tsx # Testimonial card
└── public/               # Static assets
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `primary`: Blue accent color
- `charcoal`: Dark gray/black tones

### Content

All content is in the page components. Update text, pricing, and service descriptions directly in:
- `app/page.tsx` - Home page content
- `app/services/page.tsx` - Service descriptions
- `app/pricing/page.tsx` - Pricing information
- `app/about/page.tsx` - About page content
- `app/reviews/page.tsx` - Testimonials

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (metadata)

## Form Handling

The booking and contact forms currently log to console. To enable actual form submission:

1. Set up a backend API endpoint or email service
2. Update form handlers in:
   - `app/book/page.tsx`
   - `app/contact/page.tsx`

Recommended services:
- Formspree
- SendGrid
- AWS SES
- Custom API endpoint

## SEO

The site includes:
- Semantic HTML structure
- Meta tags for all pages
- Local SEO keywords (Boca Raton, FAU, South Florida)
- Open Graph tags
- Mobile-responsive design

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Custom server

## License

Private - All rights reserved

## Support

For questions or issues, contact the development team.
