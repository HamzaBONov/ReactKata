My E-commerce App
=================

# Table of Contents
-----------------

-   [Introduction](#introduction)
-   [Features](#features)
-   [Architecture Overview](#architecture-overview)
-   [Technologies Used](#technologies-used)

# Introduction
------------

My E-commerce App is a dynamic, responsive web application built with Next.js and Tailwind CSS. It allows users to browse a variety of products, filter them by categories, add them to the cart, and proceed to checkout. This app is designed to provide a seamless shopping experience with efficient state management and interactive UI components
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Features
--------

-   **Product Listing**: View a list of products with images, rating, reviews, and prices.
-   **Search, Sort and Filter**: Search for products by name, Sort by name Or Price and filter by category.
-   **Cart Management**: Add products to the cart, adjust quantities, and remove items.
-   **Responsive Design**: Optimized for both desktop and mobile devices.
-   **State Management**: Efficiently manage product and cart state using useReducer and context API.

# Architecture Overview
---------------------

The project is structured to ensure scalability and maintainability:

-   **Pages**: Contains the main pages of the application, such as the homepage, product pages, and cart.
-   **Components**: Reusable UI components like the product list, filters, cart items, and navigation bar.
-   **Context**: State management using React's Context API and useReducer for managing the global state, including products and cart state.
-   **Styles**: Tailwind CSS for styling, ensuring a consistent design system across the application.
-   **Utils**: Helper functions for common tasks such as fetching unique values for filters.

### Key Components

-   **Products**: Displays the list of products, allowing users to filter and search.
-   **Filters**: Provides search and category filtering functionality.
-   **Cart**: Manages the items added to the cart, including quantity adjustments and total calculations.
-   **CartTotals**: Displays the total amount and shipping fees.

### State Management

State management is handled using React's Context API and useReducer:

-   **ProductContext**: Manages product-related state, including filters and sorting.
-   **CartContext**: Manages the cart state, including adding/removing items and calculating totals.

# Technologies Used
-----------------

-   **Next.js**: React framework for server-side rendering and static site generation.
-   **React**: Library for building user interfaces.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **TypeScript**: Superset of JavaScript for type safety.
-   **React Icons**: Icon library for React applications.

Conclusion
----------

My E-commerce App is a robust and user-friendly platform for online shopping. With its efficient state management and responsive design, it provides a seamless shopping experience for users. Follow the setup instructions to get started with the project locally and explore the features.