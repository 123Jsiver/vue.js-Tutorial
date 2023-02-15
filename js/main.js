const app = Vue.createApp({
    //data, functions
    // template: '<h2> I am the template </h2>'
    data() {
        return{
            showBooks: true,
            title: 'Among Us',
            author: 'Brandon Lu',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
//     methods: {
//         changeTitle(title){
//         // this.title = 'Words of Randiance'
//         this.title = title
//     }
// }
});

app.mount('#app')