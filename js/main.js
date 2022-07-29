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
                "edu":"Education",
                "exp" : "Experience",
            },
            edu :{
                "title1" : "SD",
                "thn1" : "2008 - 2014",
                "desc1" : "SDN WILOSO 1",

                "title2" : "SMP",
                "thn2" : "2014 - 2017",
                "desc2" : "SMPN 1 PANGGANG",

                "title3" : "SMK",
                "thn3" : "2017 - 2020",
                "desc3" : "SMKN 1 SAPTOSARI",

                "title4" : "KULIAH",
                "thn4" : "2020 - ",
                "desc4" : "Universitas Ahmad Dahlan"
            },
            exp :{
                "thn" : "2019",
                "sk" :"SMK",
                "txt" : "Lomba Cerdas Cermat, Yang Diselenggarakan oleh DIKPORA Gunungkidul"
            },
            skill : {
                "title" : "My Skills",
                
                "subtitle1" : "Front End Development",
                "name1" : "HTML",
                "level1" : "Intermediate",
                "persen1" : "78%",

                "name2" : "CSS",
                "level2" : "Intermediate",
                "persen2" : "78%",

                "name3" : "Javascript",
                "level3" : "Basic",
                "persen3" : "70%",

                "name4" : "Boostrap",
                "level4" : "Intermediate",
                "persen4" : "77%",

                "name5" : "VueJs",
                "level5" : "Inermediate",
                "persen5" : "75%",

                "name6" : "Git",
                "level6" : "Basic",
                "persen6" : "73%",
            
                "subtitle2" : "Back End Development",
                "name7" : "PHP",
                "level7" : "Basic",
                "persen7" : "76%",

                "name8" : "Python",
                "level8" : "Intermediate",
                "persen8" : "78%",

                "name9" : "Java",
                "level9" : "Basic",
                "persen9" : "70%",

                "name10" : "SQL",
                "level10" : "Intermediate",
                "persen10" : "77%",

            },
             contact : {
                "section" : "Contact Me",
                "title" : "Have You Any Questions",
                "subtitle" : "I'm at Yours Services",
                "send" : "Send me an Email",
                "desc" : "I'm Very Responsive To Message",

                "wa" :"Whatsapp",
                "no" : "+62 812-8064-1757",
                "email" : "Email",
                "mail" : "nanda.ardianto21@gmail.com",
                "tele" : "Telegram",
                "ig" : "Instagram",
                "name" : "nanda.ardianto_"
            },
            footer : {
                "title" : "Nanda Ardianto"
            }
        }
    }
}).mount("#app");