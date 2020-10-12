const cardView = document.querySelector("#cardView");
const listView = document.querySelector("#listView");

const addCustomerBtn = document.querySelector("#addCustomerBtn");

const customerActionButton = document.querySelector(".more-action-button");
const buttonsWrapper = document.querySelector(".buttons-wrapper");

const wrapper = document.querySelector(".wrapper");
const customersWrapper = document.querySelector("#customersWrapper");

const activeCustomerTab = document.querySelector(".active-customer-tab");
const cards = document.querySelectorAll(".card");

const modalClose = document.querySelector("#close");
const modal = document.querySelector(".modal");


let states = {
    viewIsCard: true,
}

addCustomerBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
});

/* Open customer card operation menu (edit and delete) */
customerActionButton.addEventListener('click', () => {
    buttonsWrapper.classList.toggle('active');
})

/* View selection */
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

/* Open full deatiled customer card */
cards.forEach(card => {
    card.addEventListener('click', () => {
        wrapper.classList.toggle('active');
        activeCustomerTab.classList.toggle('active');
    });
});


/* change card view */
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