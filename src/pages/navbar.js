function navbar() {
    const navbar = document.querySelector('#navbar');

    const navbarItem1 = document.createElement('div');
    navbarItem1.className = 'item';
    const menuButton = document.createElement('button');
    menuButton.id = 'menu';
    menuButton.innerHTML = 'MENU';

    navbar.append(navbarItem1);
    navbarItem1.append(menuButton);

    const navbarItem2 = document.createElement('div');
    navbarItem2.className = 'item';
    const aboutButton = document.createElement('button');
    aboutButton.id = 'about';
    aboutButton.innerHTML = 'ABOUT';

    navbar.append(navbarItem2);
    navbarItem2.append(aboutButton);
}

export default navbar;