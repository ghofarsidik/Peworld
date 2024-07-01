<br />
  <div align="center">
    <a href="https://github.com/ghofarsidik/Peworld">
      <img src="https://github.com/ghofarsidik/Peworld/blob/65f3d7f14e2bc24f66753f9b14f50830ce7c0f2c/src/components/images/logo/logo.png" width="350"/>
  </a>

  <p align="center">
    Peworld Implementation
    <br />
    <br />
   <a href="https://peword-ags.netlify.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/ghofarsidik/Be_Peworld.git" target="_blank">View Back-End Repo</a>
  </p>
  </div>

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Screenshots](#screenshots)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Documentation](#documentation)
- [Related Project](#related-project)

### About The Project

Peworld is a web application designed to help companies find and recruit talented workers in the fields of information technology (IT) and software development. Peworld provides job seekers with the opportunity to showcase their best skills and experience to companies, while companies can easily find and recruit the right candidates according to their needs more quickly and efficiently.

### Built With

This Peworld project was created using the following technologies:

- HTML
- Tailwind CSS
- Javascript 
- Node Js
- React
- Redux

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ghofarsidik/Peworld.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd Peworld
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

   

### Screenshots

Here is the screen display of the Peworld:
<table>
  <tr>
    <td>
      <button onclick="toggleImage()">Show Image</button>
      <img id="screenshot" src="https://github.com/ghofarsidik/Peworld/blob/65f3d7f14e2bc24f66753f9b14f50830ce7c0f2c/src/components/images/screenshot/Landing%20Page%20before%20Login.png" width="350" style="display:none;"/>
      <script>
        function toggleImage() {
          const img = document.getElementById('screenshot');
          const button = document.querySelector('button');
          if (img.style.display === 'none') {
            img.style.display = 'block';
            button.textContent = 'Hide Image';
          } else {
            img.style.display = 'none';
            button.textContent = 'Show Image';
          }
        }
      </script>
    </td>
  </tr>
</table>

### Backend Setup

To set up the backend, follow the instructions in the [Backend Repository](https://github.com/muhammadrisano/fwm17-be-peword.git).

### Additional Configuration

If there are any additional configuration steps required, such as setting up environment variables, include them here.

### Usage

Provide instructions on how to use the application once it is up and running.

### Running Tests

If your project includes tests, provide instructions on how to run them:

```sh
npm test
```

### Deployment

Provide instructions on how to deploy the project to a live environment.

### Troubleshooting

Include common issues and their solutions to help users troubleshoot any problems they might encounter.

### Related Project
