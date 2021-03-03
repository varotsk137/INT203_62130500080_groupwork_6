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
            minimum: 6,
            maximum: 20,
            message: "must be between 6-20 characters"
        },
        format: {
            pattern: "^[a-zA-Z0-9._-]{0,}$",
            flags: "gm",
            message: "can only use a-z, A-Z or 0-9 or _.-"
        }
    },
    password: {
        presence: true,
        format: {
            pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{0,}$",
            flags: "gm",
            message: "must contain at least one of Uppercase, Lowercase, Number,and Special Character"
        },
        length: {
            minimum: 8,
            message: "must be at least 8 characters"
        }
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
        presence: true,
        format: {
            pattern: "^[0-9]{2,3}[-]?[0-9]{3}[-]?[0-9]{4}$",
            flags: "gmi",
            message: "must be in format (xxx/xx)-xxx-xxxx or xxxxxxxxxx (9-10 characters)"
        }
    },
    gender: {
        presence: true
    }
}

const app = {
    data() {
        return {
            me: "./images/me.jpg",
            datas: {
                username: null,
                password: null,
                email: null,
                fname: null,
                lname: null,
                title: null,
                lang: null,
                telno: null,
                gender: null,
            },
            errors: null,
            profile: null
        }
    },
    methods: {
        checkForm() {
            this.errors = validate(this.datas,
                constraints)
            if (!this.errors) {
                this.profile = Object.assign({}, this.datas);
                alert("Registered successfully.")
            }
        },
        resetBtn() {
            this.errors = null;
            for (const data in this.datas) {
                this.datas[data] = null
                // console.log(data + ': ' + this.datas[data])
            }
        },
    }
}


var mountedApp = Vue.createApp(app).mount('#app');