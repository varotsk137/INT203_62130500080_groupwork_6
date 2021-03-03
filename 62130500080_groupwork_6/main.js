const constraints = {
    fname: {
        presence: true,
    },
    lname: {
        presence: true,
    },
    username: {
        presence: true,
        exclusion: {
            within: ["admin"],
            message: "'%{value}' is not allowed"
          },
        length: {
            minimum : 6,
            message: "must be at least 6 characters"
        }
    },
    password: {
        presence: true,

    },
    email: {
        presence: true,
        email: true
    },
    title: {
        presence: false
    },
    lang: {
        presence: false
    },
    telno: {
        presence: true
    },
    gender: {
        presence: false
    }
}

const app = {
    data() {
        return {
            me: "./images/me.jpg",
            username: null,
            password: null,
            email: null,
            fname: null,
            lname: null,
            title: null,
            lang: null,
            errors: null,
            submit: false,
            telno: null,
            gender: null
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({fname: this.fname,
                                    lname: this.lname,
                                    username: this.username,
                                    password: this.password,
                                    title: this.title,
                                    email: this.email,
                                    lang: this.lang,
                                    telno: this.telno,
                                    gender: this.gender
                                    },
                                    constraints)
            if(!this.errors){
                this.submit = true;
                alert("Registered successfully.")
            }
        }
    }
}


var mountedApp = Vue.createApp(app).mount('#app');