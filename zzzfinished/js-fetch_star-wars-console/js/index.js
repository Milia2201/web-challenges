console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url);
    console.log(response.body);
    const data = await response.json();
    console.log(data);
    console.log(data.results[2]);
    const R2D2 = data.results[2];
    console.log(R2D2.eye_color);
    
    
}

fetchData();

