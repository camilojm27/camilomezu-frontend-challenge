# Newsletter Subscription Component - TinaCMS Challenge

This project is a submission for a technical challenge to implement a reusable Newsletter Subscription component for a TinaCMS-powered website, built with Next.js and deployed on Vercel.

## Challenge Overview

The goal was to develop a Newsletter Subscription component as a content block, integrating it fully with TinaCMS. This involved creating a standalone React component with editable content elements, responsive design, and user interaction feedback, all manageable through the TinaCMS visual editor.

## Features

*   **Newsletter Subscription Component:** A reusable React component.
*   **Editable Content:**
    *   Headline/Title (with optional visual highlight, rich text)
    *   Short Description (rich text)
    *   Email Input Field
    *   Subscribe Button
    *   Privacy Policy Consent Checkbox
*   **TinaCMS Integration:**
    *   Content elements are editable via the TinaCMS visual editor.
    *   Defined schema for the component.
    *   Set up as a reusable block within TinaCMS.
*   **Responsive Design:** Ensures functionality and visual consistency across mobile, tablet, and desktop devices.
*   **User Interaction:**
    *   Hover states for interactive elements.
    *   Basic email validation.
    *   Visual success/error feedback for the subscription form (UI behavior only, no backend integration).

## Tech Stack

*   **Framework:** Next.js
*   **CMS:** TinaCMS (with Tina Cloud and GraphQL)
*   **Styling:** TailwindCSS
*   **UI Components:** Radix UI
*   **Package Manager:** pnpm

## Getting Started & Local Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Git
*   [Node.js Active LTS](https://nodejs.org/en/about/releases/)
*   pnpm
*   A [TinaCMS Cloud](https://app.tina.io) account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/camilojm27/camilomezu-frontend-challenge
    cd camilomezu-frontend-challenge
    ```

2.  **Install dependencies:**
    > [!NOTE]
    > This project uses pnpm as recommended for its speed and efficient handling of dependencies.

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project by copying the `.env.example` file:
    ```bash
    cp .env.example .env
    ```
    Update the `.env` file with your TinaCMS project credentials:
    ```
    NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
    TINA_TOKEN=<get this from the project you create at app.tina.io>
    NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured, e.g., main or master>
    ```

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

### Local URLs

*   **Browse the website:** `http://localhost:3000`
*   **Access TinaCMS (edit mode):** `http://localhost:3000/admin` (connect to Tina Cloud)
*   **GraphQL Playground:** `http://localhost:3000/admin/index.html#/graphql` (to test queries and browse API documentation)

## TinaCMS Integration

The Newsletter Subscription component is integrated as a reusable block within TinaCMS. This means:
*   You can add the Newsletter block to any page managed by TinaCMS.
*   All content elements (headline, description, button text, etc.) can be visually edited directly from the `/admin` interface.
*   The schema for this component is defined in the TinaCMS configuration, allowing for structured content management.

## Deployment

The project is deployed on Vercel.

*   **Live Site:** [Link to your Vercel deployment]
*   **TinaCMS Visual Editor Access:** [Link to your TinaCMS admin or instructions on how to access if credentials are required by evaluators]

## Development Process & Learnings

To complete this test, the first thing I did was research TinaCMS to understand how it works and how to integrate it with Next.js. After that, I created a repository and used the TinaCMS Next.js template to set up the project by running:
```bash
npx create-tina-app@latest
```
For the package manager, I used pnpm as recommended by Tina — it's great for frontend projects, improving both development speed and disk space usage.

I deployed the project to Vercel early on, before making any template changes, so I could validate that each new commit was successfully reflected in production.

To customize the project, I relied on Tina's documentation and LLMs to understand how to create reusable components. I built a simple newsletter interface that works from the Tina admin panel. For the UI, I used the libraries already included in the project like Radix UI and TailwindCSS, then adjusted the design to match the template provided.

One challenge encountered was an initial attempt to store newsletter emails directly in the CMS. I learned that TinaCMS is not designed for dynamic data storage in that manner, which led to some troubleshooting before understanding this limitation.

Additionally, while Large Language Models (LLMs) can significantly accelerate development, it's crucial to critically review the code they generate. For instance, suggestions to use `dangerouslySetInnerHTML` might work but may not always be the safest or best practice.

## Usage Documentation

1.  Navigate to the TinaCMS admin panel (usually `https://camilomezu-frontend-challenge.vercel.app/admin`).
2.  Select or create a page where you want to add the Newsletter Subscription component.
3.  In the page editing interface, look for an option to add a new block or section.
4.  Choose the "Newsletter Subscription" block from the list of available blocks.
5.  Once added, you can click on the component in the visual editor to modify its content:
    *   Update the headline and description (supports rich text).
    *   Change the button text.
    *   Toggle the privacy policy checkbox requirement or edit its text.
6.  Save your changes. The updated component will be live on your site.

## License

Licensed under the [Apache 2.0 license](./LICENSE). 