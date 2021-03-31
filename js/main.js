


const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Pizza rider',
        motos: [
            { modelo: 'Vespa', matricula: '49276K', color: 'negra', estado: 'disponible' },
            { modelo: 'Piaggio', matricula: '39287T', color: 'roja', estado: 'disponible' },
            { modelo: 'Vespa', matricula: '20937P', color: 'roja', estado: 'disponible' },
            { modelo: 'Vespa', matricula: '10936J', color: 'negra', estado: 'disponible' },
        ],
        nuevaMoto: ''
    },



    methods: {
        agregarMoto() {
            this.motos.push({
                modelo: this.nuevaMoto, matricula: '', color: '', estado: 'disponible'
            });
            this.nuevaMoto = '';
        }
    }

})