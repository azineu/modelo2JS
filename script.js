function contar(){
    var ini=document.getElementById('txti')
    var fim=document.getElementById('txtf')
    var pass=document.getElementById('txtp')
    var res=document.getElementById('res')

    if( ini.value.length ==0 || fim.value.length==0 || pass.value.length==0){
        window.alert('ERRO')
    }else{
        res.innerHTML= 'contando...'
        var i= Number(ini.value)
        var f= Number(fim.value)
        var p= Number(pass.value)
        if(i < f){
            //contagem crescente
            for(var c = i; c<= f; c+= p){
                res.innerHTML += `${c} `
            }
        
        }else {
            //contagem decrescente
            for(var c= i; c >= f; c-= p){
                res.innerHTML += `${c} `
                }
            }
        }
   
    }

