# Next.js Upstash Rate Limit Example

## Description

A project to demonstrate how to use Upstash as a rate limiter for a Next.js application.

This project provides an example implementation of rate limiting in a Next.js application using Upstash, a serverless Redis service. Rate limiting is an important technique to protect your application from abuse and ensure fair usage of your resources.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)


## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running the following command in your terminal:
  ```bash
  npm install
  ```
3. Create a new Upstash instance and obtain the connection details.
4. Create a `.env.local` file in the root of the project and add the following environment variables:
  ```env
  UPSTASH_REDIS_REST_URL=your-upstash-url
  UPSTASH_REDIS_REST_TOKEN=your-upstash-password
  ```
5. Start the development server by running the following command in your terminal:
  ```bash
  npm run dev
  ```
6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

To use this project, follow these steps:

1. Open your web browser and navigate to `http://localhost:3000`.
2. You can navigate to the `/api/hello` endpoint to see the rate limiting in action. The first 3 requests in 10 seconds will be successful, and the subsequent requests will be rate-limited.
3. Alternatively, you can navigate to the `/` endpoint and click the "Fetch API" button to see the rate limiting in action.

## Contact

If you want to contact me you can reach me at [dogan@hey.com](mailto:dogan@hey.com).