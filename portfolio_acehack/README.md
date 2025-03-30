# Portfolio Maker

A modern, user-friendly portfolio creation tool that helps you build your professional portfolio website in minutes. This tool provides a step-by-step interface with real-time feedback and generates a beautiful, responsive HTML portfolio that you can download and host anywhere.

## Features

- Multi-step form interface for easy portfolio creation
- Real-time validation and feedback
- Modern, responsive design using Tailwind CSS
- Smooth animations with Framer Motion
- HTML export functionality
- Mobile-friendly interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-maker.git
cd portfolio-maker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Fill out your personal information in the first step
2. Add a brief description about yourself
3. Add your skills (press Enter or click Add after each skill)
4. Add your work experience
5. Add your education details
6. Click "Generate Portfolio" to download your portfolio as an HTML file

## Customization

The generated portfolio uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the `generateHTML` function in `src/components/PortfolioMaker.tsx`
2. Adjusting the Tailwind classes in the template
3. Adding custom CSS to the generated HTML

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 