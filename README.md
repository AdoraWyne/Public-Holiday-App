# Public Holiday App

[Homework](https://reactpractice.dev/exercise/build-a-public-holidays-app/?utm_source=calendar.reactpractice.dev&utm_medium=social&utm_campaign=calendar-v1)

Build a React application that shows the national holidays for the current year, for a given country.

The main screen should show:
- a dropdown with a list of countries
- a list of public holidays for the selected country

# What I have done:
- Got an array of Countries from this [API](https://openholidaysapi.org/swagger/index.html)
- Change to use `react-query` from `useEffect` for calling API

# Next:
- Add isLoading and error to the component.
- Add api file
- Add refresh for fun

- Why useEffect is bad?

# DONE:
- Dropdown menu
- Default the dropdown to The Netherlands
- Understand what is isoCode? The standard shortform name for each countries
- Add types annotation
- Add to call public holiday for each country