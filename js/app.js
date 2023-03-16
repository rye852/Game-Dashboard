// header
const burgerBtn = document.querySelector('.logo button');
const nav = document.querySelector('.main nav');
const angDown = document.querySelector('header .user-aria .ang-down ');
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  nav.classList.toggle('active');
  nav.style.height = `${document.querySelector('.main').clientHeight + 60}px`;
});
angDown.addEventListener('click', () => {
  if (angDown.classList.contains('active')) {
    angDown.lastElementChild.style.transform = 'translateY(10px)';
    angDown.lastElementChild.style.opacity = '0';
    angDown.lastElementChild.style.cssText +=
      'z-index: -1; pointer-events: none;';
    angDown.firstElementChild.style.transform = 'rotate(0)';
  } else {
    angDown.lastElementChild.style.transform = 'translateY(0px)';
    angDown.lastElementChild.style.opacity = '1';
    angDown.lastElementChild.style.cssText +=
      'z-index: 1;  pointer-events: all;';
    angDown.firstElementChild.style.transform = 'rotate(180deg)';
  }

  angDown.classList.toggle('active');
});

// nav

let messagesNoneSeen = [12, 45, 57];
const notifHeder = document.querySelector('header .user-aria .notif ');
const imageUser = document.querySelector('nav .user .image ');
notifHeder.attributes.getNamedItem('data-number').value =
  messagesNoneSeen.length;
imageUser.attributes.getNamedItem('data-number').value =
  notifHeder.attributes.getNamedItem('data-number').value;

const cates = document.querySelectorAll('nav .categorys .cate');
cates.forEach((cate) => {
  cate.addEventListener('click', () => {
    if (cate.classList.contains('active')) {
      cate.classList.remove('active');
    } else {
      let active = document.querySelector('nav .categorys .active');
      if (active != null) {
        active.classList.remove('active');
      }
      cate.classList.add('active');
    }
  });
});

const lis = document.querySelectorAll('.content > ul li:not(:last-of-type)');
const tabes = document.querySelectorAll('.tabes > div');
const visible = document.querySelector('.visibale-content');
changeTabe();
lis[0].click();
lis.forEach((li) => {
  li.addEventListener('click', () => {
    document
      .querySelector('.content > ul li.active')
      .classList.remove('active');
    li.classList.add('active');
  });
});

async function changeTabe() {
  lis.forEach((li, i) => {
    li.addEventListener('click', () => {
      visible.style.cssText =
        'opacity: 0; transition: .3s; transform: translateY(10px)';
      setTimeout(() => {
        let thecontent = tabes[i];
        visible.innerHTML = thecontent.innerHTML;
        visible.style.opacity = '1';
        visible.style.transform = 'translateY(0px)';
      }, 300);
    });
  });
}

const trieList = document.querySelector('.content ul li .list');
const trieGrid = document.querySelector('.content ul li .grid');

trieList.addEventListener('click', () => {
  document.querySelector('.content ul li .active').classList.remove('active');
  trieList.classList.add('active');
  const containerCard = document.querySelectorAll('.card-container');
  containerCard.forEach((card) => {
    card.style.cssText = `transition:.3s;display: grid;grid-template-columns: 1fr;gap: 25px;margin-bottom: 20px`;
  });
  const boxesContainer = document.querySelectorAll('.boxes-container');
  boxesContainer.forEach((box) => {
    box.style.cssText = `transition:.3s;display: grid; gap: 20px; grid-template-columns: 1fr 1fr;`;
  });
});

trieGrid.addEventListener('click', () => {
  document.querySelector('.content ul li .active').classList.remove('active');
  trieGrid.classList.add('active');
  const containerCard = document.querySelectorAll('.card-container');
  containerCard.forEach((card) => {
    card.style.cssText = `display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 25px;
    margin-bottom: 20px;`;
  });
  const boxesContainer = document.querySelectorAll('.boxes-container');
  boxesContainer.forEach((box) => {
    box.style.cssText = `display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));`;
  });
});

if (document.body.clientWidth <= 767) {
  const containerCard = document.querySelectorAll('.card-container');
  containerCard.forEach((card) => {
    card.style.cssText = `transition:.3s;display: grid;grid-template-columns: 1fr;gap: 25px;margin-bottom: 20px`;
  });
  const boxesContainer = document.querySelectorAll('.boxes-container');
  boxesContainer.forEach((box) => {
    box.style.cssText = `transition:.3s;display: grid; gap: 20px; grid-template-columns: 1fr;`;
  });
}
document.body.onresize = () => {
  nav.style.height = `${document.querySelector('.main').clientHeight + 60}px`;
  if (document.body.clientWidth <= 767) {
    const containerCard = document.querySelectorAll('.card-container');
    containerCard.forEach((card) => {
      card.style.cssText = `transition:.3s;display: grid;grid-template-columns: 1fr;gap: 25px;margin-bottom: 20px`;
    });
    const boxesContainer = document.querySelectorAll('.boxes-container');
    boxesContainer.forEach((box) => {
      box.style.cssText = `transition:.3s;display: grid; gap: 20px; grid-template-columns: 1fr;`;
    });
  } else {
    trieGrid.click();
  }
};
