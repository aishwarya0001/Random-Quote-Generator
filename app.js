
const app = Vue.createApp({
    data()  {
        return {
            quote : 'Opportunity often comes disguised in the form of misfortune, or temporary defeat',
            author : '- Napoleon Hill'
        }
    },
    methods : {
        async getQuote()
        {
            const response = await fetch('https://api.quotable.io/random')
            const data  = await response.json()
            console.log(data)
            this.quote = data.content,
            this.author = "- " + data.author
        },
    },
})
app.mount("#container")