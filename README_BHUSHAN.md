# Bhushan Charpe - Professional Portfolio

A modern, professional portfolio website built with Next.js, Three.js, and Framer Motion featuring 3D animations and a light, clean design.

## 🌟 Features

- **Light Professional Theme**: Clean, modern light theme instead of dark
- **3D Hero Animation**: Interactive 3D geometric shapes with particle effects
- **Profile Photo**: Your photo displayed prominently on the homepage with animated gradient border
- **Gradient Name**: Your name displayed with beautiful gradient effects
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered transitions
- **7 Projects Showcase**: All your major projects beautifully displayed
- **3 Internship Experiences**: Detailed experience timeline
- **Skills & Achievements**: Comprehensive display of your technical skills
- **Publications**: Your 2 research papers highlighted
- **Contact Integration**: All your contact information and social links

## 📋 Information Included

- **Education**: B.Tech in Computer Engineering at Vishwakarma University (CGPA: 8.0)
- **Location**: Pune, Maharashtra
- **Email**: bhushancharpe135@gmail.com
- **Phone**: +91 8767106500
- **LinkedIn**: linkedin.com/in/bhushancharpe
- **GitHub**: github.com/bhushancharpe15

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd /home/bhushan/Desktop/My_Portfolio/portfolio-website-main
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Building for Production

To create a production build:

```bash
npm run build
npm start
```

To create a static export (for GitHub Pages):

```bash
npm run export
```

## 📁 Project Structure

```
portfolio-website-main/
├── public/
│   ├── profileimg.jpg          # Your profile photo
│   └── resume.pdf              # Add your resume here
├── src/
│   ├── app/
│   │   ├── globals.css         # Light theme styles
│   │   ├── layout.tsx          # Metadata & layout
│   │   └── page.tsx            # Main page
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroScene.tsx   # 3D hero with your photo
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation
│   │   │   └── Footer.tsx      # Footer with contacts
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx      # About you
│   │   │   └── ExperienceSection.tsx # Your internships
│   │   └── projects/
│   │       ├── ProjectShowcase.tsx   # Projects grid
│   │       └── ProjectCard.tsx       # Individual project cards
│   └── data/
│       └── projects.ts         # Your 7 projects
└── package.json
```

## 🎨 Customization

### Update Resume
Replace `/public/resume.pdf` with your latest resume.

### Add More Projects
Edit `/src/data/projects.ts` to add or modify projects.

### Change Contact Info
Update in:
- `/src/components/3d/HeroScene.tsx`
- `/src/components/layout/Footer.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to GitHub Pages
1. Run `npm run export`
2. Push the output to your GitHub Pages repository

### Deploy to Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

## 📝 Sections

1. **Hero Section**: 3D animated background with your profile photo and information
2. **About Section**: Your bio, skills, achievements, and publications
3. **Experience Section**: Timeline of your 3 internships
4. **Projects Section**: Filterable grid of your 7 projects

## 🎯 Key Highlights

- **Best Project Award** for Forest Fire Detection System
- **AI/ML Fusion National Hackathon Winner** (10K prize)
- **2 Published Research Papers**
- **3 Professional Internships**
- **7+ Completed Projects**
- **CGPA: 8.0**

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **Three.js** - 3D graphics
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Lucide React** - Icons

## 📞 Support

If you need any help with the portfolio, feel free to reach out!

## 📄 License

MIT License - Feel free to use this portfolio as inspiration for your own!

---

**Built with ❤️ by Bhushan Charpe**

