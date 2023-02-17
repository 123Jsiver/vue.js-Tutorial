const app = Vue.createApp({
    //data, functions
    // template: '<h2> I am the template </h2>'
    data() {
        return{
            url:'https://en.wikipedia.org/wiki/One_Piece',
            showBooks: true,
            books: [
                {title: 'IS THAT LITERATURE?', author: 'Mr. Vona', img: 'img/Vona.jpg', isFav: true},
                {title: 'How To Be An Idiot', author: 'Christopher John Sandor', img: 'img/CJ.png', isFav: false},
                {title: 'Little Tokyo Moment', author: 'Brandon Lu', img: 'img/Little Tokyo.jpg', isFav: true}
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
                },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        // .filter goes through and takes out whatever doesn't come back true
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