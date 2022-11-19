// mi clase arbol funciona como lista y arbol, depende del método crea una u otra cosa
class Nodo{
    constructor(cifra){
        this.cifra = cifra;
        this.hijoi = null;
        this.hijod = null;
        this.siguiente = null;
        this.anterior = null;
    }
}
class arbolBinario{
    constructor(){
        this.raiz=null;
        this.primero = null;
        this.ultimo = null;
        this.primeroPost = null;
        this.primeroPre = null;
    }
    agregarExpresion(ecuacion){     //LISTO
        let nodo = new Nodo();
        let i=0;
        let largo = Number(ecuacion.length);
        while(i<largo){
            nodo = new Nodo(ecuacion[i]);
            this.agregarLista(nodo);
            i++;
        }
    }
    agregarLista(nuevo){            // LISTO
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
    listar(){           //LISTO
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
let expresion = new arbolBinario();
expresion.agregarExpresion("3*9-6*3/2+3*6+5*4/2");
console.log(expresion.listar());

