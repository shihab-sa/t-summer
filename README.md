# T-Summer App

T-Summer App is a modern T-shirt designer tool built with Vite, React, and Tailwind CSS. This app allows users to upload their custom logo, position it on a T-shirt, and download the final design as a PNG image. It's intuitive, responsive, and perfect for crafting personalized T-shirts.

## Features

- **Drag and Drop Logo Placement:** Easily position your logo on the T-shirt by dragging it around.
- **Resizable Logo:** Adjust the size of your logo to fit perfectly on the T-shirt.
- **Upload Your Own Logo:** Upload custom images to use as logos.
- **Real-Time Preview:** See your changes immediately as you design.
- **Download as PNG:** Export your final T-shirt design as a PNG file.
- **Responsive Design:** Works seamlessly on all devices.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For a fast development environment.
- **Tailwind CSS**: For styling the app.
- **Lucide-React**: For modern and customizable icons.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/t-summer-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd t-summer-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Usage

1. Upload a logo using the **Upload** button.
2. Drag and position the logo on the T-shirt image.
3. Resize the logo by dragging the resize handle at the bottom-right corner.
4. Click the **Submit** button to generate and download the final design as a PNG image.

## File Structure

```plaintext
src/
├── assets/
│   └── images/
│       └── t-shirt.jpg
├── components/
│   └── TshirtDesigner.jsx
├── App.jsx
├── main.jsx
├── index.css
└── tailwind.config.js
```

## Deployment

To build the app for production:

```bash
npm run build
```

The built files will be available in the `dist` directory. You can host this directory on any static server or deployment service like Vercel, Netlify, or GitHub Pages.

## Screenshots

![Screenshot of T-Summer App in action](./src/assets/images/tsammer.PNG)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
