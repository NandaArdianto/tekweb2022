let apiUrl = "https://myapi.nardian.my.id/index.php/";

Vue.createApp({
	data() {
		return {
			artikel: [],
			article: null,

			}
	},
	methods: {
		getArticle() {
			axios
				.get(apiUrl+"articles/1");
				.then((res) => {
					console.log(res.data); //melihat respon data pada console browser
					this.artikel = res.data; //memperbarui variabel article pada bagian data()
				})
				.catch((error) => {
					console.log(error); //melihat error jika pengambilan data adalah gagal
				});
		},
		getDataMarkdown() {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const article = urlParams.get('article');
			var converter = new showdown.Converter();
			console.log(article);
			axios
				.get(
					"https://raw.githubusercontent.com/NandaArdianto/tekweb2022/main/article/" + article
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
		this.getArticle(),
		this.getDataMarkdown()
	},
}).mount("#article");