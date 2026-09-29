# Flora & Stem Dashboard

Flora & Stem is a modern botanical shop curated for plant lovers and design enthusiasts alike. We offer a thoughtfully selected collection of healthy indoor plants, stylish planters, and essential care tools to bring natural beauty into your everyday space.

This repository contains the **Flora & Stem web dashboard**, a React application for managing your day-to-day work on the shop.

## Features

- **Authentication**: sign up and log in
- **Dashboard**: an overview of your shop activity
- **To-Do**: keep track of tasks
- **Profile**: view and update your account details
- **Settings**: manage your preferences

## Tech Stack

- **Frontend:** React + Vite (JavaScript)
- **Database:** MongoDB

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (or pnpm / yarn)
- A MongoDB database (local install or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation

```bash
# Clone the repository
git clone https://github.com/Matt-tech11/Flora-Stem.git
cd Flora-Stem

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=<your-mongodb-connection-string>
VITE_API_URL=<your-api-url>
```

Never commit your `.env` file. Make sure it is listed in `.gitignore`.

### Run the Development Server

```bash
npm run dev
```

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
Flora-Stem/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Dashboard, ToDo, Profile, Settings, Login/Signup
│   └── main.jsx     # App entry point
├── eslint.config.js
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

Please run `npm run lint` before submitting.

## License

This project is licensed under the MIT License.
