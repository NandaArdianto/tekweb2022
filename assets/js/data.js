Vue.createApp({
    data() {
      return {
        article: [],
        judul:"article",
        article:""
      };
    },
    methods: {
      getArtikel() {
        axios
          .get(
            src="https://raw.githubusercontent.com/NandaArdianto/tekweb2022/main/assets/json/data.json")
          .then((res) => {
            console.log(res.data); //melihat respon data pada console browser
            this.article = res.data; //memperbarui variabel header pada bagian data()
          })
          .catch((error) => {
            console.log(error); //melihat error jika pengambilan data adalah gagal
          });
      },
      ambiljudul(){
        const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const article = urlParams.get('article');        
          var converter = new showdown.Converter();
          axios
            .get(
              src="../assets/article/article1.md"+article
            )
            .then((res) => {           
              var html = converter.makeHtml(res.data);           
              this.article = html;
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    beforeMount() {
      this.getarticle(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
      this.ambiljudul();
    },
  }).mount("#app");