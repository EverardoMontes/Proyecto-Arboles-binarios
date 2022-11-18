// mi clase arbol funciona como lista y arbol, depende del método crea una u otra cosa
class arbolBinario{
    constructor(){
        this.raiz=null;
        this.primero = null;
        this.ultimo = null;
    }
    agregarLista(nuevo){
        if(this.primero==null){
            this.primero=nuevo;
            this.ultimo=nuevo;
        }
        else{
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
        }
    }
    generarArbol(){
        let aux = this.primero;
        while(aux!==null){
            if(aux.cifra==="*" || aux.cifra ==="/"){
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.siguiente = aux.hijod.siguiente;
                aux.anterior = aux.hijoi.anterior;
                aux.hijoi.anterior = null;
                aux.hijod.siguiente = null;
            }
            aux = aux.siguiente;
        }
        while(aux!==null){
            if(aux.cifra==="+" || aux.cifra ==="-"){
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.siguiente = aux.hijod.siguiente;
                aux.anterior = aux.hijoi.anterior;
                aux.hijoi.anterior = null;
                aux.hijod.siguiente = null;
            }
            aux = aux.siguiente;
        }
        this.raiz = this.primero;
        this.primero = null;
    }
    preOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._preOrder(this.raiz);
        }
    }
    _preOrder(){

    }
    postOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._postOrder(this.raiz);
        }
    }
    _postOrder(){

    }
}

class Expresion{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }
    agregarLista(nuevo){
        if(this.primero==null){
            this.primero=nuevo;
            this.ultimo=nuevo;
        }
        else{
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
        }
    }
}
class Nodo{
    constructor(cifra){
        this.cifra = cifra;
        this.hijoi = null;
        this.hijod = null;
        this.siguiente = null;
        this.anterior = null;
    }
}
//let expresion = [3,"*",9,"-",6,"*",3,"/",2,"+",3,"*",6,"+",5,"*",4,"/",2];
//hazlo eficiente perro;
let expresion = new arbolBinario();
let nodiños = "3*9-6*3/2+3*6+5*4/2";
for(let i=0;i>=nodiños.length;i++){
expresion.agregarLista(nodiños[i]);
}
/*
let nodo = new Nodo(3);
expresion.agregar(nodo);
 nodo = new Nodo("*");
expresion.agregar(nodo);
 nodo = new Nodo(9);
expresion.agregar(nodo);
 nodo = new Nodo("-");
expresion.agregar(nodo);
 nodo = new Nodo(6);
expresion.agregar(nodo);
 nodo = new Nodo("*");
expresion.agregar(nodo);
 nodo = new Nodo(3);
expresion.agregar(nodo);
 nodo = new Nodo("/");
expresion.agregar(nodo);
 nodo = new Nodo(2);
expresion.agregar(nodo);
 nodo = new Nodo("+");
expresion.agregar(nodo);
 nodo = new Nodo(3);
expresion.agregar(nodo);
 nodo = new Nodo("*");
expresion.agregar(nodo);
 nodo = new Nodo(6);
expresion.agregar(nodo);
 nodo = new Nodo("+");
expresion.agregar(nodo);
 nodo = new Nodo(5);
expresion.agregar(nodo);
 nodo = new Nodo("*");
expresion.agregar(nodo);
 nodo = new Nodo(4);
expresion.agregar(nodo);
 nodo = new Nodo("/");
expresion.agregar(nodo);
 nodo = new Nodo(2);
expresion.agregar(nodo);
*/
console.log(expresion.primero);
