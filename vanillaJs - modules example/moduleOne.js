const randomModels = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Nissan",
    "Hyundai",
    "Kia",
    "Subaru",
    "Mazda",
    "Jeep",
    "Lexus",
    "Tesla",
    "Volvo",
    "Porsche",
    "Cadillac",
    "Buick",
    "Acura",
    "Infiniti",
    "GMC",
    "Chrysler",
    "Dodge",
    "Lincoln",
    "Land Rover",
    "Jaguar",
    "Mitsubishi",
    "RAM",
    "Mini",
    "Fiat",
    "Alfa Romeo",
    "Bentley",
    "Ferrari",
    "Maserati",
    "Genesis",
    "McLaren",
    "Bugatti",
    "Rolls-Royce",
    "Lamborghini",
    "Lotus",
    "Aston Martin",
    "Pagani",
    "Koenigsegg"
]

function create() {
    let arr = []
    for (let i = 0; i < 100; i++) {
        const item = {
            brand: randomModels[Math.floor(Math.random()*randomModels.length )]
        }
        arr.push(item)
    }
    return arr
}

export default create