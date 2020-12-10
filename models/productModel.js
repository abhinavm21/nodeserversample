let products = require('../data/products.json')
const {writeToFile} = require('../utils')

function findAll(){

    return new Promise((resolve,reject) =>{
        resolve(products)
    })
}
function findById(id){
    return new Promise((resolve,reject)=>{
    const product = products.find((p) => p.id === id)
    resolve(product)
})
}
function create(product)
{
    return new Promise((resolve,reject)=>{
        let ide = (products.length)+1;
        let id =ide.toString()
        const newProduct ={id,...product}
        products.push(newProduct)
        writeToFile('./data/products.json',products)
        resolve(newProduct)
    })
}
function update(id, product){
    return new Promise((resolve,reject)=>{
        const index = products.findIndex((p)=>p.id === id)
        products[index]={id,...product}
        writeToFile('./data/products.json', products);
        resolve(products[index])
    })
    
}
function remove(id){
    return new Promise((resolve,reject)=>{
        products = products.filter((p)=>p.id !== id)
        writeToFile('./data/products.json', products)
        resolve()

    })
   

}
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}