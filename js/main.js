const app = Vue.createApp({
    //data, functions
    // template: '<h2> I am the template </h2>'
    data() {
        return{
            url:"https://www.tradeinn.com/techinn/en/neca-teenage-mutant-ninja-turtles-raphael-18-cm-figure/137792031/p?utm_source=google_products&utm_medium=merchant&id_producte=11773862&country=us",
            showBooks: true,
            books: [
                {title: 'IS THAT LITERATURE?', author: 'Mr. Vona', img: ''},
                {title: 'How To Be An Idiot', author: 'Christopher John Sandor', img: ''},
                {title: 'Lil Tokyo Moment', author: 'Brandon Lu', img: ''}
            ]

            // title: 'Among Us',
            // author: 'Brandon Lu',
            // age: 45,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        toggleShowBooks() {
                    this.showBooks = !this.showBooks
                }
    }



    // For mouse events

    // methods: {
    //     handleEvent(e, data) {
    //         console.log(e, e.type)
    //         if(data){
    //             console.log(data)
    //         }
    //     },
    //     handleMousemove(e) {
    //         this.x = e.offsetX
    //         this.y = e.offsetY
    //     }
    // }


    // for changing titles

//     methods: {
//         changeTitle(title){
//         // this.title = 'Words of Randiance'
//         this.title = title
//     }
// }
});

app.mount('#app')