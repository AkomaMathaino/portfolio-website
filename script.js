document.querySelectorAll('.link').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.textDecoration = 'underline';
    });
});

document.querySelectorAll('.link').forEach(item => {
    item.addEventListener('mouseout', event => {
        item.style.textDecoration = 'none';
    });
});

const button = document.getElementById('dark')
let page = 'light';

button.onpointerover = function() {
    button.style.cursor = 'pointer';
    if (page === 'light') {
        button.style.color = 'black';
        button.style.backgroundColor = 'steelblue';
    } else {
        button.style.color = 'white';
        button.style.backgroundColor = 'midnightblue';
    }
};

button.onpointerout = function() {
    if (page === 'light') {
        button.style.color = 'white';
        button.style.backgroundColor = 'midnightblue';
    } else {
        button.style.color = 'black';
        button.style.backgroundColor = 'steelblue';
    }
};

button.onclick = function() {
    if (page === 'light') {
        document.getElementById('page').style.backgroundColor = 'black';
        document.getElementById('header').style.backgroundColor = '#494949';
        document.getElementById('page').style.color = 'white';
        document.getElementById('phone').style.color = 'white';
        button.style.backgroundColor = 'midnightblue';
        button.style.color = 'white';
        button.innerHTML = 'Light Mode';
        document.querySelectorAll('.link').forEach(item => {
            item.style.color = 'lightblue';
        });
        page = 'dark';
    } else {
        document.getElementById('page').style.backgroundColor = 'white';
        document.getElementById('header').style.backgroundColor = '#bfbfbf';
        document.getElementById('page').style.color = 'black';
        document.getElementById('phone').style.color = 'black';
        button.style.backgroundColor = 'steelblue';
        button.style.color = 'black';
        button.innerHTML = 'Dark Mode';
        document.querySelectorAll('.link').forEach(item => {
            item.style.color = 'darkblue';
        });
        page = 'light';
    }
}