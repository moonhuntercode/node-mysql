const route=require("express").Router();

const{getCars,addCar,getOneCar,deleteCar,editCar}=require('../controllers/cars.controller');

route.route('/').get(getCars);
route.route('/:id').get(getOneCar)
route.route('/').post(addCar)
route.route('/:id').put(editCar)
route.route('/:id').delete(deleteCar)
module.exports=route;