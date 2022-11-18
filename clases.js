class arbolBinario{
    constructor(){
        this.raiz=null;
    }
    agregar(expresion){
        for(let i = expresion.length-1;i<=0;i++){
            if(expresion[i].cifra == "+" || expresion[i].cifra == "-"){
                
            }
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
class Nodo{
    constructor(cifra){
        this.cifra = cifra;
        this.hijoi = null;
        this.hijod = null;
    }
}
//let expresion = [3,"*",9,"-",6,"*",3,"/",2,"+",3,"*",6,"+",5,"*",4,"/",2];
let expresion = [];
let nodo = new Nodo(3);
expresion.push(nodo);
 nodo = new Nodo("*");
expresion.push(nodo);
 nodo = new Nodo(9);
expresion.push(nodo);
 nodo = new Nodo("-");
expresion.push(nodo);
 nodo = new Nodo(6);
expresion.push(nodo);
 nodo = new Nodo("*");
expresion.push(nodo);
 nodo = new Nodo(3);
expresion.push(nodo);
 nodo = new Nodo("/");
expresion.push(nodo);
 nodo = new Nodo(2);
expresion.push(nodo);
 nodo = new Nodo("+");
expresion.push(nodo);
 nodo = new Nodo(3);
expresion.push(nodo);
 nodo = new Nodo("*");
expresion.push(nodo);
 nodo = new Nodo(6);
expresion.push(nodo);
 nodo = new Nodo("+");
expresion.push(nodo);
 nodo = new Nodo(5);
expresion.push(nodo);
 nodo = new Nodo("*");
expresion.push(nodo);
 nodo = new Nodo(4);
expresion.push(nodo);
 nodo = new Nodo("/");
expresion.push(nodo);
 nodo = new Nodo(2);
expresion.push(nodo);
console.log(expresion);
