                    // array function ar value col korbo, button ar vitor value add korbo
                    const searchFood = () => {
                        // input button ar id col korbo
        const searchField = document.getElementById('search-field');
                        // input tag ar valu add korbo
        const searchText = searchField.value;
                        // input ar j value ase seta console log a print korbo
        console.log(searchText);
                        // input ar value add korar por seta inpur ar text clear hobe
        searchField.value = '';
                        // url theke dynamic vabe input col korbo url ar maddome
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
                        // console.log a result print
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals)); // array object meals col korsi then link up array function
    }
    
    const displaySearchResult = meals => {
        const searchResult = document.getElementById('search-result');
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `; 
            searchResult.appendChild(div);
        })
    }
    