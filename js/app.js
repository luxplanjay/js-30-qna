// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// // Метод sort - sortByAmount, sortByPrice
// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => a.amount - b.amount);
// };
// // console.table(sortByAscendingAmount(vehicles));

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };
// // console.table(sortByDescendingPrice(vehicles));

// // filterByAmount + только название модели
// // console.table(vehicles.filter(vehicle => vehicle.amount >= 12).map(vehicle => vehicle.model));

// // console.table(
// //   vehicles.reduce((result, vehicle) => {
// //     if (vehicle.amount >= 12) {
// //       return [...result, vehicle.model];
// //     }
// //     return result;
// //   }, []),
// // );

// // filter + sort
// // console.table(vehicles.filter(vehicle => vehicle.onSale).sort((a, b) => a.price - b.price));

// // Метод map - getModels
// const getModels = cars => {
//   return cars.map(car => car.model);
// };
// // console.table(getModels(vehicles));

// // Метод filter - filterByAmount, filterByPrice, getCarsWithDiscount, getCarsWithType

// const filterByAmount = (cars, amountThreshold) => {
//   return cars.filter(car => car.amount >= amountThreshold);
// };
// // console.table(filterByAmount(vehicles, 10));
// // console.table(filterByAmount(vehicles, 15));

// const filterByPrice = (cars, priceThreshold) => {
//   return cars.filter(car => car.price < priceThreshold);
// };
// // console.table(filterByPrice(vehicles, 25000));
// // console.table(filterByPrice(vehicles, 23000));

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => car.onSale);
// };
// // console.table(getCarsWithDiscount(vehicles));

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => car.type === type);
// };
// // console.table(getCarsWithType(vehicles, 'suv'));

// //  А если хочу отфильтровать и те что на sale и те что дешевле 23к,просто добовлять нескольео условий?или надо два раза фильтр делать?

// const getCarsOnSaleAndWithPrice = (cars, priceThreshold) => {
//   return cars.filter(car => car.price < priceThreshold && car.onSale);
// };
// // console.table(getCarsOnSaleAndWithPrice(vehicles, 23000));

// // Метод find - getCarByModel
// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model);
// };
// // console.log(getCarByModel(vehicles, 'F-150'));

// // Метод reduce - getTotalPrice
// const getTotalCarsAmount = cars => {
//   return cars.reduce((total, car) => total + car.amount, 0);
// };
// // console.log(getTotalCarsAmount(vehicles));
