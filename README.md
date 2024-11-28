# Password Generator App

This project is a **Password Generator App** built using **React**. The app allows users to generate secure passwords with customizable options such as length, inclusion of numbers, and special characters. The generated password can be easily copied to the clipboard for use.

## Features
- Generate secure passwords of customizable length.
- Option to include numbers and special characters in the password.
- Real-time password preview.
- Copy the generated password to the clipboard with a single click.
- Clean and responsive UI.

## Hooks Used

This app leverages the following React hooks:

1. **`useState`**  
   Used to manage state for:
   - Password length (`length`)
   - Whether numbers are allowed (`numberAllowed`)
   - Whether special characters are allowed (`charAllowed`)
   - The generated password (`password`)

2. **`useRef`**  
   Used to create a reference to the password input field (`passwordRef`) for the copy-to-clipboard functionality.

3. **`useCallback`**  
   Used to memoize functions:
   - `passwordGenerator`: Generates a password based on selected options.
   - `copyPasswordToClipboard`: Copies the generated password to the clipboard.

4. **`useEffect`**  
   Used to invoke the `passwordGenerator` function whenever the password length, number allowance, or special character allowance changes.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/batoolarifa/password-generator-React.git
   ```
2. Navigate to the project directory:
   ```bash
   cd password-generator-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start dev
   ```

### UI Implementation

The app uses a minimalistic design with:
- **Password input field** for displaying the generated password.
- **Range slider** for adjusting password length.
- **Checkboxes** for enabling/disabling numbers and special characters.
- **Button** for copying the password to the clipboard.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.


---

**Enjoy using the Password Generator App!** 🚀