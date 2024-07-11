
// const searchInput = document.getElementById('search-box')
// const searchBtn = document.getElementById('search-btn')
// const container=document.getElementById('food_Container')

// searchBtn.addEventListener('click',()=>{
//     const searchValue=searchInput.value
//     if (searchValue == "") {
//         alert("Please Insert A Latter(A to Z)");
//       } else {
//         if (searchValue.length > 1) {
//           alert("For Search You Cant Insert More Than One Latter");
//         } else {
//           searchMeals(searchValue);
//         }
//       }
// })


// const getData=(searchValue)=>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`)
//     .then(response=>response.json())
//     .then(data=>result(data))
// }

// const result=(searchResult)=>{
//     if(searchResult.meals){
//       searchResult.meals.forEach((meal)=>{
//         container.innerHTML+=`
        
        
        
//         `
//       })
//     }
// }



const searchInput = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const container = document.getElementById('food_Container');

searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value;
    if (searchValue === "") {
        alert("Please Insert A Letter (A to Z)");
    } else {
        if (searchValue.length > 1) {
            alert("For Search, You Can't Insert More Than One Letter");
        } else {
            searchMeals(searchValue);
        }
    }
});

const searchMeals = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`)
        .then(response => response.json())
        .then(data => displayResults(data));
};

const displayResults = (searchResult) => {
    container.innerHTML = '';  // Clear previous results
    if (searchResult.meals) {
        searchResult.meals.forEach((meal) => {
            container.innerHTML += `
                <div class="card mb-3" style="width: 18rem;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.substring(0, 100)}...</p>
                        <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Watch Recipe</a>
                    </div>
                </div>
            `;
        });
    } else {
        container.innerHTML = `<p class="text-center text-danger">No meals found for "${searchValue}"</p>`;
    }
};
