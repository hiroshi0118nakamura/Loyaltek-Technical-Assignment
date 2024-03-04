# Magic the gathering - Loyaltek technical assignment

This web application was made for a technical assignment for **Loyaltek**.
This app fetches card data from [https://api.magicthegathering.io/v1](https://api.magicthegathering.io/v1) and uses it to create your own Magic the Gathering deck.
In this app development, I focused on enhancing the UX in frontend design.
Magic the Gathering API returns about 25 types, 491 types, 6 supertypes and 500 sets.
To facilitate this search, I customized a reusable **Autocomplete component** and used it to make card searches more convenient for end users.

## Features

- Search Cards

  - Carrys out a search using the Name, Set, Type, Supertype and Subtype properties and displays the results.
  - Name is searched using an input element and Set, Type, Supertype and Subtype are searched using an Autocomplete component.

- Add/Remove Cards to the Deck

  - Every card is unique and you can add or remove it from the Deck by clicking on it.
  - When you add or remove cards from your deck, the interface will be updated by calculating the number of cards in the deck and their average mana cost.
  - When you add card more than 30, a notification will pop up to let you know.

## Tech Stack

- React
- React Toastify(for notification)
- Redux Toolkit(state management)
- TailwindCSS(UI design)
- React toggle dark mode(dark/light theme transition)

## Enhanced Features

- Responsive design
  Implemented responsive interface design for various kinds of screen sizes(Desktop, laptop, tablet, mobile)
- Dark Mode
  Implemented Dark Theme and Light Theme using React toggle dark mode library for improving user experience
