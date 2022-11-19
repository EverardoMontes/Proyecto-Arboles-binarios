// mi clase arbol funciona como lista y arbol, depende del método crea una u otra cosa
class arbolBinario{
    constructor(){
        this.raiz=null;
        this.primero = null;
        this.ultimo = null;
        this.primeroPost = null;
        this.primeroPre = null;
    }
    agregarExpresion(ecuacion){
        let nodo = new Nodo();
        for(let i=0;i>=ecuacion.length;i++){
            nodo = new Nodo(ecuacion[i]);
            this.agregarLista(nodo);
        }
    }
    agregarLista(nuevo){
        if(this.primero==null){
            nuevo.siguiente = null;
            nuevo.anterior = null;
            this.primero=nuevo;
            this.ultimo=nuevo;
        }
        if(this.primero!=null){
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
        }
    }
    generarArbol(){
        let aux = this.primero;
        while(aux!=null){
            if(aux.cifra=="*" || aux.cifra =="/"){
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.siguiente = aux.hijod.siguiente;
                aux.anterior = aux.hijoi.anterior;
                aux.hijoi.anterior = null;
                aux.hijod.siguiente = null;
            }
            aux = aux.siguiente;
        }
        while(aux!=null){
            if(aux.cifra=="+" || aux.cifra =="-"){
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
    _preOrder(nodox){ // RID
        console.log(nodox.cifra) //R
        if(nodox.hijoi!=null){
            this._preOrder(nodox.hijoi);    //I
        }
        if(nodox.hijod!=null){
            this._preOrder(nodox.hijod);
        }
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
    listar(){
        let res = "";
        let aux = this.primero;
        while(aux!=null){
            res += aux.cifra + " " ;
            aux = aux.siguiente;
        }
        return res;
    }
}
/*
_inOrder(nodox){ // IRD
                if(nodox.hijoizq!=null){
                    this._inOrder(nodox.hijoizq);   //I
                }
                console.log(nodox.numero);  // R
                if(nodox.hijoder!=null){
                    this._inOrder(nodox.hijoder); //D
                }
            }
*/

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
expresion.agregarExpresion("3*9-6*3/2+3*6+5*4/2");
console.log(expresion.listar());

/*
nodo = new Nodo(ecuacion[0]);
expresion.agregarLista(nodo);
nodo = new Nodo(ecuacion[1]);
expresion.agregarLista(nodo);
nodo = new Nodo(ecuacion[2]);
expresion.agregarLista(nodo);
*/
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
