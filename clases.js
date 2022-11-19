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
        this.primeroAux = null;
        this.ultimoAux = null;
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
            this.primero.anterior=null;
            this.ultimo=nuevo;
        }
        if(this.primero!=null){
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
        }
        return;
    }
    agregarListaAuxiliar(nuevo){
        if(this.primeroAux==null){
            this.primeroAux=nuevo;
            this.ultimoAux=nuevo;
        }
        if(this.primeroAux!=null){
            this.ultimoAux.siguiente = nuevo;
            nuevo.anterior = this.ultimoAux;
            this.ultimoAux = nuevo;
        }
        return;
    }
    generarArbol(){
        let aux = this.primero;
        let temporal;
        while(aux!=null){
            if(aux.cifra=="*" || aux.cifra =="/"){
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.siguiente = aux.siguiente.siguiente;
                aux.anterior = aux.anterior.anterior;
                aux.hijod.siguiente = null;
                aux.hijoi.anterior = null;
                if(aux.anterior.cifra === "*" || aux.anterior.cifra === "/"){
                    aux.hijoi = aux.anterior;
                    aux.anterior = aux.hijoi.anterior;
                    aux.hijoi.anterior = null;
                }
                if(aux.anterior == aux.hijoi || aux.anterior == aux.hijod){
                    aux.anterior.siguiente = null;
                    if(aux.anterior.anterior!=null){
                        aux.anterior.anterior.siguiente = aux;
                        temporal = aux.anterior.anterior;
                    }
                    else{
                        temporal = null;
                    }
                    aux.anterior.anterior = null;
                    aux.anterior = temporal;
                }
            }
            
            aux = aux.siguiente;

        }
        let auxiliar = this.primero;
        while(auxiliar!=null){
            console.log("entré")
            if(auxiliar.cifra=="*" || auxiliar.cifra =="/" || auxiliar.cifra =="+" || auxiliar.cifra =="-"){
                console.log();
            }
            auxiliar = auxiliar.siguiente
        }
        console.log("nya");
        console.log(this.primero);
        if(Number(this.primero.cifra) == Number){
            this.primero = this.primero.siguiente;
            this.primero.anterior = null;
        }
        console.log(this.primero);
       
        let aux2 = this.listaAux;
        while(aux2!=null){
            if(aux.cifra==="+" || aux.cifra ==="-"){
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.siguiente = aux.hijod.siguiente;
                aux.anterior = aux.hijoi.anterior;
                aux.hijod.siguiente = null;
                aux.hijoi.anterior = null;
                if(aux.anterior.cifra === "+" || aux.anterior.cifra === "-"){
                    aux.hijoi = aux.anterior;
                    aux.anterior = aux.hijoi.anterior;
                    aux.hijoi.anterior = null;
                }
            }
            aux = aux.siguiente;
        }
        this.raiz = aux;
        this.primero = null;
        return this.raiz;
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
    listar(lista){           //LISTO
        let res = "";
        let aux = this.lista;
        while(aux!=null){
            res += aux.cifra + " " ;
            aux = aux.siguiente;
        }
        return res;
    }
    inorder(){
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
console.log(expresion.generarArbol());


