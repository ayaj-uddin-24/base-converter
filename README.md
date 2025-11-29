# Base Converter

A simple web-based number base converter built with HTML, CSS and JavaScript.  
This project lets you convert a number between common bases (binary, octal, decimal, hexadecimal) directly in the browser — no backend or external dependencies required.

## Demo

You can view the live demo here: **https://ayaj-uddin-24.github.io/base-converter**

## Features

- Convert numbers between these bases:
  - Base 2 (Binary)
  - Base 8 (Octal)
  - Base 10 (Decimal)
  - Base 16 (Hexadecimal)
- Simple, clean user interface — just HTML + CSS + JavaScript.
- Quick conversion: enter number → select base → get result instantly.
- No server or build step required; runs entirely in the browser.

## How It Works

When you enter a number and choose the "From Base" and "To Base" options, JavaScript code reads the input, interprets it in the source base, and then re-encodes it in the target base — showing the converted result. All logic runs client-side.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- No backend, libraries, or build tools needed

### Installation

1. Clone or download the repository:

```bash
   git clone https://github.com/ayaj-uddin-24/base-converter.git
```

2. Open the `index.html` in your browser.

That's it — the converter should work immediately.

## Usage

1. Enter the number you want to convert in the input field.
2. Choose the "From Base" (binary, octal, decimal, or hexadecimal).
3. Choose the "To Base".
4. Click **Convert** → the result appears below.
5. Use **Reset** to clear fields and start over.

## Project Structure

```
/ (root)
├── index.html      ← Main HTML file with UI elements
├── script.js       ← JavaScript handling input, conversion and output
├── style.css       ← CSS for styling
└── README.md       ← This documentation
```

**Note:** actual file names may vary depending on your setup.

## Limitations & Notes

- Only supports bases 2, 8, 10, and 16.
- No support for fractional numbers, negative numbers, or bases beyond the four listed.
- Input validation is basic — make sure your number matches the "From Base" (e.g. use only 0/1 for binary).

then feel free to fork the repository, make changes, and open a pull request.

**- Created By Ayaj Uddin Tanif (Frontend Web Developer)**
