/*El precio de los video juegos no es el definitivo, en la entrega final 
estos seran cambiados para que se asemejen a la realidad
*/
const ViodeoJuegos = [{ProductoId: 1282, Producto: "doom ethernal", Precio: 1500.00, Genero: "ACCION"},
                    {ProductoId: 5900, Producto: "uncharted 4", Precio: 4500.00, Genero: "AVENTURA"},
                    {ProductoId: 8492, Producto: "call Of Duty MW2", Precio: 5000.00, Genero: "ACCION"},
                    {ProductoId: 4940, Producto: "death stranding", Precio: 4500.00, Genero: "AVENTURA"},
                    {ProductoId: 5643, Producto: "god of war ragnarok", Precio: 2000.00, Genero: "ACCION"},
                    {ProductoId: 4958, Producto: "minecraft", Precio: 2000.00, Genero: "AVENTURA"},
                    {ProductoId: 4839, Producto: "batlefield 2043", Precio: 3800.00, Genero: "ACCION"},
                    {ProductoId: 2938, Producto: "terraria", Precio: 64.00, Genero: "AVENTURA"},
                    {ProductoId: 1029, Producto: "red dead redemption 2", Precio: 1500.00, Genero: "ACCION"},
                    {ProductoId: 1059, Producto: "rayman", Precio: 750.00, Genero: "AVENTURA"},
                    {ProductoId: 9032, Producto: "pacman", Precio: 27.00, Genero: "ARCADE"},
                    {ProductoId: 4736, Producto: "ajedrez", Precio: 1.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 6758, Producto: "donkey kong", Precio: 13.00, Genero: "ARCADE"},
                    {ProductoId: 9473, Producto: "war craft", Precio: 400.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 1732, Producto: "sonic", Precio: 650.00, Genero: "ARCADE"},
                    {ProductoId: 1893, Producto: "age of empires", Precio: 1340.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 6784, Producto: "space invaders", Precio: 1.00, Genero: "ARCADE"},
                    {ProductoId: 7384, Producto: "xcom", Precio: 50.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 3849, Producto: "mario bros", Precio: 40.00, Genero: "ARCADE"},
                    {ProductoId: 2985, Producto: "damas", Precio: 200.00, Genero: "ESTRATEGIA"}]         
                    
const carrito = [] 

//Tambien pertenece al boton comprar

class compra{
    constructor(carrito){
        this.carrito = carrito
    }
    PrecioTotal(){
        if(this.carrito.lenght > 0){
            return "Error inesperado"
        } else {
            return this.carrito.reduce((acumulador, ViodeoJuegos)=>
            acumulador + ViodeoJuegos.Precio, 0)
        }
    }
    FinalizarCompra(){
      if(this.PrecioTotal() !== "Error inesperado"){
        return `¡La compra de $${this.PrecioTotal()} se realizo con exito!`
    }else{
        return `Error en la transaccion.`
    }

    }
}