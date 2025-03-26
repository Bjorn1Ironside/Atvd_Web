const cars = [
    { 
        id: 1, 
        name: 'Ferrari 488 GTB', 
        category: 'Esportivo', 
        price: 400000, 
        description: 'Superesportivo com motor V8 e 670 cv.', 
        img: 'https://th.bing.com/th/id/OIP.KHulsBCbINKblTLs7wJr-AHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7', 
        infoLink: 'https://www.google.com/search?q=Ferrari+488+GTB' 
    },
    { 
        id: 2, 
        name: 'BMW M3', 
        category: 'Esportivo', 
        price: 300000, 
        description: 'Sedan esportivo com 510 cv e tração integral.', 
        img: 'https://cdn.motor1.com/images/mgl/1ZQrxK/s3/2023-bmw-m3-cs-first-drive-review.jpg', 
        infoLink: 'https://www.google.com/search?q=BMW+M3' 
    },
    { 
        id: 3, 
        name: 'Audi A4', 
        category: 'Sedan', 
        price: 150000, 
        description: 'Sedan de luxo com motor 2.0 Turbo e 250 cv.', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnsFn4L9-L1nmG_PHh61hDVbv1wTVLg9NWg&s', 
        infoLink: 'https://www.google.com/search?q=Audi+A4' 
    },
    { 
        id: 4, 
        name: 'Chevrolet Camaro', 
        category: 'Muscle Car', 
        price: 180000, 
        description: 'Muscle car com motor V8 e 460 cv.', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVLB26h7Qh8ip2bQtIvQ4zSPvr6AQdtJkpg&s', 
        infoLink: 'https://www.google.com/search?q=Chevrolet+Camaro' 
    },
    { 
        id: 5, 
        name: 'Tesla Model S', 
        category: 'Elétrico', 
        price: 350000, 
        description: 'Sedan elétrico com 500 km de autonomia e 0-100 em 3,2s.', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5a4EvkxkPWijtgniN4TavHt087a6ng7DE6A&s', 
        infoLink: 'https://www.google.com/search?q=Tesla+Model+S' 
    },
    { 
        id: 6, 
        name: 'Mercedes-Benz GLC', 
        category: 'SUV', 
        price: 220000, 
        description: 'SUV de luxo com motor 3.0 V6 e 400 cv.', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B95STJ2Y9OnF6rSAzV0ejNhl_2KNPtN3rw&s', 
        infoLink: 'https://www.google.com/search?q=Mercedes-Benz+GLC' 
    },
    { 
        id: 7, 
        name: 'Ford Mustang', 
        category: 'Muscle Car', 
        price: 160000, 
        description: 'Icone dos muscle cars americanos, com motor V8 e 450 cv.', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCdAYTwe3417wHKIt2YBwAw5HXN8j7aAP2Q&s', 
        infoLink: 'https://www.google.com/search?q=Ford+Mustang' 
    },
    { 
        id: 8, 
        name: 'Porsche 911 Carrera', 
        category: 'Esportivo', 
        price: 500000, 
        description: 'Esportivo de luxo com motor 6 cilindros e 370 cv.', 
        img: 'https://s2-autoesporte.glbimg.com/Y7wpbxN17-cxfdIsuVUjjh82-9k=/0x0:1900x1165/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/B/E/S2udcRR7SV1hZYw4mWIg/porsche-911-carrera.jpg', 
        infoLink: 'https://www.google.com/search?q=Porsche+911+Carrera' 
    },
    { 
        id: 9, 
        name: 'Jaguar F-Type', 
        category: 'Esportivo', 
        price: 350000, 
        description: 'Desempenho de ponta com motor V8 e 575 cv.', 
        img: 'https://www.agoramotors.com.br/wp-content/uploads/2024/09/jaguar-f-type-2025-na-diagonal--1024x576.jpg', 
        infoLink: 'https://www.google.com/search?q=Jaguar+F-Type' 
    },
    { 
        id: 10, 
        name: 'Land Rover Range Rover', 
        category: 'SUV', 
        price: 300000, 
        description: 'SUV de luxo com motor V8 e tração integral.', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3d0gUYV5nun_aV7Z-K8Hdp_f4Ksh_3I6Uw&s', 
        infoLink: 'https://www.google.com/search?q=Land+Rover+Range+Rover' 
    }
];

function displayCars(filteredCars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    if (filteredCars.length === 0) {
        document.getElementById('message').textContent = 'Nenhum carro encontrado!';
    } else {
        document.getElementById('message').textContent = '';
        filteredCars.forEach(car => {
            const carElement = document.createElement('div');
            carElement.classList.add('car');
            
            // Gerar o link para as informações do carro
            const searchLink = car.infoLink;

            carElement.innerHTML = `
                <a href="${searchLink}" target="_blank">
                    <img src="${car.img}" alt="${car.name}">
                    <h3>${car.name}</h3>
                </a>
                <p>${car.description}</p>
                <p><strong>R$ ${car.price.toFixed(2)}</strong></p>
            `;
            carList.appendChild(carElement);
        });
    }
}

function searchCar() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(query) || car.category.toLowerCase().includes(query)
    );
    displayCars(filteredCars);
}

// Exibe todos os carros inicialmente
displayCars(cars);
