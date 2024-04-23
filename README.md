# QarTool-Project Main Setup 

**********************************************
Welcome to QarTool! 

A language tool desgined for Geogian.

This project combines an interactive QarTool Translator, Script Converter for Georgian Writing and contribution to reasearch of Georgian NLP.
**********************************************

This README document aims to provide a clear guide for both setting up the development environment and running the QarTool-Project.

This project consists of a web-based front-end application (`qartool`) and a Python backend (`Helsinki-marianMT`). The front-end is built using JavaScript with Parcel as the build tool, and the backend utilizes a Python script for processing.

==================================================================================

## Project Structure

- `/qartool` - Contains the JavaScript project with a Parcel build setup.
- `/Helsinki-marianMT` - Contains the model environment.
- `/Helsinki-marianMT/src` - Contains the Python scripts for backend processing.

## Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)
- [Python](https://www.python.org/downloads/) (version 3.x)


==================================================================================

## Setup Instructions

### Setting up the Python Environment

1. **Install Python dependencies**:
    When in the QarTool-Project directory,
    navigate to the Python script directory and install required packages.
    -------------------------------------
        cd Helsinki-marianMT
        pip install -r requirements.txt
        cd -
    -------------------------------------

2. **Setup Javascript Environment**:
    When in the QarTool-Project directory,
    navigate to qartool and
    install npm
    -------------------------------------
        cd qartool
        npm install
        npm i @symbo.ls/cli@latest -g
    -------------------------------------

3. **Running The Application On Localhost**:
    When in the QarTool-Project directory,
    navigate to qartool
    -------------------------------------
        npm run start-all
    -------------------------------------
This should start the application on localhost: 
    'http://localhost:1234'

==================================================================================
