const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral'
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.'
    },
    {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90\'s pop-up'
    },
    {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
    },
    {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird'
    },
    {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'
    },
    {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    },
    {
        id: 10,
        title: 'steak dinner',
        category: 'dinner',
        price: 39.99,
        img: './images/item-10.jpeg',
        desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing'
    }
]

const sectionCenter = document.querySelector('.section-center');
const filterBtnContainer = document.querySelector('.filter-btn');

//several html elements with the same class, so
//we use querySelectorAll 
//the output will be an array

//load out menu items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuBtns(menu);
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<section>
        <img src="${item.img}" alt="${item.title}" />
        <div class="menu-info">
            <div class="menu-info-title">
                <h4>${item.title}</h4>
                <p class="price">$${item.price}</p>
            </div>
            <p class="food-content">${item.desc}</p>
        </div>
    </section>`;
    });
    //turn all array items into a string
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
};

function displayMenuBtns(menuItems) {
    //capture each category from the menu into an array
    const categories = menuItems.reduce(function (categoryMenu, item) {
        if (!categoryMenu.includes(item.category)) {
            categoryMenu.push(item.category);
        } return categoryMenu;
    }, ['all'])
    //now the categories = ['all', 'breakfast', 'lunch', 'shakes', 'dinner']
    //then create buttons for the categories
    let categoryBtns = categories.map(function (item) {
        return `<button data-id="${item}" class="btn" type="button">${item}</button>`;
    });
    categoryBtns = categoryBtns.join('');
    filterBtnContainer.innerHTML = categoryBtns;

    //after the buttons are created, we then can select them in HTML and filt them
    filter();
};

function filter() {
    const filterBtn = document.querySelectorAll('.btn');
    //filt menu items
    filterBtn.forEach(function (btn) {

        btn.addEventListener('click', function (e) {

            //which button is clicked? Recognized by the button's 
            //data-id attribute that we establish in the html
            const category = e.currentTarget.dataset.id;
            //create a new array, filted fron the menu array
            const menuCategory = menu.filter(function (menuItem) {
                if (category === menuItem.category) {
                    return true;
                } else if (category === 'all') {
                    return true;
                } else {
                    return false;
                };
            });
            displayMenuItems(menuCategory);
        });
    });
};

//Another way to filt the menu: 

// filterBtn.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {

//         const category = e.currentTarget.dataset.id;

//         const menuCategory = menu.filter(function (menuItem) {
//             if (category === menuItem.category) {
//                 return menuItem;
//             };
//         });

//         if (category === 'all') {
//             displayMenuItems(menu);
//         } else {
//             displayMenuItems(menuCategory);
//         };

//     });
// });