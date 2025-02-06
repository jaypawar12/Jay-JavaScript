const apiURL = "https://api.rootnet.in/covid19-in/stats/history";
const dataTable = document.getElementById("dataTable");
const dateInput = document.getElementById("dateInput");
const cart = document.getElementById("cart");
const overlay = document.getElementById("overlay");
const closeCart = document.getElementById("closeCart");
const searchInput = document.getElementById("searchInput");

let currentData = []; 

async function fetchData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        dateInput.addEventListener("change", function () {
            const selectedDate = this.value;
            const dayData = data.data.find(item => item.day === selectedDate);
            if (dayData) {
                currentData = dayData.regional; 
                displayStateData(currentData);
            } else {
                dataTable.innerHTML = "<tr><td colspan='4'>No data available for this date.</td></tr>";
            }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayStateData(states) {
    dataTable.innerHTML = "";
    states.forEach(state => {
        const row = `
            <tr onclick="showCart('${state.loc}', ${state.totalConfirmed}, ${state.discharged}, ${state.deaths})">
                <td>${state.loc}</td>
                <td>${state.totalConfirmed}</td>
                <td>${state.discharged}</td>
                <td>${state.deaths}</td>
            </tr>`;
        dataTable.innerHTML += row;
    });
}

function showCart(state, confirmed, recovered, deaths) {
    document.getElementById("stateName").textContent = state;
    document.getElementById("confirmedCases").textContent = confirmed;
    document.getElementById("recovered").textContent = recovered;
    document.getElementById("deaths").textContent = deaths;

    cart.classList.add("show");
    cart.style.display = "block";
    overlay.style.display = "block";
}

closeCart.addEventListener("click", () => {
    cart.classList.remove("show");
    setTimeout(() => {
        cart.style.display = "none";
        overlay.style.display = "none";
    }, 300);
});

searchInput.addEventListener("input", searchState);

function searchState() {
    const query = searchInput.value.toLowerCase();
    const filteredData = currentData.filter(state => state.loc.toLowerCase().includes(query));
    displayStateData(filteredData);
}

fetchData();