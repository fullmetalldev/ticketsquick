// Burger menu
let btnBurger = document.querySelector('.burgerBtn');
let burgerMenu = document.querySelector('.burgerBlock');

btnBurger.addEventListener('click', () => {
    burgerMenu.classList.toggle('activeBurger');
});


// Filter tickets from cards
let teamImage = document.querySelector('#teamImage');
let allTitle = document.querySelector('.afterCardsBlock__tickets-title');

let cards = document.querySelectorAll('.main__teamCards-card');
let tickets = document.querySelectorAll('.ticketCard');
let cardState = '';


number = 15;
const maxTick = () => {
    tickets.forEach((ticket, idx) => {
        if (idx < number) {
            return ticket.style.display = 'flex'
        } else {
            return ticket.style.display = 'none';
        }
    });
};
maxTick();


let moreBtn = document.querySelector('#more');

moreBtn.addEventListener('click', () => {
    number += 15;
    maxTick()
});


const filter = () => {
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            cardState = card.dataset.filter;
            number = 99999;
            maxTick();
            tickets.forEach((ticket) => {
                if (ticket.dataset.filter.includes(card.dataset.filter) || ticket.dataset.filter2.includes(card.dataset.filter)) {
                    return ticket.classList.remove('hide')
                } else {
                    ticket.classList.add('hide')
                }
            });
            teamImage.style.display = 'flex';
            switch (cardState) {
                case 'Montreal Canadiens':
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/529350.jpg\') center/cover';
                    break;
                case 'Vegas Golden Knights' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/522127.jpg\') center/cover';
                    break;
                case 'Tampa Bay Lightning' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/493064.jpg\') center/cover';
                    break;
                case 'New York Islanders' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/529351.jpg\') center/cover';
                    break;
                case 'Washington Capitals' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/522129.jpg\') center/cover';
                    break;
                case 'Florida Panthers' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/522126.jpg\') center/cover';
                    break;
                case 'Pittsburgh Penguins' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/524412.jpg\') center/cover';
                    break;
                case 'Nashville Predators' :
                    teamImage.style.background = 'url(\'src/images/hockkey_cards/488469.jpg\') center/cover';
                    break;
            }
            allTitle.textContent = `${cardState}`
        })
    })
};

const imageOfFilter = () => {
    teamImage.addEventListener('click', () => {
        allTitle.textContent = 'All NHL Events';
        cardState = '';
        tickets.forEach((ticket) => {
            ticket.classList.remove('hide')
        });
        teamImage.style.display = 'none';
        number = 15;
        maxTick();
    });
};

filter();
imageOfFilter();

