const app = Vue.createApp({
    data() {
        return {
            firstName: 'Marius',
            lastName: 'Morin',
            email: 'marius@example.com',
            phone: '02-545-229',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/27.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.phone = results[0].phone
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')