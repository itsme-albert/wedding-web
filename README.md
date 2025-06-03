# Mira & Dzun's Wedding Website

A beautiful and responsive wedding website built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Countdown timer to the wedding day
- Wedding program timeline
- Venue information with map link
- RSVP form with form handling
- Modern and elegant UI

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd wedding-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:

```env
# Add your environment variables here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
wedding-app/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   └── page.tsx        # Main page component
├── components/         # React components
├── public/            # Static assets
│   └── images/        # Image files
└── package.json       # Project dependencies
```

## Customization

1. Update the wedding details in `app/page.tsx`
2. Replace the hero image in `public/images/hero-bg.jpg`
3. Modify the color scheme in `app/globals.css`
4. Update the venue information and map link
5. Customize the RSVP form fields in `components/rsvp-form.tsx`

## Deployment

The website can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
