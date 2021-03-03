const app = {
    data() {
        return {
                bg: "./images/bg.jpg"
            ,   me: "./images/me.jpg"
            ,   name: "Varot Tirakhuntorn"
            ,   location: "Thailand"
            ,   follower: 137
            ,   projects: 2
            ,   ranks: 222
        }
    }
}


var mountedApp = Vue.createApp(app).mount('#app');