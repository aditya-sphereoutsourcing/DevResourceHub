# DevLibGuide

A comprehensive open-source resource for programming libraries across multiple languages. This project serves as a central hub for developers to discover, learn about, and compare libraries for their projects.

## 🚀 Features

- **Multi-language Support**: Browse libraries for C, C++, Java, JavaScript, and more
- **Powerful Search**: Find libraries by name, description, functionality, or specific tags
- **Detailed Information**: Get comprehensive details about each library including:
  - Version information 
  - Detailed descriptions of functionality
  - Compatibility details
  - Documentation links
  - Function categorization

## 📋 Project Structure

```
DevLibGuide/
├── client/                 # Frontend code
│   ├── public/             # Public assets
│   └── src/
│       ├── components/     # React components
│       ├── data/           # Data sources
│       │   └── libraries/  # Library data organized by language
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utility functions
│       ├── pages/          # Page components
│       └── types/          # TypeScript type definitions
├── server/                 # Backend code
│   ├── db/                 # Database connections/models
│   └── routes/             # API routes
└── shared/                 # Shared code between frontend/backend
    └── schema.ts           # Database schema definitions
```

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (with Drizzle ORM)
- **Deployment**: Replit

## 🏁 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devlibguide.git
   cd devlibguide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## 📚 Contributing

We welcome contributions! Here's how you can help:

### Adding a New Library

1. Navigate to `client/src/data/libraries` directory
2. Choose the appropriate language file (e.g., `c.ts`, `javascript.ts`)
3. Add your library following this format:

```typescript
{
  name: "LibraryName",
  version: "x.y.z",
  description: "Detailed description of what the library does, its primary functions, and when to use it.",
  tags: ["Primary Category", "Secondary Category", "Feature"],
  compatibility: "Compatibility information",
  documentationUrl: "https://link-to-documentation",
}
```

4. Submit a pull request with your changes

### Contribution Guidelines

- Ensure library information is accurate and up-to-date
- Include detailed descriptions that explain the purpose and primary functions
- Use consistent tagging to help with searchability
- Include official documentation links when available

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- All the open-source library maintainers
- Contributors to this project
- The programming community

## 📞 Contact

For questions or suggestions, please open an issue on GitHub or contact us at aditya.gardian@gmail.com.
