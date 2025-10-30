# DevArc - We Build What Brands Dream

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS for DevArc - a creative digital agency.

## 🚀 Features

- **Modern Design**: Clean, premium Indian-inspired design with purple (#5B3DE6) color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Fast loading with Next.js optimization

## 🎨 Design System

- **Fonts**: Poppins (primary), Inter (secondary)
- **Colors**: 
  - Primary: #5B3DE6 (Purple)
  - White: #FFFFFF
  - Deep Gray: #1E1E1E
- **Layout**: Full-width sections with curved dividers
- **Animations**: Fade-in, slide-up, and hover effects

## 📱 Sections

1. **Hero Section**: Eye-catching headline with CTAs
2. **About Us**: Team focus with feature highlights
3. **Services**: 5 service cards with detailed descriptions
4. **Process**: 4-step workflow visualization
5. **Work**: Portfolio showcase (MVP stage)
6. **Contact**: Multiple contact methods and form
7. **Footer**: Links and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd devarc-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About us section
│   ├── Services.tsx        # Services showcase
│   ├── Process.tsx         # Work process
│   ├── Work.tsx            # Portfolio section
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer component
└── ...
```

## 🎯 Key Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Hero section with animated elements
- ✅ About section with team focus
- ✅ Services grid with hover effects
- ✅ Process timeline with visual steps
- ✅ Work showcase (MVP stage)
- ✅ Contact form with validation
- ✅ Footer with social links
- ✅ Smooth scrolling and animations
- ✅ SEO optimization
- ✅ Performance optimization

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#5B3DE6",
    // ... other shades
  }
}
```

### Content
All content is easily customizable in the respective component files.

### Animations
Animations can be adjusted in the Framer Motion components or CSS animations in `globals.css`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 📄 License

This project is created for DevArc digital agency.

## 🤝 Contributing

This is a client project. For any modifications, please contact the DevArc team.

---

**Built with ❤️ by DevArc Team**