const { createApp } = Vue;

let persons = [
    { name: 'mohamed', age: 20 },
    { name: 'Ali', age: 22 },
    { name: 'Ahmed', age: 25 },
    { name: 'Khaled', age: 30 },
]

const app = createApp({

    data() {
        return {
            name: 'Ahmed Alghoul',
            desc: 'I am a web developer',
            content: '<p>This is a new pargraph <span>content</span></p>',
            //persons wroted alone because when the key and the value are the same we can write it alone
            persons,
            isDark: false,
            posts:[
                {title:'dddd', content:'dddd'},
                {title:'dddd', content:'dddd'},
                {title:'dddd', content:'dddd'},
            ]
        }
    },
    methods: {
        darkMood() {
            this.isDark = !this.isDark
        }

    },
    //to do something when the page is loaded we use the mounted function
    mounted(){
        // alert(5);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (function(res){
            console.log(res.data);
        })   

    }
});

app.mount('#app');