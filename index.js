let cards = document.querySelector('.cards')
 
 const cars = [
     {
         img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
         car: 'BMW',
         status: 'new',         quantity: 8
    },
     {
         img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
         car: 'BMW',
         status: 'old',
         quantity: 12
     },
     {
         img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
         car: 'Mercedes Benz',
         status: 'new',
         quantity: 2
     },
     {
         img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
         car: 'Tesla',
         status: 'new',
         quantity: 15
     },
     {
         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
         car: 'Toyota',
         status: 'unnnew',
         quantity: 19
     },
     {
         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
         car: 'Toyota',
         status: 'new',
         quantity: 19
     },
     {
         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
         car: 'Toyota',
         status: 'new',
         quantity: 19
     }
 ]


 let renderedCars = cars.map((element) =>{

    return `
    <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <img class= "img-1" src="${element.img}">
                    <div class="card-body">
                        <h5 class="card-title">${element.car}</h5>
                        <p>Status: ${element.status}</p>
                        <span>Quantity: ${element.quantity}</span>
                    </div>
                </div>
    </div>
    `

 }
 );
 cards.innerHTML = renderedCars.join('')
