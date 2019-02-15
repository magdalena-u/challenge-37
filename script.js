const menu = document.querySelector('.nav_label');
const navCont = document.querySelector('.nav_content');

// search label

const loop = document.querySelector('.fa-search');
const label = document.querySelector('form input');
const search = document.querySelector('.search');


loop.addEventListener('click', function () {
    search.classList.toggle('active_search')
    label.classList.toggle('active_label')
})

/*our creative team */

const leftArr = document.querySelector('.arrow1');
const rightArr = document.querySelector('.arrow2');
const divTeam = document.querySelectorAll('.team_imgs>div');
let n = 1;

// left click - do naprawy

leftClick = () => {
    document.querySelector('.active_img').classList.remove('active_img');
    document.querySelector('.first').classList.remove('first');
    document.querySelector('.third').classList.remove('third');
    if (n >= 1) {
        n--;
        let prev = n - 1;
        let next = n + 1;
        if (prev < 0) {
            prev = 2;
        }
        divTeam[n].classList.add('active_img');
        divTeam[prev].classList.add('first');
        divTeam[next].classList.add('third');
        console.log(prev);
        console.log(n);
        console.log(next);
    } else {
        n = 2;
        let prev = n - 1;
        let next = 0;
        divTeam[n].classList.add('active_img');
        divTeam[prev].classList.add('first');
        divTeam[next].classList.add('third');
        console.log(prev);
        console.log(n);
        console.log(next);
    }
}

rightClick = () => {
    document.querySelector('.active_img').classList.remove('active_img');
    document.querySelector('.first').classList.remove('first');
    document.querySelector('.third').classList.remove('third');
    if (n < 2) {
        n++;
        let prev = n - 1;
        let next = n + 1;
        if (next > 2) {
            next = 0
        }
        divTeam[n].classList.add('active_img');
        divTeam[prev].classList.add('first');
        divTeam[next].classList.add('third');
    } else {
        n = 0;
        let prev = 2;
        let next = n + 1;
        divTeam[n].classList.add('active_img');
        divTeam[prev].classList.add('first');
        divTeam[next].classList.add('third');
    }
}


leftArr.addEventListener('click', leftClick);
rightArr.addEventListener('click', rightClick);

//what client says

const clientFirst = document.querySelector('.client_img1');
const clientSecond = document.querySelector('.client_img2');
const clientThird = document.querySelector('.client_img3');
const clientMain = document.querySelector('.client_main_img');

clientFirst.addEventListener('click', function () {
    clientMain.style.backgroundImage = 'url(images/client1.png)';
})

clientSecond.addEventListener('click', function () {
    clientMain.style.backgroundImage = 'url(images/team2.png)';
})

clientThird.addEventListener('click', function () {
    clientMain.style.backgroundImage = 'url(images/team3.png)';
})


/* menu - mobile version */

const openMenu = () => {
    navCont.classList.toggle('active');
}

menu.addEventListener('click', openMenu);