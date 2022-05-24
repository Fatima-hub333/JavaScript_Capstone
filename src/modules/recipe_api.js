const url1 = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const displayData = (results) => {
  const container = document.querySelector('.items');
  let displayUI = '';
  // eslint-disable-next-line array-callback-return
  results.map((result) => {
    displayUI += `
        <div class="item">
          <div class="item_images">
              <img src="${result.strCategoryThumb}" alt="${result.strCategory}">
          </div>
          <div class="text_like">
              <p class="name-meal">${result.strCategory}</p>
              <div class="like_div">
                    <button class="like_btn" type="button">❤</button>
                    <p class="num_like">5 likes</p>
              </div>    
          </div>
          <div class="btn_rev_com">
              <button type="button" class="commentBtn">
                  Comments
              </button>
              <button type="button" class="reservationBtn">
                  Reservations
              </button>
          </div>
        </div>  
        `;
  });
  container.innerHTML = displayUI;
};

const fetchData = async () => {
  const res = await fetch(url1);
  const response = await res.json();
  displayData(response.categories);
};

fetchData();