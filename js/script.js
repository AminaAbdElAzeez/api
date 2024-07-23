// 1) Using the fetch API:
// The fetch API is built into modern browsers and allows you to asynchronously retrieve resources (such as data from an API).
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error Message : ', error);
    });

// In this example, we fetch data from a specified URL and convert the response to a JSON object.

// ******************************************************************************************************

// 2) Using XMLHttpRequest :
// XMLHttpRequest is an older method for making HTTP requests from the browser.
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://fakestoreapi.com/products', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();
// We open a GET connection to the specified URL and handle the response when it’s received.

// ******************************************************************************************************

// 3) Using external libraries like Axios:
// Axios is a lightweight library that simplifies data fetching from APIs using Promises.
// You can install it via npm or yarn: => npm install axios
// or using cdn to use axios online without installing
axios.get('https://fakestoreapi.com/products')
    .then(response => {
        const data = response.data;
        console.log(data);
    })
    .catch(error => {
        console.error('Error Message:', error);
    });

// Axios provides an easier interface for handling API data.
