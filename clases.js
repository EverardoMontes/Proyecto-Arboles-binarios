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
        this.raizPre = null;
        this.raizPost = null;
        this.preOrderArray = [];
        this.preOrderArrayAuxiliar=[];
        this.postOrderArray = [];
        this.postOrderArrayAuxiliar=[];
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
    _agregarListaAuxiliar(nuevo){
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
        while(aux!=null){
            if(aux.cifra==="*" || aux.cifra ==="/"){
                if(aux.anterior != null){
                    if(aux.anterior.anterior.cifra==="*" || aux.anterior.anterior.cifra==="/"){
                        aux.anterior = aux.anterior.anterior;
                    }
                }
                if(aux.siguiente!=null){
                    if(aux.siguiente.cifra==="*" || aux.siguiente.cifra==="/"){
                        aux.siguiente = aux.siguiente.anterior;
                    }
                }
                
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.anterior = aux.anterior.anterior;
                aux.siguiente = aux.siguiente.siguiente;
                
            }
            if(aux.hijoi == this.primero){
                this.primero = aux;
                this.primero.anterior = null;
            }
            /*if(aux.siguiente.cifra==="+" || aux.siguiente.cifra ==="-"){

            }*/
            if(aux.siguiente == null){
                this.ultimo = aux;
            }
            aux = aux.siguiente;
        }
        aux = this.primero;
        while(aux!= null){
            if(aux.anterior !=null){
                if(aux.hijoi == null && aux.hijod == null){
                    if(aux.cifra == "-" || aux.cifra == "+" ||aux.cifra == "*" || aux.cifra == "/" ){
                        aux.anterior = aux.anterior.anterior;
                        aux.siguiente = aux.siguiente.siguiente;
                    }
                }
            }
            aux = aux.siguiente;
        }
        aux = this.primero;
        while(aux!=null){
            if(aux.siguiente != null){
                if(aux.siguiente.siguiente != null){
                    if((aux.siguiente.cifra==="*" && aux.siguiente.siguiente.cifra==="/") || (aux.siguiente.cifra==="*" && aux.siguiente.siguiente.cifra==="*")|| (aux.siguiente.cifra==="/" && aux.siguiente.siguiente.cifra==="/")|| (aux.siguiente.cifra==="/" && aux.siguiente.siguiente.cifra==="*")){
                        aux.siguiente = aux.siguiente.siguiente;
                    }
                }
            }
            aux = aux.siguiente;
        }
        // AQUI INICIA LA PARTE IGUAL A ARRIBA PERO DE SUMAS Y RESTAS
        aux = this.primero;
        while(aux!=null){
            if(aux.cifra==="+" || aux.cifra ==="-"){
                if(aux.anterior != null){
                    if(aux.anterior.anterior!=null){
                        if(aux.anterior.anterior.cifra==="+" || aux.anterior.anterior.cifra==="-"){
                            aux.anterior = aux.anterior.anterior;
                        }
                    }
                }
                if(aux.siguiente!=null){
                    if(aux.siguiente.cifra==="+" || aux.siguiente.cifra==="-"){
                        aux.siguiente = aux.siguiente.anterior;
                    }
                }
                
                aux.hijoi = aux.anterior;
                aux.hijod = aux.siguiente
                aux.anterior = aux.anterior.anterior;
                aux.siguiente = aux.siguiente.siguiente;
                
            }
            if(aux.hijoi == this.primero){
                this.primero = aux;
                this.primero.anterior = null;
            }
            /*if(aux.siguiente.cifra==="+" || aux.siguiente.cifra ==="-"){

            }*/
            if(aux.siguiente == null){
                this.ultimo = aux;
            }
            aux = aux.siguiente;
        }
        aux = this.primero;
        while(aux!= null){
            if(aux.anterior !=null){
                if(aux.hijoi == null && aux.hijod == null){
                    if(aux.cifra == "-" || aux.cifra == "+" ||aux.cifra == "*" || aux.cifra == "/" ){
                        aux.anterior = aux.anterior.anterior;
                        aux.siguiente = aux.siguiente.siguiente;
                    }
                }
            }
            aux = aux.siguiente;
        }
        aux = this.primero;
        while(aux!=null){
            if(aux.siguiente != null){
                if(aux.siguiente.siguiente != null){
                    if((aux.siguiente.cifra==="+" && aux.siguiente.siguiente.cifra==="-") || (aux.siguiente.cifra==="+" && aux.siguiente.siguiente.cifra==="+")|| (aux.siguiente.cifra==="-" && aux.siguiente.siguiente.cifra==="-")|| (aux.siguiente.cifra==="-" && aux.siguiente.siguiente.cifra==="+")){
                        aux.siguiente = aux.siguiente.siguiente;
                    }
                }
            }
            aux = aux.siguiente;
        }
        
        aux = this.primero;
        let pes= ""
        while(aux!=null){
            pes += aux.cifra + " " ;
            aux = aux.siguiente;
        }
        this.raiz = this.primero;
        return this.raiz;
    
}
    listarPreOrder(){
        let res;
        res += this.preOrder();
        return res;
    }
    preOrder(){
        this.raizPre = this.raiz;
        if(this.raizPre==null){
            return "";
        }
        else{
            return this._preOrder(this.raizPre);
        }
    }
    _preOrder(nodox){ // RID
        console.log(nodox.cifra)        //R
        this.preOrderArray.push(nodox.cifra);
        if(nodox.hijoi!=null){
            this._preOrder(nodox.hijoi);    //I
        }
        if(nodox.hijod!=null){
            this._preOrder(nodox.hijod);    //D
        }
        return;
    }
    postOrder(){
        this.raizPost = this.raiz;
        if(this.raizPost==null){
            return "";
        }
        else{
            return this._postOrder(this.raizPost);
        }
    }
    _postOrder(nodox){
        if(nodox.hijoi!=null){
            this._postOrder(nodox.hijoi);    //I
        }
        if(nodox.hijod!=null){
            this._postOrder(nodox.hijod);    //D
        }
        console.log(nodox.cifra)        //R
        this.postOrderArray.push(nodox.cifra);
        return;
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
        console.log(nodox.cifra);  // R
        if(nodox.hijoder!=null){
            this._inOrder(nodox.hijoder); //D
        }
        return
    }
    resolverPreOrder(){
        this.preOrderArray;
        this.preOrderArrayAuxiliar;
        if(this.preOrderArray==null){
            return "";
        }
        else{
            this.preOrderArrayAuxiliar = null;
            for(let i= this.preOrderArray.length;i>=0;i--){
                if(this.preOrderArrayAuxiliar[i].match(/^[0-9]+$/)){
                    this.preOrderArray[i].push(this.preOrderArrayAuxiliar);
                }
                else{
                    if(this.preOrderArray[i]==="*"){
                        
                    }
                    if(this.preOrderArray[i]==="/"){

                    }
                    if(this.preOrderArray[i]==="+"){

                    }
                    if(this.preOrderArray[i]==="-"){

                    }
                }
                this.preOrderArray.pop();
            }
        }
    }
    resolverPostOrder(){
        this.postOrderArray;
        this.postOrderArrayAuxiliar
        
    }
    listar(){
        let res=""
        let aux = this.primero;
        while(aux!=null){
            res += aux.cifra + "";
            aux = aux.siguiente
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
console.log( "Listar expresion convertida a lista doble: "+expresion.listar());
console.log(expresion.generarArbol());
console.log("PreOrder: ");
console.log(expresion.preOrder());
console.log("PostOrder: ")
console.log(expresion.postOrder());
console.log(expresion.preOrderArray);
console.log(expresion.postOrderArray);


