# 🔄 Unit Converter App

The Unit Converter App is a modern web application designed to convert measurements from one unit to another with ease. It features a responsive user interface, a dark mode toggle, and a modal-based conversion tool. The app is built with a .NET backend for robust API services and a Next.js frontend for a fast, server-rendered experience. Styling is handled with Tailwind CSS for a clean and customizable design.

## 🚀 Features

- **Conversion Modal**  
  Access the conversion tool by clicking the **"Convert Now"** button on the homepage, which opens a modal.

- **Dynamic Conversion**
    - Select from various conversion options (e.g., centimeters to inches, inches to centimeters) via a dropdown.
    - Input a value in the provided field, and the result updates instantly using an `onChange` event.
    - Changing the conversion option resets both input and result fields to zero.

- **Real-Time Updates**  
  The result updates as the user types, based on the selected conversion formula.

- **Dark Mode Toggle**  
  Switch between light and dark themes for better accessibility and user experience.

- **Close Modal**  
  A close button allows users to exit the conversion modal after completing their conversions.

## 🛠️ Tech Stack

**Frontend:**
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.

**Backend:**
- **.NET**: Provides a robust API for handling conversion logic and calculations.

**Code Editor:**
- **WebStorm**: Preferred IDE for development and debugging.

**Testing (optional):**
- **Cypress** or **Jest** for frontend testing (not implemented in this version).

## 🗂️ Project Structure

The project is divided into two main directories:

- **unit.converter.frontend**
    - Contains the Next.js application.
    - **Key files:**
        - `pages/index.js`: Homepage with the "Convert Now" button.
        - `components/ConversionModal.js`: Modal component with dropdown, input, result, and close button.
        - `styles/globals.css`: Tailwind CSS configuration and custom styles.
        - `public/`: Static assets (e.g., icons, images).

- **unit.converter.backend**
    - Contains the .NET application.
    - **Key components:**
        - API controllers for handling conversion requests.
        - Services for conversion logic (e.g., formulas for cm to inches).
        - Models for data validation and response formatting.

## 🧩 Getting Started

### Prerequisites

- **Node.js** (v20 or later): For running the Next.js frontend.
- **.NET SDK** (v8 or later): For running the .NET backend.
- **WebStorm** (optional): Recommended code editor.
- A package manager like **npm** or **yarn**.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd unit-converter
   ```

2. **Set Up the Frontend (`unit.converter.frontend`):**

   ```bash
   cd unit.converter.frontend
   pnpm install
   ```

   Installs Next.js, Tailwind CSS, and other dependencies.

3. **Set Up the Backend (`unit.converter.backend`):**

   ```bash
   cd unit.converter.backend
   dotnet restore
   ```

   Restores .NET dependencies.  
   Configure the backend (e.g., connection strings, if using a database) in `appsettings.json`.

4. **Run the Backend:**

   ```bash
   dotnet run
   ```

   Starts the .NET API (default: `http://localhost:5000`).

5. **Run the Frontend:**

   ```bash
   cd unit.converter.frontend
   pnpm run dev
   ```

   Starts the Next.js development server (default: `http://localhost:3000`).

6. **Access the App:**
    - Open [http://localhost:3000](http://localhost:3000) in your browser.
    - Click "Convert Now" to open the conversion modal.
    - Select a conversion option, enter a value, and view the result.
    - Toggle dark mode or close the modal as needed.

## 🎯 Usage

### Homepage

- Visit the homepage and click the **"Convert Now"** button to open the conversion modal.

### Conversion Modal

- **Select Conversion**: Choose a conversion type from the dropdown (e.g., centimeters to inches).
- **Enter Value**: Type a numeric value in the input field. The result updates in real-time.
- **Change Conversion**: Select a new conversion option to reset input and result to zero.
- **Close Modal**: Click the close button to exit.

### Dark Mode

- Use the dark mode toggle (typically in the header or sidebar) to switch between light and dark themes.

## ⚙️ Development

### Code Editor

- Use WebStorm for features like TypeScript support, debugging, and Git integration.

### Frontend Styling

- Customize styles in `unit.converter.frontend/styles/globals.css` using Tailwind CSS classes.
- Add new components in `unit.converter.frontend/components/`.

### Backend Logic

- Add new conversion formulas in the .NET backend (e.g., in a `ConversionService` class).
- Update API endpoints in controllers to support additional units.

### Testing (optional)

- Add Cypress tests in `unit.converter.frontend/cypress/` to verify modal functionality and conversions.
- Example test: Selecting a conversion option and validating the result.

## 🚀 Deployment

### Frontend

- Deploy the Next.js app to **Vercel** for seamless hosting.
- Run:

  ```bash
  pnpm run build
  ```

  to create an optimized production build.

### Backend

- Deploy the .NET API to **Azure**, **AWS**, or another hosting service.
- Use:

  ```bash
  dotnet publish
  ```

  to prepare the backend for deployment.

### Environment Variables

- Configure API base URLs and other settings in `.env` (frontend) and `appsettings.json` (backend).

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/new-conversion
   ```

3. Commit changes:

   ```bash
   git commit -m "Add gram to mass conversion"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/new-conversion
   ```

5. Open a pull request.

## 📬 Contact

For questions or feedback, please open an issue on the repository or contact the maintainer.
