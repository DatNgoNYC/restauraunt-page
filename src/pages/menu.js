function menu() {
    const content = document.querySelector('#content');

    const drinksOnMenu = ['margarita', 'mojito', 'espresso-martini'];
    for (let index = 0; index < drinksOnMenu.length; index++) {
        const itemToAdd = document.createElement('div');
        itemToAdd.className = 'card';
        itemToAdd.id = drinksOnMenu[index];

        content.append(itemToAdd);
    }
}

export default menu