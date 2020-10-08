const cardView = document.querySelector("#cardView");
const listView = document.querySelector("#listView");
const customersWrapper = document.querySelector("#customersWrapper");

let states = {
    viewIsCard: true,
}

cardView.addEventListener('click', () => {
    cardView.classList.add('active');
    listView.classList.remove('active');
    states.viewIsCard = true;

    changeView(states.viewIsCard);
});
listView.addEventListener('click', () => {
    listView.classList.add('active');
    cardView.classList.remove('active');
    states.viewIsCard = false;

    changeView(states.viewIsCard);
});




function changeView(viewIsCard) {
    if(viewIsCard) {
        customersWrapper.classList.add('card-deck');
        customersWrapper.classList.remove('card-list');
    } else {
        customersWrapper.classList.add('card-list');
        customersWrapper.classList.remove('card-deck');
    }
}

changeView(states.viewIsCard);