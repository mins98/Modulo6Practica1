Vue.component(
    'contador',
    {
        template:"<button v-on:click='iniciocontador++'>Cuenta {{iniciocontador}}</button>",
        data: function(){
            return{
                contador:0
            }
        },
        //Props
        props:["iniciocontador"]   
    }
);