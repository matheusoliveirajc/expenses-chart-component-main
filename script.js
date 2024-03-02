function run(){
    let day = 0;
    let dayCollumn = document.querySelectorAll('.day-collumn');
    let weekDay = document.querySelectorAll('.weekDay');
    let currentBalance = document.querySelector('.current-balance');
    let moneySpent = document.querySelectorAll('.money-spent');
    let totalSpent = document.querySelector('.total-spent');
    const spending = [
        (Math.random() * 101),
        (Math.random() * 101),
        (Math.random() * 101),
        (Math.random() * 101),
        (Math.random() * 101),
        (Math.random() * 101),
        (Math.random() * 101)
    ];
    var balance = Number(1160.00);
    var totalWeek = Number();
    for(let i = 0;i<7;i++){
        dayCollumn[i].style.height = '0px';
    }
    switch(day){
        case 1:
            dayCollumn[0].classList.add('today-graphic');
            weekDay[0].classList.add('current-day');
            dayCollumn[0].style.height = Math.floor(spending[0] * 2)+'px';
            moneySpent[0].innerHTML = `${spending[0].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
            totalWeek += spending[0];
            totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
            currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
        break
        case 2:
            for(let i = 0; i<2;i++){
                dayCollumn[i].classList.remove('today-graphic');
                weekDay[i].classList.remove('current-day');
                dayCollumn[1].classList.add('today-graphic');
                weekDay[1].classList.add('current-day');
                dayCollumn[i].style.height = Math.floor(spending[i] * 2)+'px';
                moneySpent[i].innerHTML = `${spending[i].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
                totalWeek += spending[i];
                totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
                currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;;
            }
        break
        case 3:
            for(let i = 0; i<3;i++){
                dayCollumn[i].classList.remove('today-graphic');
                weekDay[i].classList.remove('current-day');
                dayCollumn[2].classList.add('today-graphic');
                weekDay[2].classList.add('current-day');
                dayCollumn[i].style.height = Math.floor(spending[i] * 2)+'px';
                moneySpent[i].innerHTML = `${spending[i].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
                totalWeek += spending[i];
                totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
                currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
            }
        break
        case 4:
            for(let i = 0; i<4;i++){
                dayCollumn[i].classList.remove('today-graphic');
                weekDay[i].classList.remove('current-day');
                dayCollumn[3].classList.add('today-graphic');
                weekDay[3].classList.add('current-day');
                dayCollumn[i].style.height = Math.floor(spending[i] * 2)+'px';
                moneySpent[i].innerHTML = `${spending[i].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
                totalWeek += spending[i];
                totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
                currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
            }
        break
        case 5:
            for(let i = 0; i<5;i++){
                dayCollumn[i].classList.remove('today-graphic');
                weekDay[i].classList.remove('current-day');
                dayCollumn[4].classList.add('today-graphic');
                weekDay[4].classList.add('current-day');
                dayCollumn[i].style.height = Math.floor(spending[i] * 2)+'px';
                moneySpent[i].innerHTML = `${spending[i].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
                totalWeek += spending[i];
                totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
                currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
            }
        break
        case 6:
            for(let i = 0; i<6;i++){
                dayCollumn[i].classList.remove('today-graphic');
                weekDay[i].classList.remove('current-day');
                dayCollumn[5].classList.add('today-graphic');
                weekDay[5].classList.add('current-day');
                dayCollumn[i].style.height = Math.floor(spending[i] * 2)+'px';
                moneySpent[i].innerHTML = `${spending[i].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
                totalWeek += spending[i];
                totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
                currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
            }
        break
        case 0:
            for(let i = 0; i<7;i++){
                dayCollumn[i].classList.remove('today-graphic');
                weekDay[i].classList.remove('current-day');
                dayCollumn[6].classList.add('today-graphic');
                weekDay[6].classList.add('current-day');
                dayCollumn[i].style.height = Math.floor(spending[i] * 2)+'px';
                moneySpent[i].innerHTML = `${spending[i].toLocaleString('en-us', {style: 'currency', currency:'USD'})}`;
                totalWeek += spending[i];
                totalSpent.innerHTML = `${totalWeek.toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
                currentBalance.innerHTML = `${(balance - totalWeek).toLocaleString('en-us', {style:'currency', currency:'USD'})}`;
            }
    }
}
run();