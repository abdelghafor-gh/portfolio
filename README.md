# Personal Portfolio

A modern and responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- Modern and responsive design
- Dark/Light mode support
- Fast performance with Next.js
- Type-safe with TypeScript
- Styled with Tailwind CSS
- Easily customizable

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GitHub Actions](https://github.com/features/actions) - CI/CD pipeline

## 🏃‍♂️ Running Locally

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file similar to `.env.example`

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

Create a `.env` file in the root directory and add the required environment variables as shown in `.env.example`.

## 🚀 Deployment

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions. Any push to the main branch will trigger the deployment workflow.

## 🎨 Customization

The portfolio is organized into modular sections in `src/components/sections/`. Here's how to customize each section:

### 1. Hero Section (`Hero.tsx`)
The main landing section with your introduction:
- Update your name and title
- Modify the hero image
- Customize the CTA buttons

### 2. About Section (`About.tsx`)
Your background and personal information:
- Edit your bio and background story
- Update your profile picture
- Modify the resume download button

### 3. Experience Section (`Experience.tsx`)
Your work history:
- Add/edit work experiences
- Customize company details
- Update job descriptions and achievements

### 4. Projects Section (`Projects.tsx`)
Your portfolio projects:
- Add new projects
- Update project descriptions
- Modify project links and images
- Edit technology tags

### 5. Skills Section (`Skills.tsx`)
Your technical expertise:
- Update skill categories
- Add/remove individual skills
- Customize skill descriptions

### 6. Contact Section (`Contact.tsx` & `ContactForm.tsx`)
Your contact information and form:
- Update contact details
- Customize form fields
- Modify contact form behavior

### 7. Theme and Styling
- Modify colors in `tailwind.config.js`
- Update global styles in `src/app/globals.css`
- Customize UI components in `src/components/ui/`

### 8. Assets and Configuration
- Replace images in `public/`
- Update metadata in `src/app/layout.tsx`
- Modify `.env` configuration

## 📸 Screenshots
[Add screenshots of your portfolio here]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
