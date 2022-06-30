Vue.createApp({
    data() {
        return {
            index : {
                "hai": "Hello... ",
                "about": "I'am ",
                "desc": "Sebuah kebanggaan bisa menimba ilmu di jurusan yang selalu ikut berkembang sesuai dengan zaman", 
            },
            about : {
                "title": "About Me",
                "name": "I'm Nanda Ardianto",
                "job" : "Web Developer",
                "me" : "Nanda Ardianto Lahir di Gunungkidul, Yogyakarta",

                "linetext" : "SD"
            },
            articles: [],
            article: null,
        };
    },
    methods: {
        getArticles() {
            axios
                .get(
                    "https://raw.githubusercontent.com/NandaArdianto/tekweb2022/main/assets/article/data.json"
                )
                .then((res) => {
                    this.articles = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const article = urlParams.get('article');
            var converter = new showdown.Converter();
            console.log(article);
            axios
                .get(
                    src = "https://raw.githubusercontent.com/NandaArdianto/tekweb2022/main/assets/article/" + article
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                    console.log(html);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },

    beforeMount() {
            this.getArticles(),
            this.getMarkdown()
    }
}).mount("#app");