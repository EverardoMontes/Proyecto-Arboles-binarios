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
        if(this.raiz = null){
            this.raiz = this.primero;
        }
        else{
            let aux = this.primero;
        }
    }
    _agregarRec(nuevo,nodox){
        if(nuevo.numero == nodox.numero){
            throw error;
        }
        if(nuevo.numero < nodox.numero){
            if(!nodox.hijoizq){
                nodox.hijoizq = nuevo;
            }
            else{
                this._agregarRec(nuevo,nodox.hijoizq);
            }
        }
        else{
            if(!nodox.hijoder){
                nodox.hijoder = nuevo;
            }
            else{
                this._agregarRec(nuevo,nodox.hijoder);
            }
        }
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

   /* inorder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._inOrder(this.raiz);
        }
    }
    _inOrder(nodox){ // IRD
        if(nodox.hijoizq!=null){
            this._inOrder(nodox.hijoizq);   //I
        }
        console.log(nodox.numero);  // R
        if(nodox.hijoder!=null){
            this._inOrder(nodox.hijoder); //D
        }
    } */
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
let expresion = new Expresion();
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
console.log(expresion.primero);
