# Function Signature to Selector Converter

This is a simple React.js application that converts Solidity function signatures into their corresponding function selectors. The application is built with Vite and styled using Tailwind CSS.

## Features

- **Real-Time Conversion**: As you type in the function signature, the corresponding selector is generated live.
- **Responsive Design**: The application is fully responsive, making it usable on different screen sizes.
- **Modern UI**: Styled with Tailwind CSS, the app has a clean and modern interface.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/function-selector-converter.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd function-selector-converter
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```
2. **Open the application in your browser**:
   - Visit `http://localhost:5173` to use the app.
   - Enter a Solidity function signature (e.g., `transfer(address,uint256)`), and the corresponding function selector will be displayed below the input field.

## Project Structure

- `src/`
  - `App.jsx`: The main application component.
  - `Converter.jsx`: The component responsible for handling the signature input and selector conversion.
  - `index.css`: Global CSS file with Tailwind imports.
  - `main.jsx`: The entry point of the application.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Vite**: Fast development build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. **Fork the repo**.
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add YourFeature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a pull request**.
