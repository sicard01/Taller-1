const carrito = [
    {
        id : 1,
        nombre : "Lenovo LEGION",
        precio : 3500000,
        descripcion : "Computador laptop",
        obtenerPrecio: function(){
            return `nombre:${this.nombre}`
        },
        caracteristicas : {
            dimensiones: {
                largo : 50,
                ancho : 30,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 2,
        nombre : "audifonos beats",
        precio : 1500000,
        descripcion : "audifonos de alta fidelidad",
        obtenerPrecio: function(){
            return `nombre:${this.nombre}`
        },
        caracteristicas : {
            dimensiones: {
                largo : 2,
                ancho : 2,
                alto : 2
            },
            fabricacion : {
                pais : "vietnam",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 3,
        nombre : "motorola g60",
        precio : 2300000,
        descripcion : "telefono inteligente",
        obtenerPrecio: function(){
            return `nombre:${this.nombre}`
        },
        caracteristicas : {
            dimensiones: {
                largo : 15,
                ancho : 8,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 4,
        nombre : "AMD 5 5600G",
        precio : 600000,
        descripcion : "procesador pc de torre",
        obtenerPrecio: function(){
            return `nombre:${this.nombre}`
        },
        caracteristicas : {
            dimensiones: {
                largo : 5,
                ancho : 5,
                alto : 0.5
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 5,
        nombre : "xiaomi redmi note 11",
        precio : 800000,
        descripcion : "telefono inteligente",
        obtenerPrecio: function(){
            return `nombre:${this.nombre}`
        },
        caracteristicas : {
            dimensiones: {
                largo : 16,
                ancho : 8,
                alto : 1
            },
            fabricacion : {
                pais : "vietnam",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
]
for ( articulo of carrito){
    

//const { nombre, precio } = articulo
//console.log(nombre, precio)
//let mensaje = `nombre del producto: ${nombre}, de precio ${precio}`;
//conosole.log(mensaje)

//callback: un parametro de tipo fu
carrito.forEach(articulo=>{
    /*const {nombre, 
        caracteristicas:  {dimensiones: {ancho} ,
                           fabricacion: {pais}}
         } = articulo
  //  console.log(pais); */
})}

//console.log(articulo.obtenerPrecio());
//map: crear u nuevo arreglo
//a partir del original
const nombreProducto =
 carrito.map((producto1)=>
    {return producto1.nombre})

 //console.log(nombreProducto)

 //find: encuentra 
 //el primer elemento que cumple con una condicion
 let articulochino= carrito.find ((articulo)=> {
    return articulo.
           caracteristicas. 
           fabricacion.
           pais === "china"
 })

 let articuloschinos =carrito.filter ((articulo)=>{
    return articulo.
           caracteristicas.
           fabricacion.
           pais === "vietnam"
 })
 console.log(articuloschinos);



 

