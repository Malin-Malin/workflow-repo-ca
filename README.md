# Workflow Repo - Course Assignment

## Goal

_The objective of this assignment is to apply the skills and knowledge gained during the workflow course to enhance the quality of a website. You will do this by configuring tools and defining tests that improve the efficiency of the development process._

### Leaning Outcomes

- Has knowledge of the latest JavaScript productivity tools
- Has knowledge to create meaningful tests in order to validate completed functionality
- Can interact in a pull request to integrate code
- Can configure productivity tools to automatically fix mistakes
- Can plan and carry out meaningful unit and end-to-end tests

## Prerequisites

- Node.js (v20+)
- npm

## How To Getting Started

### Installation

1. **Clone the repository**

2. **Install dependencies**

```bash
npm install
```

3. **Run project**

```bash
npm run dev
```

4. **Set up environment variables**

```bash
# Copy the example env file and configure your variables
cp .env.example .env
```

Update environment variables in the `.env` file.

### Available Scripts

- `npm run dev` - Start development server
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory:

```env
TEST_USERNAME=[username]
TEST_PASSWORD=[password]
```

## Testing

```bash
# Run unit and E2E tests
npm run test
```

### Unit Tests

- **Framework**: Vitest
- **Location**: `js/**/*.test.js`

```bash
# Run tests in watch mode
npx vitest
```

### E2E Tests

- **Framework**: Playwright
- **Location**: `tests/**/*.spec.js`

```bash
# Run all Playwright tests
npx playwright test

# View test report
npx playwright show-report
```

**Open in browser**

```
http://localhost:3000
```

## Git Workflow

This project uses automated quality gates:

1. **Pre-commit hooks** (via Husky):
   - Code formatting with Prettier
   - Linting with ESLint
   - Prevents commits with errors

2. **Recommended workflow**:

```bash
# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/your-feature
```

### Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS
- **Testing**:
  - Unit Testing: Vitest
  - E2E Testing: Playwright
- **Code Quality**: ESLint, Prettier, Husky
- **Build Tools**: Node.js, npm

## Author

**Malin Skrettingland**
[@Malin-Malin](https://github.com/Malin-Malin)

<p align="center">
  <img src="images/Cartoon-style-img-small.jpg" alt="Cartoon-style portrait" width="200">
</p>
