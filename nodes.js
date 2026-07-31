/*************************************************
 SAHABAT AL-QUR'AN & HADIS
 nodes.js
 Versi 1.0
*************************************************/

const nodes = {

    //====================================================
    // NODE N1
    //====================================================

    N1:{

        //=========================================
        // IDENTITAS NODE
        //=========================================

        id:"N1",

        title:"Salam dan Orientasi Pembelajaran",

        learningFlow:"LF1 – Orientasi",

        conversationMap:"N1",

        materi:"Pembukaan Pembelajaran",

        subMateri:"Orientasi penggunaan chatbot",

        posisi:"Node Pertama (Start)",


        //=========================================
        // TUJUAN PEMBELAJARAN
        //=========================================

        tujuanPembelajaran:[

            "Mengenal chatbot sebagai media pembelajaran.",

            "Mengetahui tujuan pembelajaran yang akan dipelajari.",

            "Memiliki kesiapan mengikuti pembelajaran sampai selesai."

        ],


        //=========================================
        // INDIKATOR BERPIKIR KRITIS
        //=========================================

        indikatorBerpikirKritis:null,

        keteranganIndikator:
        "Node ini hanya membangun learning engagement sebelum memasuki proses berpikir kritis.",


        //=========================================
        // SCAFFOLDING
        //=========================================

        tahapScaffolding:"Orientasi",

        tujuanScaffolding:
        "Memberikan informasi awal agar siswa memahami cara belajar menggunakan chatbot dan merasa nyaman sebelum memasuki materi.",


        //=========================================
        // DASAR MATERI
        //=========================================

        dasarMateri:
        "Node ini tidak membahas materi inti sehingga belum menggunakan dalil. Fokusnya membangun suasana belajar yang positif serta menjelaskan tujuan penggunaan chatbot.",


        //=========================================
        // STIMULUS BOT
        //=========================================

        stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Assalamu'alaikum warahmatullahi wabarakatuh. 🌸

Halo 👋, senang bertemu denganmu.

Aku Sahabat Al-Qur'an & Hadis, teman belajarmu hari ini.

Pada pembelajaran ini kita akan belajar tentang:

📖 <b>Tanggung Jawab terhadap Diri Sendiri dan Keluarga</b>

Selama belajar aku tidak langsung memberi jawaban.

Aku akan mengajakmu berpikir melalui beberapa pertanyaan sampai kamu menemukan jawabanmu sendiri.

Jadi jangan takut kalau jawabanmu belum tepat ya. 😊

Kalau sudah siap belajar silakan ketik:

<b>Siap</b>

`,


        //=========================================
        // TUJUAN PERTANYAAN
        //=========================================

        tujuanPertanyaan:
        "Memastikan siswa siap mengikuti pembelajaran sebelum memasuki materi.",


        //=========================================
        // PREDIKSI RESPONS SISWA
        //=========================================

        classify:{

            A:[
                "siap",
                "saya siap",
                "bismillah",
                "mulai",
                "yuk mulai",
                "ayo belajar",
                "gas",
                "lanjut",
                "siap kak",
                "siap bot",
                "yok",
                "ashiyap",
                "iya"
            ],

            B:[
                "waalaikumsalam",
                "wa'alaikumussalam",
                "assalamualaikum",
                "halo",
                "hai"
            ],

            C:[
                "belajarnya tentang apa",
                "berapa lama",
                "apa tujuan pembelajaran",
                "apa yang dipelajari",
                "materinya apa"
            ],

            D:[
                "gimana caranya",
                "bagaimana caranya",
                "maksudnya bagaimana",
                "saya harus ngapain",
                "belum paham",
                "bingung"
            ],

            E:[
                "tes",
                "ok",
                "🙂",
                "123",
                "aaaa",
                "p"
            ]

        },

        defaultCategory:"E",


        //=========================================
        // RESPONS BOT
        //=========================================

        responses:{

            A:{

                text:`

🌟 MasyaAllah, semangat ya!

Hari ini kita akan belajar bagaimana Islam mengajarkan kita bertanggung jawab terhadap diri sendiri dan keluarga.

Aku akan menemanimu berpikir langkah demi langkah.

Sekarang aku ingin mengetahui pendapatmu terlebih dahulu.

`,

                next:"N2"

            },

            B:{

                text:`

Wa'alaikumussalam warahmatullahi wabarakatuh. 😊

Terima kasih sudah menjawab salam.

Kalau kamu sudah siap belajar, mari kita mulai.

`,

                next:"N2"

            },

            C:{

                text:`

Pertanyaan yang bagus. 😊

Hari ini kita akan belajar tentang tanggung jawab terhadap diri sendiri dan keluarga berdasarkan Al-Qur'an dan Hadis.

Tujuannya bukan hanya memahami materi, tetapi juga melatih kemampuan berpikir kritis melalui diskusi bersama chatbot.

Kalau sudah siap, mari kita mulai.

`,

                next:"N2"

            },

            D:{

                text:`

Tidak apa-apa. 😊

Aku akan menemanimu langkah demi langkah.

Kamu cukup membaca pertanyaanku lalu menjawab sesuai pemahamanmu.

Tidak harus langsung benar karena kita akan belajar bersama.

`,

                next:"N2"

            },

            E:{

                text:`

Terima kasih sudah merespons. 😊

Supaya pembelajaran dapat dimulai, silakan ketik:

<b>Siap</b>

atau

<b>Mulai</b>

`,

                next:"N1"

            }

        },


        //=========================================
        // BANTUAN (SCAFFOLDING)
        //=========================================

        bantuan:{

            A:"Memberikan apresiasi dan meningkatkan motivasi belajar.",

            B:"Memberikan penguatan melalui sapaan dan mengarahkan siswa memasuki pembelajaran.",

            C:"Menjelaskan tujuan pembelajaran agar siswa memahami konteks belajar.",

            D:"Memberikan rasa aman bahwa siswa akan dibimbing secara bertahap.",

            E:"Mengarahkan siswa agar memberikan respons yang sesuai untuk memulai pembelajaran."

        },


        //=========================================
        // PENILAIAN
        //=========================================

        assessment:{

            indikator:null,

            score:{

                A:4,

                B:3,

                C:2,

                D:1,

                E:0

            }

        },


        //=========================================
        // KESIMPULAN
        //=========================================

        kesimpulan:
        "Node selesai apabila siswa memahami fungsi chatbot, mengetahui topik pembelajaran, dan menyatakan kesiapan belajar.",


        //=========================================
        // TRANSISI
        //=========================================

        transisi:`

Oke, terima kasih sudah siap belajar. 😊

Sebelum kita membahas materi, aku ingin mengetahui pendapatmu terlebih dahulu.

💬 Menurutmu, apa yang dimaksud dengan <b>tanggung jawab terhadap diri sendiri</b>?

`

},
    //====================================================
    // NODE N2
    //====================================================

    N2:{

        //=========================================
        // IDENTITAS NODE
        //=========================================

        id:"N2",

        title:"Apersepsi: Makna Tanggung Jawab terhadap Diri Sendiri",

        learningFlow:"LF2 – Apersepsi",

        conversationMap:"N2",

        materi:"Tanggung Jawab terhadap Diri Sendiri",

        subMateri:"Konsep awal tanggung jawab terhadap diri sendiri",

        posisi:"Node kedua (setelah orientasi)",

        difficulty:"Mudah",


        //=========================================
        // TUJUAN PEMBELAJARAN
        //=========================================

        tujuanPembelajaran:[

            "Mengungkapkan pemahaman awal mengenai makna tanggung jawab terhadap diri sendiri berdasarkan pengalaman dan pengetahuan yang dimiliki.",

            "Menggali pengetahuan awal siswa sebagai dasar pemberian scaffolding pada node berikutnya."

        ],


        //=========================================
        // INDIKATOR BERPIKIR KRITIS
        //=========================================

        indikatorBerpikirKritis:"Interpretasi",

        keteranganIndikator:
        "Siswa mengungkapkan makna tanggung jawab terhadap diri sendiri menggunakan bahasa sendiri berdasarkan pemahaman awal.",


        //=========================================
        // SCAFFOLDING
        //=========================================

        tahapScaffolding:"Diagnosis (Initial Assessment)",

        tujuanScaffolding:
        "Mengidentifikasi pengetahuan awal siswa agar chatbot dapat memberikan bantuan belajar yang sesuai pada node berikutnya.",


        //=========================================
        // DASAR MATERI
        //=========================================

        dasarMateri:
        "Tanggung jawab terhadap diri sendiri merupakan kewajiban setiap manusia untuk menjaga dirinya agar tetap taat kepada Allah Swt., mengembangkan potensi diri, serta menghindari perbuatan yang merugikan diri sendiri maupun orang lain.",

        dalil:
        "Belum ditampilkan. QS. At-Taḥrīm ayat 6 akan diperkenalkan pada Node N4.",

        konsepUtama:[
            "Taat kepada Allah",
            "Menjaga diri",
            "Mengembangkan potensi diri",
            "Menghindari perbuatan dosa"
        ],


        //=========================================
        // STIMULUS BOT
        //=========================================

        stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Sebelum kita membaca ayat Al-Qur'an, aku ingin mengetahui pendapatmu terlebih dahulu.

💬 <b>Menurutmu, apa yang dimaksud dengan tanggung jawab terhadap diri sendiri?</b>

Tidak perlu takut salah ya.

Jawablah sesuai pemahamanmu. 😊

`,


        //=========================================
        // TUJUAN PERTANYAAN
        //=========================================

        tujuanPertanyaan:
        "Menggali pengetahuan awal siswa, mengetahui cara siswa memaknai konsep tanggung jawab terhadap diri sendiri, serta menjadi dasar penentuan bantuan belajar pada node berikutnya.",


        //=========================================
        // PREDIKSI RESPONS SISWA
        //=========================================

        classify:{

            A:[
                "taat",
                "allah",
                "ibadah",
                "iman",
                "akhlak",
                "dosa",
                "potensi",
                "muslim",
                "larangan",
                "mengendalikan hawa nafsu"
            ],

            B:[
                "menjaga diri",
                "berbuat baik",
                "disiplin",
                "belajar",
                "kesehatan",
                "pilihan",
                "tidak pacaran",
                "tidak zina"
            ],

            C:[
                "rajin belajar",
                "tidak bolos",
                "anak baik",
                "menjaga kesehatan",
                "tidak bermain terus",
                "tidak melawan orang tua"
            ],

            D:[
                "orang tua",
                "kalau sudah bekerja",
                "uang",
                "tidak perlu",
                "masih sekolah",
                "semua keputusan"
            ],

            E:[
                "tidak tahu",
                "bingung",
                "belum paham",
                "lupa",
                "males"
            ]

        },

        defaultCategory:"E",


        //=========================================
        // RESPONS BOT
        //=========================================

        responses:{

            A:{

                text:`

🌟 MasyaAllah, jawabanmu sudah sangat baik.

Kamu sudah memahami bahwa tanggung jawab terhadap diri sendiri tidak hanya berkaitan dengan tindakan, tetapi juga hubungan kita dengan Allah serta kemampuan menjaga diri dari perbuatan yang tidak baik.

Menurutmu, mengapa Allah memerintahkan manusia menjaga dirinya terlebih dahulu?

`,

                next:"N3"

            },

            B:{

                text:`

👍 Bagus.

Jawabanmu sudah mengarah ke konsep yang benar.

Menjaga diri memang bagian dari tanggung jawab.

Nanti kita akan melihat bahwa Al-Qur'an menjelaskan tanggung jawab ini lebih luas, bukan hanya menjaga fisik, tetapi juga menjaga iman, akhlak, dan perilaku.

`,

                next:"N3"

            },

            C:{

                text:`

😊 Terima kasih.

Jawabanmu sudah menunjukkan sebagian makna tanggung jawab.

Contoh yang kamu sebutkan memang termasuk bentuk tanggung jawab.

Menurutmu, apakah tanggung jawab terhadap diri sendiri hanya sebatas itu, atau masih ada hal lain yang perlu dijaga?

`,

                next:"N3"

            },

            D:{

                text:`

Tidak apa-apa. 😊

Banyak juga yang awalnya berpikir seperti itu.

Coba kita pikirkan bersama.

Apakah seorang pelajar juga mempunyai tanggung jawab terhadap dirinya sendiri, misalnya dalam belajar, menjaga sikap, dan menjalankan ibadah?

Kita akan menemukan jawabannya melalui ayat Al-Qur'an yang akan dipelajari.

`,

                next:"N3"

            },

            E:{

                text:`

Tidak apa-apa kalau belum tahu. 😊

Justru itu tujuan kita belajar hari ini.

Aku akan menemanimu sedikit demi sedikit sampai kamu dapat menemukan jawabannya sendiri.

Yuk kita lanjut.

`,

                next:"N3"

            }

        },


        //=========================================
        // BANTUAN (SCAFFOLDING)
        //=========================================

        bantuan:{

            A:"Memberikan penguatan dan pertanyaan pendalaman.",

            B:"Memberikan penguatan konsep dan menghubungkannya dengan materi berikutnya.",

            C:"Memberikan pertanyaan penuntun agar siswa memperluas pemahaman.",

            D:"Memberikan pertanyaan korektif tanpa langsung menyalahkan.",

            E:"Memberikan dukungan emosional dan motivasi untuk melanjutkan pembelajaran."

        },


        //=========================================
        // PENILAIAN
        //=========================================

        assessment:{

            indikator:"Interpretasi",

            score:{

                A:4,

                B:3,

                C:2,

                D:1,

                E:0

            }

        },


        //=========================================
        // KESIMPULAN
        //=========================================

        kesimpulan:
        "Node selesai apabila chatbot telah memperoleh gambaran mengenai pemahaman awal siswa tentang tanggung jawab terhadap diri sendiri sebagai dasar pemberian scaffolding pada node berikutnya.",


        //=========================================
        // TRANSISI
        //=========================================

        transisi:`

🌼 Terima kasih sudah berbagi pendapat.

Sekarang kita akan mencari tahu mengapa seorang muslim harus bertanggung jawab terhadap dirinya sendiri.

Mari kita melihat petunjuk langsung dari Al-Qur'an pada pembahasan berikutnya.

`

    },
    //====================================================
    // NODE N3
    //====================================================

    N3:{

        //=========================================
        // IDENTITAS NODE
        //=========================================

        id:"N3",

        title:"Pengenalan Dalil dan Penguatan Konsep",

        learningFlow:"LF3 – Concept Introduction",

        conversationMap:"N3",

        materi:"Tanggung Jawab terhadap Diri Sendiri",

        subMateri:"QS. At-Taḥrīm ayat 6 sebagai dasar tanggung jawab",

        posisi:"Setelah diagnosis awal (N2), sebelum interpretasi ayat (N4)",

        difficulty:"Mudah",


        //=========================================
        // TUJUAN PEMBELAJARAN
        //=========================================

        tujuanPembelajaran:[

            "Mengenal dalil Al-Qur'an yang menjadi dasar tanggung jawab terhadap diri sendiri.",

            "Memahami bahwa konsep yang telah dikemukakan pada Node N2 perlu dibandingkan dengan petunjuk Al-Qur'an.",

            "Memiliki bekal pengetahuan sebelum memasuki tahap interpretasi."

        ],


        //=========================================
        // INDIKATOR BERPIKIR KRITIS
        //=========================================

        indikatorBerpikirKritis:null,

        keteranganIndikator:
        "Node ini merupakan Instructional Scaffolding (Concept Introduction). Belum digunakan untuk menilai kemampuan berpikir kritis.",


        //=========================================
        // SCAFFOLDING
        //=========================================

        tahapScaffolding:"Concept Introduction & Hint",

        tujuanScaffolding:
        "Memberikan penyangga konseptual melalui dalil Al-Qur'an dan penjelasan singkat sehingga siswa memiliki dasar berpikir sebelum diminta menginterpretasikan ayat.",


        //=========================================
        // DASAR MATERI
        //=========================================

        dasarMateri:"QS. At-Taḥrīm ayat 6",

        dalil:`
يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا

Artinya:

"Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka."

Tafsir Ibnu Katsir:
Allah memerintahkan orang-orang beriman untuk memperbaiki diri terlebih dahulu dengan ketaatan kepada Allah, kemudian membimbing keluarganya menuju jalan yang benar.

Tafsir Al-Misbah:
Menjaga diri tidak hanya berarti menjaga keselamatan fisik, tetapi juga menjaga iman, ibadah, akhlak, dan seluruh perilaku agar tetap berada dalam petunjuk Allah.
`,

        konsepUtama:[
            "QS. At-Taḥrīm ayat 6",
            "Menjaga diri",
            "Menjaga keluarga",
            "Iman",
            "Ibadah",
            "Akhlak"
        ],


        //=========================================
        // STIMULUS BOT
        //=========================================

        stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Terima kasih sudah berbagi pendapat. 😊

Jawabanmu menunjukkan bagaimana kamu memahami tanggung jawab terhadap diri sendiri berdasarkan pengalamanmu.

Sekarang, mari kita lihat bagaimana Al-Qur'an menjelaskan hal tersebut.

<b>Allah Swt. berfirman:</b>

يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا

<b>Artinya:</b>

"Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka." (QS. At-Taḥrīm: 6)

Menurut Tafsir Ibnu Katsir, ayat ini memerintahkan setiap muslim untuk memperbaiki dirinya terlebih dahulu sebelum membimbing keluarganya.

Sedangkan menurut Tafsir Al-Misbah, menjaga diri berarti menjaga iman, ibadah, akhlak, dan seluruh perilaku agar tetap berada di jalan Allah.

Silakan baca dan pahami ayat serta penjelasan singkat tersebut.

Jika sudah selesai membaca, silakan ketik:

<b>Sudah</b>

`,


        //=========================================
        // TUJUAN PERTANYAAN
        //=========================================

        tujuanPertanyaan:
        "Memastikan siswa telah membaca dan menerima informasi konseptual sebelum memasuki tahap interpretasi.",


        //=========================================
        // PREDIKSI RESPONS SISWA
        //=========================================

        classify:{

            A:[
                "sudah",
                "sudah membaca",
                "sudah paham",
                "siap",
                "lanjut"
            ],

            B:[
                "ulang",
                "belum selesai",
                "membaca lagi",
                "tunggu",
                "sebentar"
            ],

            C:[
                "apa arti",
                "peliharalah",
                "tafsir",
                "mengapa diri sendiri",
                "apa itu tafsir"
            ],

            D:[
                "belum paham",
                "bingung",
                "sulit",
                "tidak mengerti"
            ],

            E:[
                "halo",
                "tes",
                "oke",
                "🙂"
            ]

        },

        defaultCategory:"E",


        //=========================================
        // RESPONS BOT
        //=========================================

        responses:{

            A:{

                text:`

🌟 MasyaAllah.

Sekarang kamu sudah mengetahui dasar Al-Qur'an tentang tanggung jawab terhadap diri sendiri.

Selanjutnya kita akan mencoba memahami makna ayat tersebut menggunakan bahasamu sendiri.

`,

                next:"N4"

            },

            B:{

                text:`

Tidak apa-apa. 😊

Silakan baca kembali sampai kamu merasa siap.

Aku akan menunggu.

`,

                next:"N3"

            },

            C:{

                text:`

👍 Pertanyaanmu sangat bagus.

Kita tidak akan langsung membahas semuanya sekarang.

Pertanyaan-pertanyaan tersebut akan kita jawab bersama melalui pembelajaran tahap demi tahap.

Kalau sudah siap, kita lanjut.

`,

                next:"N4"

            },

            D:{

                text:`

Tidak apa-apa.

Ayat ini memang perlu dipahami secara perlahan.

Karena itu kita akan membahas maknanya sedikit demi sedikit pada pertanyaan berikutnya.

`,

                next:"N4"

            },

            E:{

                text:`

Terima kasih. 😊

Jika sudah selesai membaca, silakan ketik <b>"Sudah"</b> agar kita dapat melanjutkan pembelajaran.

`,

                next:"N3"

            }

        },


        //=========================================
        // BANTUAN (SCAFFOLDING)
        //=========================================

        bantuan:{

            A:"Memberikan penguatan dan transisi menuju tahap interpretasi.",

            B:"Memberikan kesempatan kepada siswa untuk membaca kembali tanpa tekanan.",

            C:"Memberikan petunjuk tanpa langsung memberikan seluruh jawaban.",

            D:"Memberikan motivasi dan penjelasan singkat agar siswa siap memasuki tahap interpretasi.",

            E:"Mengarahkan kembali siswa pada tujuan node."

        },


        //=========================================
        // PENILAIAN
        //=========================================

        assessment:{

            indikator:null,

            score:{

                A:0,

                B:0,

                C:0,

                D:0,

                E:0

            }

        },


        //=========================================
        // KESIMPULAN
        //=========================================

        kesimpulan:
        "Node selesai apabila siswa telah membaca dan memperoleh dasar konseptual berupa QS. At-Taḥrīm ayat 6 beserta penjelasan singkatnya sehingga siap memasuki tahap interpretasi.",


        //=========================================
        // TRANSISI
        //=========================================

        transisi:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Sekarang kamu sudah mengetahui ayat dan penjelasan dasarnya.

Yuk, kita mulai melatih kemampuan berpikir kritis.

💬 Menurutmu, apa maksud perintah <b>'peliharalah dirimu'</b> pada QS. At-Taḥrīm ayat 6?

`

    },
        //====================================================
    // NODE N4
    //====================================================

    N4:{

        //=========================================
        // IDENTITAS NODE
        //=========================================

        id:"N4",

        title:"Interpretasi QS. At-Taḥrīm Ayat 6",

        learningFlow:"LF4 – Interpretasi",

        conversationMap:"N4",

        materi:"Tanggung Jawab terhadap Diri Sendiri",

        subMateri:"Makna QS. At-Taḥrīm ayat 6",

        posisi:"Awal pembahasan materi",

        difficulty:"Sedang",


        //=========================================
        // TUJUAN PEMBELAJARAN
        //=========================================

        tujuanPembelajaran:[

            "Menafsirkan makna umum QS. At-Taḥrīm ayat 6 sebagai dasar tanggung jawab seorang muslim terhadap dirinya sendiri dan keluarganya."

        ],


        //=========================================
        // INDIKATOR BERPIKIR KRITIS
        //=========================================

        indikatorBerpikirKritis:"Interpretasi",

        keteranganIndikator:
        "Siswa mampu menafsirkan makna umum QS. At-Taḥrīm ayat 6 menggunakan bahasa sendiri.",


        //=========================================
        // SCAFFOLDING
        //=========================================

        tahapScaffolding:"Hint",

        tujuanScaffolding:
        "Memberikan bantuan awal melalui penyajian ayat dan pertanyaan penuntun agar siswa dapat menemukan makna ayat secara mandiri.",


        //=========================================
        // DASAR MATERI
        //=========================================

        dasarMateri:"QS. At-Taḥrīm ayat 6",

        dalil:`
يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا

Artinya:

"Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka."
`,

        konsepUtama:[

            "Menjaga diri",

            "Menjaga keluarga",

            "Taat kepada Allah",

            "Menjauhi larangan Allah",

            "Mengembangkan kebiasaan berbuat baik"

        ],


        //=========================================
        // STIMULUS BOT
        //=========================================

        stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Tadi kamu sudah menyampaikan pendapatmu tentang tanggung jawab terhadap diri sendiri.

Sekarang, yuk kita lihat bagaimana Al-Qur'an menjelaskannya.

Allah Swt. berfirman:

<b>يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا</b>

<b>Artinya:</b>

"Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka." (QS. At-Taḥrīm:6)

💬 <b>Menurutmu, apa maksud perintah "peliharalah dirimu" pada ayat tersebut?</b>

Jawablah menggunakan bahasamu sendiri ya. 😊

`,


        //=========================================
        // TUJUAN PERTANYAAN
        //=========================================

        tujuanPertanyaan:
        "Mengetahui kemampuan siswa menangkap makna umum ayat sebelum memasuki analisis kata pada node berikutnya.",


        //=========================================
        // PREDIKSI RESPONS SISWA
        //=========================================

        classify:{

            A:[

                "taat",

                "allah",

                "iman",

                "ibadah",

                "akhlak",

                "amal",

                "saleh",

                "maksiat",

                "larangan",

                "berbuat baik"

            ],

            B:[

                "orang baik",

                "tidak dosa",

                "rajin ibadah",

                "hal buruk",

                "muslim",

                "perilaku"

            ],

            C:[

                "kesehatan",

                "tidak berkelahi",

                "tidak mencuri",

                "tidak pacaran",

                "belajar",

                "anak baik"

            ],

            D:[

                "badan",

                "api",

                "kebakaran",

                "keluarga saja",

                "orang tua"

            ],

            E:[

                "tidak tahu",

                "bingung",

                "belum paham",

                "tidak mengerti",

                "sulit"

            ]

        },

        defaultCategory:"E",


        //=========================================
        // RESPONS BOT
        //=========================================

        responses:{

            A:{

                text:`

🌟 MasyaAllah, jawabanmu sudah sangat tepat.

Kamu sudah memahami bahwa menjaga diri bukan hanya menjaga tubuh, tetapi juga menjaga iman, ibadah, akhlak, serta menjauhi perbuatan yang dilarang Allah.

Sekarang kita coba berpikir lebih dalam.

Mengapa Allah menyebut <b>"peliharalah dirimu"</b> terlebih dahulu sebelum <b>"keluargamu"</b>?

`,

                next:"N5"

            },

            B:{

                text:`

👍 Bagus.

Jawabanmu sudah mengarah pada makna yang benar.

Dalam ayat ini, menjaga diri berarti berusaha menaati Allah dan menjauhi larangan-Nya.

Sebentar lagi kita akan melihat mengapa Allah mendahulukan diri sendiri sebelum keluarga.

`,

                next:"N5"

            },

            C:{

                text:`

😊 Terima kasih.

Jawabanmu sudah benar pada sebagian bagian.

Menjaga kesehatan dan berbuat baik memang termasuk bentuk menjaga diri.

Namun menurutmu, apakah Allah hanya memerintahkan menjaga tubuh, atau juga menjaga iman, ibadah, dan akhlak?

`,

                next:"N5"

            },

            D:{

                text:`

Tidak apa-apa. 😊

Pada ayat ini, menjaga diri bukan hanya tentang menjaga tubuh atau menghindari bahaya fisik.

Maknanya jauh lebih luas, yaitu menjaga diri agar tetap berada di jalan yang diridai Allah sehingga terhindar dari siksa-Nya.

Yuk, kita lanjut agar semakin jelas.

`,

                next:"N5"

            },

            E:{

                text:`

🌼 Tidak masalah kalau belum tahu.

Justru melalui ayat ini kita akan belajar bersama.

Coba perhatikan lagi kata-kata dalam ayat tersebut.

Menurutmu, apa saja yang perlu dijaga dalam diri seorang muslim?

`,

                next:"N5"

            }

        },


        //=========================================
        // BANTUAN (SCAFFOLDING)
        //=========================================

        bantuan:{

            A:"Memberikan apresiasi dan pertanyaan pendalaman.",

            B:"Memberikan penguatan konsep sebelum memasuki analisis.",

            C:"Memberikan hint dengan memperluas makna menjaga diri.",

            D:"Meluruskan miskonsepsi tanpa menyalahkan siswa.",

            E:"Memberikan petunjuk sederhana dan motivasi agar siswa berani mencoba."

        },


        //=========================================
        // PENILAIAN
        //=========================================

        assessment:{

            indikator:"Interpretasi",

            score:{

                A:4,

                B:3,

                C:2,

                D:1,

                E:0

            }

        },


        //=========================================
        // KESIMPULAN
        //=========================================

        kesimpulan:
        "Node selesai apabila siswa memahami bahwa perintah menjaga diri pada QS. At-Taḥrīm ayat 6 tidak hanya bermakna menjaga fisik, tetapi juga menjaga iman, ibadah, akhlak, dan seluruh perilaku agar tetap berada di jalan Allah.",


        //=========================================
        // TRANSISI
        //=========================================

        transisi:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Keren, sekarang kita sudah mengetahui gambaran umum makna ayatnya. 😊

Pernahkah kamu bertanya, mengapa Allah menggunakan kata <b>'قُوا (quu)'</b> dalam ayat ini?

Apa sebenarnya arti kata tersebut?

Yuk, kita kupas satu per satu pada pembahasan berikutnya.

`

    },
        //====================================================
    // NODE N5
    //====================================================

    N5:{

        //=========================================
        // IDENTITAS NODE
        //=========================================

        id:"N5",

        title:"Analisis Makna 'Menjaga Diri' dalam QS. At-Taḥrīm Ayat 6",

        learningFlow:"LF5 – Analisis",

        conversationMap:"N5",

        materi:"Tanggung Jawab terhadap Diri Sendiri",

        subMateri:"Makna menjaga diri",

        posisi:"Analisis konsep setelah interpretasi ayat",

        difficulty:"Sedang",


        //=========================================
        // TUJUAN PEMBELAJARAN
        //=========================================

        tujuanPembelajaran:[

            "Menganalisis mengapa Allah memerintahkan manusia menjaga dirinya terlebih dahulu sebelum menjaga orang lain."

        ],


        //=========================================
        // INDIKATOR BERPIKIR KRITIS
        //=========================================

        indikatorBerpikirKritis:"Analisis",

        keteranganIndikator:
        "Siswa mampu mengidentifikasi alasan dan hubungan antara perintah menjaga diri dengan tanggung jawab seorang muslim.",


        //=========================================
        // SCAFFOLDING
        //=========================================

        tahapScaffolding:"Prompt",

        tujuanScaffolding:
        "Memberikan pertanyaan penuntun agar siswa menemukan hubungan sebab-akibat dari isi ayat.",


        //=========================================
        // DASAR MATERI
        //=========================================

        dasarMateri:"QS. At-Taḥrīm ayat 6",

        dalil:`

يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا

Artinya:

"Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka."

`,

        konsepUtama:[

            "Memperbaiki diri",

            "Menjadi teladan",

            "Menjaga iman",

            "Menjaga akhlak",

            "Menjaga ibadah",

            "Membimbing keluarga"

        ],


        //=========================================
        // STIMULUS BOT
        //=========================================

        stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Tadi kita sudah mengetahui bahwa Allah memerintahkan kita untuk menjaga diri.

Sekarang coba kita pikirkan lebih dalam.

💬 <b>Menurutmu, mengapa Allah memerintahkan kita menjaga diri sendiri terlebih dahulu sebelum menjaga keluarga?</b>

Jawablah menggunakan alasan menurut pemahamanmu. 😊

`,


        //=========================================
        // TUJUAN PERTANYAAN
        //=========================================

        tujuanPertanyaan:
        "Mengajak siswa menemukan hubungan logis antara tanggung jawab terhadap diri sendiri dan tanggung jawab terhadap keluarga.",


        //=========================================
        // PREDIKSI RESPONS SISWA
        //=========================================

        classify:{

            A:[

                "teladan",

                "contoh",

                "perbaiki diri",

                "taat",

                "iman",

                "akhlak",

                "ibadah",

                "amal",

                "bertanggung jawab",

                "mengajak keluarga",

                "membimbing keluarga",

                "perubahan dimulai dari diri",

                "selaras",

                "amanah"

            ],

            B:[

                "orang baik",

                "berubah dulu",

                "menjadi baik",

                "rajin ibadah",

                "menjaga perilaku",

                "muslim yang baik",

                "disiplin",

                "tidak berbuat dosa"

            ],

            C:[

                "menjaga kesehatan",

                "olahraga",

                "makan bergizi",

                "rajin sekolah",

                "tidak bolos",

                "tidak merokok",

                "tidak narkoba",

                "bersikap sopan",

                "menolong teman",

                "menjaga kebersihan"

            ],

            D:[

                "keluarga tidak penting",

                "diri sendiri saja",

                "hanya kesehatan",

                "kebakaran",

                "api sungguhan",

                "orang tua saja",

                "belum punya tanggung jawab",

                "cukup salat",

                "yang penting kaya",

                "yang penting pintar"

            ],

            E:[

                "tidak tahu",

                "bingung",

                "belum paham",

                "lupa",

                "tidak mengerti",

                "kurang tahu",

                "entahlah",

                "menyerah",

                "sulit",

                "bisa diulang"

            ]

        },

        defaultCategory:"E",


        //=========================================
        // RESPONS BOT
        //=========================================

        responses:{

            A:{

                text:`

🌟 MasyaAllah, analisismu sangat baik.

Betul sekali.

Islam mengajarkan bahwa perubahan dimulai dari diri sendiri.

Ketika seseorang menjaga iman, ibadah, dan akhlaknya, ia akan lebih mampu menjadi teladan bagi keluarganya.

Menurutmu, apa saja bentuk nyata menjaga diri dalam kehidupan sehari-hari?

`,

                next:"N6"

            },

            B:{

                text:`

👍 Bagus.

Jawabanmu sudah mengarah pada alasan yang benar.

Menjadi teladan memang salah satu bentuk tanggung jawab terhadap keluarga.

Sebelum mengajak orang lain berbuat baik, kita perlu berusaha memperbaiki diri terlebih dahulu.

Sekarang coba pikirkan, apa saja contoh menjaga diri yang dapat dilakukan setiap hari?

`,

                next:"N6"

            },

            C:{

                text:`

😊 Terima kasih.

Jawabanmu sudah menunjukkan sebagian pemahaman.

Selain menjaga diri secara fisik, menurutmu apakah menjaga diri juga berarti menjaga iman, ibadah, dan akhlak?

Coba pikirkan lagi ya.

`,

                next:"N6"

            },

            D:{

                text:`

Tidak apa-apa.

Allah tidak mengajarkan kita hanya peduli pada diri sendiri.

Ayat ini menunjukkan urutannya, yaitu memperbaiki diri terlebih dahulu, kemudian membimbing keluarga agar sama-sama berada di jalan Allah.

Yuk kita lanjut supaya semakin jelas.

`,

                next:"N6"

            },

            E:{

                text:`

🌼 Tidak masalah kalau belum tahu.

Coba bayangkan seorang guru yang mengajak muridnya disiplin, tetapi gurunya sendiri sering terlambat.

Menurutmu, apakah ajakannya akan mudah diikuti?

Begitu juga dalam kehidupan.

Kita perlu belajar memperbaiki diri terlebih dahulu sebelum mengajak orang lain.

`,

                next:"N6"

            }

        },


        //=========================================
        // BANTUAN (SCAFFOLDING)
        //=========================================

        bantuan:{

            A:"Memberikan pertanyaan pendalaman.",

            B:"Memberikan penguatan konsep.",

            C:"Memberikan hint berupa perluasan makna menjaga diri.",

            D:"Meluruskan miskonsepsi dengan penjelasan sederhana.",

            E:"Memberikan analogi kehidupan sehari-hari sebagai jembatan berpikir."

        },


        //=========================================
        // PENILAIAN
        //=========================================

        assessment:{

            indikator:"Analisis",

            score:{

                A:4,

                B:3,

                C:2,

                D:1,

                E:0

            }

        },


        //=========================================
        // KESIMPULAN
        //=========================================

        kesimpulan:
        "Node selesai apabila siswa mampu menyimpulkan bahwa menjaga diri merupakan langkah awal dalam menjalankan tanggung jawab sebagai seorang muslim sehingga mampu menjadi teladan dan membimbing keluarganya menuju kebaikan.",


        //=========================================
        // TRANSISI
        //=========================================

        transisi:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Sekarang kita sudah mengetahui mengapa kita perlu menjaga diri terlebih dahulu. 😊

Nah, menurutmu apa saja bentuk tanggung jawab terhadap diri sendiri yang dapat kita lakukan sebagai pelajar setiap hari?

Yuk, kita bahas pada pembelajaran berikutnya.

`
    
    },
    //====================================================
// NODE N6
//====================================================

N6:{

    //=========================================
    // IDENTITAS NODE
    //=========================================

    id:"N6",

    title:"Analisis Penerapan Tanggung Jawab terhadap Diri Sendiri",

    learningFlow:"LF6 – Analisis",

    conversationMap:"N6",

    materi:"Tanggung Jawab terhadap Diri Sendiri",

    subMateri:"Analisis penerapan tanggung jawab terhadap diri sendiri",

    posisi:"Setelah memahami QS. At-Taḥrīm ayat 6",


    //=========================================
    // TUJUAN PEMBELAJARAN
    //=========================================

    tujuanPembelajaran:[

        "Menganalisis suatu perilaku berdasarkan QS. At-Taḥrīm ayat 6.",

        "Menentukan apakah perilaku tersebut mencerminkan tanggung jawab terhadap diri sendiri.",

        "Memberikan alasan berdasarkan pemahaman sendiri."

    ],


    //=========================================
    // INDIKATOR BERPIKIR KRITIS
    //=========================================

    indikatorBerpikirKritis:"Analisis",

    keteranganIndikator:
    "Siswa mampu menganalisis suatu kasus berdasarkan konsep tanggung jawab terhadap diri sendiri dan memberikan alasan yang logis.",


    //=========================================
    // SCAFFOLDING
    //=========================================

    tahapScaffolding:"Prompt (Guided Analysis)",

    tujuanScaffolding:
    "Membimbing siswa menghubungkan konsep Al-Qur'an dengan situasi nyata melalui pertanyaan penuntun.",


    //=========================================
    // DASAR MATERI
    //=========================================

    dasarMateri:
    "QS. At-Taḥrīm ayat 6 mengajarkan bahwa menjaga diri diwujudkan dengan menjaga iman, ibadah, akhlak, kesehatan, mengembangkan potensi diri, memanfaatkan waktu dengan baik, serta menjauhi maksiat.",


    //=========================================
    // STIMULUS BOT
    //=========================================

    stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Sekarang kita mencoba menerapkan isi QS. At-Taḥrīm ayat 6 dalam kehidupan sehari-hari.

Perhatikan situasi berikut.

📚 <b>Rafi</b> adalah seorang siswa yang rajin belajar sehingga nilainya selalu bagus.

Namun, ia sering meninggalkan salat, berkata kasar kepada temannya, dan menganggap ibadah dapat dilakukan nanti ketika sudah dewasa.

💬 <b>Menurutmu, apakah Rafi sudah menunjukkan tanggung jawab terhadap dirinya sendiri?</b>

Jelaskan alasanmu dengan bahasamu sendiri ya. 😊

`,


    //=========================================
    // TUJUAN PERTANYAAN
    //=========================================

    tujuanPertanyaan:
    "Mengukur kemampuan siswa menganalisis suatu kasus berdasarkan konsep QS. At-Taḥrīm ayat 6.",


    //=========================================
    // CLASSIFIER
    //=========================================

    classify:{

        A:[

            "belum",

            "belum bertanggung jawab",

            "meninggalkan salat",

            "tidak salat",

            "menjaga iman",

            "menjaga ibadah",

            "menjaga akhlak",

            "hubungan dengan allah",

            "taat kepada allah",

            "prestasi tidak cukup",

            "belajar dan ibadah",

            "iman",

            "akhlak",

            "ibadah",

            "maksiat",

            "ridha allah",

            "hubungan dengan allah",

            "taat",

            "menjalankan perintah",

            "larangan allah"

        ],

        B:[

            "harus salat",

            "harus ibadah",

            "harus menjaga perilaku",

            "berbuat baik",

            "menjadi muslim yang baik",

            "rajin ibadah",

            "tidak berkata kasar",

            "harus taat",

            "memperbaiki diri",

            "menjaga lisan",

            "mengaji",

            "berakhlak baik",

            "tidak meninggalkan salat",

            "bertanggung jawab",

            "disiplin",

            "menjadi teladan",

            "lebih baik",

            "berubah",

            "menjaga diri",

            "menjaga sikap"

        ],

        C:[

            "rajin belajar",

            "nilai bagus",

            "anak pintar",

            "belajar",

            "berprestasi",

            "tekun",

            "disiplin belajar",

            "tidak bolos",

            "rajin sekolah",

            "mengerjakan tugas",

            "membaca",

            "belajar terus",

            "pandai",

            "prestasi",

            "siswa baik",

            "semangat belajar",

            "nilai tinggi",

            "cerdas",

            "rajin",

            "belajar saja"

        ],
                D:[

            "sudah",

            "yang penting pintar",

            "yang penting nilai",

            "salat nanti",

            "ibadah nanti",

            "yang penting sukses",

            "tidak masalah",

            "cukup belajar",

            "allah melihat nilai",

            "tidak perlu salat",

            "prestasi saja",

            "nilai saja",

            "akhlak tidak penting",

            "ibadah tidak penting",

            "cukup sekolah",

            "cukup pintar",

            "yang penting kaya",

            "remaja belum wajib",

            "orang tua saja",

            "bebas"

        ],

        E:[

            "tidak tahu",

            "bingung",

            "belum paham",

            "lupa",

            "tidak mengerti",

            "entahlah",

            "kurang tahu",

            "sulit",

            "tidak bisa",

            "menyerah",

            "gatau",

            "ga tau",

            "nggak tahu",

            "belum ngerti",

            "maksudnya",

            "bisa diulang",

            "masih bingung",

            "kurang paham",

            "belum bisa",

            "?"

        ]

    },

    defaultCategory:"E",


    //=========================================
    // RESPON BOT
    //=========================================

    responses:{

        A:{

            text:`

🌟 <b>MasyaAllah.</b>

Analisismu sudah sangat baik.

Kamu mampu melihat bahwa tanggung jawab terhadap diri sendiri bukan hanya tentang prestasi, tetapi juga menjaga iman, ibadah, dan akhlak.

Sekarang coba pikirkan lebih dalam.

💬 <b>Mengapa menurutmu Allah tidak hanya memerintahkan manusia menjadi pintar, tetapi juga menjaga iman dan akhlaknya?</b>

`,

            next:"N7"

        },

        B:{

            text:`

👍 Bagus.

Jawabanmu sudah mengarah pada konsep yang benar.

Sekarang coba renungkan.

💬 <b>Kalau seseorang rajin belajar tetapi sering meninggalkan salat, apakah menurutmu ia sudah menjalankan tanggung jawabnya sebagai seorang muslim? Mengapa?</b>

`,

            next:"N7"

        },

        C:{

            text:`

😊 Terima kasih.

Kamu sudah menemukan salah satu bentuk tanggung jawab terhadap diri sendiri.

Namun coba pikirkan lagi.

💬 <b>Apakah menjaga diri hanya berarti rajin belajar dan menjaga kesehatan, atau juga menjaga hubungan dengan Allah melalui ibadah dan akhlak?</b>

`,

            next:"N7"

        },

        D:{

            text:`

Tidak apa-apa.

Mari kita pikirkan bersama.

Kalau nilai sekolah saja sudah cukup, mengapa Allah masih memerintahkan manusia menjaga dirinya dari api neraka?

💬 <b>Menurutmu apa hubungan ibadah dengan tanggung jawab terhadap diri sendiri?</b>

`,

            next:"N7"

        },

        E:{

            text:`

😊 Tidak masalah kalau belum tahu.

Coba ingat kegiatanmu sejak bangun tidur tadi.

💬 <b>Kegiatan apa yang menunjukkan kamu sedang menjaga hubunganmu dengan Allah?</b>

Jawabanmu nanti bisa menjadi petunjuk untuk menemukan jawabannya.

`,

            next:"N7"

        }

    },


    //=========================================
    // SCORE
    //=========================================

    score:{

        A:4,

        B:3,

        C:2,

        D:1,

        E:0

    },


    //=========================================
    // KESIMPULAN
    //=========================================

    kesimpulan:
    "Node selesai apabila siswa mampu menganalisis suatu kasus kehidupan dan memberikan alasan berdasarkan konsep tanggung jawab terhadap diri sendiri sesuai QS. At-Taḥrīm ayat 6."

},
//====================================================
// NODE N7
//====================================================

N7:{

    //=========================================
    // IDENTITAS NODE
    //=========================================

    id:"N7",

    title:"Evaluasi Dampak Mengabaikan Tanggung Jawab terhadap Diri Sendiri",

    learningFlow:"LF6 – Evaluasi",

    conversationMap:"N7",

    materi:"Tanggung Jawab terhadap Diri Sendiri",

    subMateri:"Dampak Mengabaikan Tanggung Jawab terhadap Diri Sendiri",

    posisi:"Setelah siswa mampu menganalisis bentuk tanggung jawab terhadap diri sendiri (Node N6)",


    //=========================================
    // TUJUAN PEMBELAJARAN
    //=========================================

    tujuanPembelajaran:[

        "Mengevaluasi apakah suatu perilaku mencerminkan tanggung jawab terhadap diri sendiri.",

        "Memberikan alasan berdasarkan ajaran Islam dan QS. At-Taḥrīm ayat 6.",

        "Menjelaskan dampak mengabaikan tanggung jawab terhadap diri sendiri bagi diri, keluarga, dan masa depan."

    ],


    //=========================================
    // INDIKATOR BERPIKIR KRITIS
    //=========================================

    indikatorBerpikirKritis:"Evaluasi",

    keteranganIndikator:
    "Siswa mampu mengevaluasi suatu perilaku berdasarkan konsep tanggung jawab terhadap diri sendiri serta memberikan alasan yang logis sesuai nilai-nilai Islam.",


    //=========================================
    // SCAFFOLDING
    //=========================================

    tahapScaffolding:"Modeling → Prompt → Guided Evaluation",

    tujuanScaffolding:
    "Membimbing siswa mengevaluasi sebuah kasus nyata melalui pertanyaan penuntun sehingga mampu memberikan penilaian beserta alasannya.",


    //=========================================
    // DASAR MATERI
    //=========================================

    dasarMateri:
    "Mengabaikan tanggung jawab terhadap diri sendiri dapat menyebabkan lemahnya keimanan, meninggalkan ibadah, rusaknya akhlak, menurunnya disiplin belajar, terganggunya kesehatan, tidak berkembangnya potensi diri, serta memberikan dampak buruk bagi keluarga dan lingkungan. QS. At-Taḥrīm ayat 6 memerintahkan setiap muslim menjaga dirinya dan keluarganya dari api neraka.",


    //=========================================
    // STIMULUS BOT
    //=========================================

    stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

MasyaAllah. 😊

Sekarang kamu sudah mengetahui berbagai bentuk tanggung jawab terhadap diri sendiri.

Sekarang mari kita gunakan pemahaman itu untuk menilai sebuah situasi.

Perhatikan cerita berikut.

📖 <b>Andi</b> adalah seorang pelajar. Ia sering menunda salat, lebih memilih bermain game hingga larut malam, jarang belajar, dan sering mengabaikan nasihat orang tuanya.

Akibatnya nilai pelajarannya menurun, kesehatannya terganggu, dan hubungannya dengan orang tua menjadi kurang baik.

💬 <b>Menurutmu, apakah perilaku Andi sudah mencerminkan sikap bertanggung jawab terhadap dirinya sendiri?</b>

Jelaskan alasanmu dengan bahasamu sendiri ya. 😊

`,


    //=========================================
    // TUJUAN PERTANYAAN
    //=========================================

    tujuanPertanyaan:
    "Mengukur kemampuan siswa mengevaluasi suatu perilaku berdasarkan konsep tanggung jawab terhadap diri sendiri sesuai QS. At-Taḥrīm ayat 6.",


        //=========================================
    // CLASSIFIER
    //=========================================

    classify:{

        A:[

            "belum bertanggung jawab",
            "tidak bertanggung jawab",
            "mengabaikan tanggung jawab",
            "meninggalkan salat",
            "melalaikan salat",
            "mengabaikan ibadah",
            "tidak menjaga iman",
            "tidak menjaga akhlak",
            "menyia nyiakan waktu",
            "tidak disiplin",
            "merugikan diri sendiri",
            "merugikan keluarga",
            "amanah allah",
            "hubungan dengan allah",
            "kewajiban kepada allah",
            "kewajiban sebagai muslim",
            "masa depan rusak",
            "masa depannya",
            "potensi diri",
            "ibadah lebih utama"

        ],

        B:[

            "kurang bertanggung jawab",
            "dia salah",
            "harus rajin belajar",
            "harus salat",
            "harus ibadah",
            "harus disiplin",
            "harus mengatur waktu",
            "harus berubah",
            "harus memperbaiki diri",
            "harus mendengarkan orang tua",
            "mengurangi game",
            "mengurangi bermain game",
            "kurang baik",
            "kurang disiplin",
            "lebih baik belajar",
            "orang tua sedih",
            "nilai turun",
            "kurang menjaga diri",
            "lebih rajin ibadah",
            "masa depannya kurang baik"

        ],

        C:[

            "terlalu banyak main game",
            "main game",
            "bermain game",
            "malas belajar",
            "kurang belajar",
            "nilai jelek",
            "nilai turun",
            "kurang disiplin belajar",
            "begadang",
            "tidur larut",
            "kurang istirahat",
            "menjaga kesehatan",
            "harus olahraga",
            "makan sehat",
            "harus belajar",
            "jadwal belajar",
            "kurang semangat belajar",
            "lebih rajin belajar",
            "belajar lebih giat",
            "cuma game"

        ],

        D:[

            "tidak masalah",
            "gak masalah",
            "biasa saja",
            "wajar",
            "semua orang juga begitu",
            "salat nanti",
            "ibadah nanti",
            "yang penting bahagia",
            "yang penting sukses",
            "itu hak pribadi",
            "bebas memilih",
            "tidak ada dampaknya",
            "tidak ada hubungannya dengan agama",
            "tidak harus salat",
            "tidak perlu berubah",
            "main game terus tidak apa apa",
            "tidak salah",
            "biarkan saja",
            "orang tua tidak usah ikut campur",
            "hidup dinikmati saja"

        ],

        E:[

            "tidak tahu",
            "gak tahu",
            "belum tahu",
            "bingung",
            "masih bingung",
            "belum paham",
            "kurang paham",
            "tidak mengerti",
            "gak mengerti",
            "sulit",
            "belum bisa",
            "tidak bisa",
            "belum yakin",
            "mungkin salah",
            "entahlah",
            "bisa diulang",
            "ulangi",
            "saya menyerah",
            "maaf saya belum tahu",
            "?"

        ]

    },

    defaultCategory:"E",
        //=========================================
    // RESPON BOT
    //=========================================

    responses:{

        A:{

            text:`

🌟 <b>MasyaAllah, analisismu sangat baik.</b>

Kamu tidak hanya mengatakan bahwa perilaku Andi kurang tepat, tetapi juga mampu memberikan alasan yang logis.

Artinya, kamu sudah memahami bahwa tanggung jawab terhadap diri sendiri bukan hanya menjaga kesehatan atau belajar saja, tetapi juga menjaga hubungan dengan Allah melalui ibadah, menjaga akhlak, menggunakan waktu dengan baik, serta menghargai nasihat orang tua.

🤔 Sekarang kita berpikir lebih dalam lagi.

💬 <b>Menurutmu, jika Andi terus mempertahankan kebiasaan tersebut selama beberapa tahun, bagaimana dampaknya bagi masa depan dirinya dan keluarganya?</b>

`,

            next:"N8"

        },

        B:{

            text:`

👍 <b>Jawabanmu sudah benar.</b>

Kamu sudah dapat menilai bahwa perilaku Andi belum menunjukkan tanggung jawab terhadap dirinya sendiri.

Sekarang coba dalami lagi.

💬 <b>Dari beberapa perilaku Andi tadi, perilaku mana yang paling besar pengaruhnya terhadap kehidupannya? Mengapa?</b>

Coba hubungkan antara penyebab dan akibatnya ya. 😊

`,

            next:"N8"

        },

        C:{

            text:`

😊 <b>Terima kasih.</b>

Kamu sudah menemukan salah satu masalah pada diri Andi.

Namun coba pikirkan lagi.

💬 <b>Selain bermain game atau kurang belajar, apakah ada kewajiban kepada Allah yang juga diabaikan oleh Andi?</b>

Bagaimana pengaruhnya terhadap dirinya sendiri dan keluarganya?

`,

            next:"N8"

        },

        D:{

            text:`

🌼 <b>Tidak apa-apa.</b>

Mari kita pikirkan bersama.

Andi:

• sering meninggalkan salat

• malas belajar

• sering bermain game hingga larut malam

• membantah orang tua

💬 <b>Menurutmu, apakah semua kebiasaan itu membawa manfaat atau justru kerugian?</b>

Siapa saja yang ikut merasakan dampaknya selain Andi?

`,

            next:"N8"

        },

        E:{

            text:`

😊 <b>Tidak apa-apa kalau masih bingung.</b>

Yuk kita lihat kembali cerita tadi.

Andi:

• sering meninggalkan salat

• malas belajar

• bermain game sampai larut malam

• nilai sekolahnya menurun

• kesehatannya terganggu

• sering membantah orang tua

💬 <b>Menurutmu, apakah semua akibat tersebut lebih banyak membawa manfaat atau kerugian?</b>

Coba jelaskan dengan alasanmu sendiri.

Tidak harus sempurna. Yang penting kamu mencoba. 🌻

`,

            next:"N8"

        }

    },


    //=========================================
    // SCORE
    //=========================================

    score:{

        A:4,

        B:3,

        C:2,

        D:1,

        E:0

    },


    //=========================================
    // KESIMPULAN
    //=========================================

    kesimpulan:
    "Node selesai apabila siswa mampu mengevaluasi suatu perilaku berdasarkan nilai-nilai Islam serta memberikan alasan yang logis sesuai QS. At-Taḥrīm ayat 6."

},
//====================================================
// NODE N8
//====================================================

N8:{

    //=========================================
    // IDENTITAS NODE
    //=========================================

    id:"N8",

    title:"Evaluasi Dampak Tanggung Jawab terhadap Keluarga",

    learningFlow:"LF6 – Evaluasi",

    conversationMap:"N8",

    materi:"Tanggung Jawab terhadap Keluarga",

    subMateri:"Mengevaluasi dampak mengabaikan tanggung jawab terhadap keluarga",

    posisi:"Setelah siswa mampu mengevaluasi tanggung jawab terhadap diri sendiri (Node N7).",


    //=========================================
    // TUJUAN PEMBELAJARAN
    //=========================================

    tujuanPembelajaran:[

        "Mengevaluasi perilaku seseorang dalam melaksanakan tanggung jawab terhadap keluarga.",

        "Menentukan dampak yang muncul apabila tanggung jawab terhadap keluarga diabaikan.",

        "Memberikan alasan berdasarkan nilai-nilai Islam dan pengalaman kehidupan sehari-hari."

    ],


    //=========================================
    // INDIKATOR BERPIKIR KRITIS
    //=========================================

    indikatorBerpikirKritis:"Evaluasi",

    keteranganIndikator:
    "Siswa mampu mengevaluasi suatu perilaku yang berkaitan dengan tanggung jawab terhadap keluarga, memberikan penilaian berdasarkan bukti pada kasus, serta menjelaskan alasan yang didukung nilai-nilai Islam.",


    //=========================================
    // SCAFFOLDING
    //=========================================

    tahapScaffolding:"Modeling → Prompt → Guided Evaluation",

    tujuanScaffolding:
    "Chatbot menyajikan kasus yang dekat dengan kehidupan siswa, kemudian memberikan pertanyaan penuntun agar siswa mampu mengevaluasi dampak perilaku tokoh terhadap dirinya, keluarganya, dan hubungan antaranggota keluarga sebelum menyusun penilaian secara mandiri.",


    //=========================================
    // DASAR MATERI
    //=========================================

    dasarMateri:
    "Dalam Islam setiap anggota keluarga memiliki tanggung jawab untuk saling menghormati, membantu, menaati orang tua selama tidak bertentangan dengan syariat, menjaga komunikasi yang baik, serta menjaga keharmonisan keluarga. Mengabaikan tanggung jawab tersebut dapat menimbulkan konflik, hilangnya kepercayaan, renggangnya hubungan keluarga, dan berkurangnya keberkahan dalam kehidupan.",


    //=========================================
    // STIMULUS BOT
    //=========================================

    stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

MasyaAllah. 😊

Sekarang kita lanjutkan ke situasi yang sering terjadi di lingkungan keluarga.

Perhatikan cerita berikut.

📖 <b>Siti</b> sering diminta membantu orang tuanya di rumah.

Namun ia lebih memilih bermain media sosial, jarang membantu pekerjaan rumah, sering membantah ketika dinasihati, dan tidak peduli ketika adiknya membutuhkan bantuan.

Akibatnya, orang tuanya merasa sedih, adiknya kecewa, dan suasana di rumah menjadi kurang harmonis.

💬 <b>Menurutmu, apakah perilaku Siti sudah mencerminkan tanggung jawab terhadap keluarganya?</b>

Jelaskan alasanmu dengan bahasamu sendiri ya. 😊

`,


    //=========================================
    // TUJUAN PERTANYAAN
    //=========================================

    tujuanPertanyaan:
    "Mengukur kemampuan siswa mengevaluasi suatu kasus berdasarkan konsep tanggung jawab terhadap keluarga, menjelaskan alasan secara logis, serta menghubungkannya dengan nilai-nilai Islam.",
    //=========================================
    // CLASSIFIER
    //=========================================

    classify:{

        A:[

            "belum bertanggung jawab",

            "tidak bertanggung jawab",

            "mengabaikan tanggung jawab",

            "tidak menghormati orang tua",

            "membantah orang tua",

            "tidak membantu orang tua",

            "tidak peduli keluarga",

            "keluarga menjadi tidak harmonis",

            "menyakiti hati orang tua",

            "orang tua sedih",

            "adik kecewa",

            "hubungan keluarga rusak",

            "bertentangan dengan ajaran islam",

            "bertentangan dengan perintah allah",

            "berbakti kepada orang tua",

            "birrul walidain",

            "harus menghormati orang tua",

            "harus membantu keluarga",

            "keluarga adalah amanah",

            "tanggung jawab terhadap keluarga",

            "menjaga keharmonisan keluarga",

            "menjaga hubungan keluarga",

            "menjalankan kewajiban",

            "berbuat baik kepada keluarga",

            "menghormati keluarga",

            "membantu adik",

            "taat kepada orang tua",

            "selama tidak bertentangan dengan syariat",

            "keluarga adalah tanggung jawab",

            "perilaku siti salah"

        ],

        B:[

            "kurang bertanggung jawab",

            "seharusnya membantu",

            "harus membantu orang tua",

            "harus menghormati",

            "harus mendengarkan orang tua",

            "lebih baik membantu",

            "lebih baik membantu keluarga",

            "harus berubah",

            "harus memperbaiki sikap",

            "harus meminta maaf",

            "tidak boleh membantah",

            "harus menyayangi adik",

            "harus lebih peduli",

            "harus lebih sopan",

            "harus lebih rajin",

            "harus menghargai orang tua",

            "harus bertanggung jawab",

            "perilakunya kurang baik",

            "orang tua kecewa",

            "keluarga sedih",

            "rumah menjadi tidak nyaman",

            "suasana keluarga tidak baik",

            "harus memperbaiki diri",

            "lebih menghormati keluarga",

            "lebih peduli keluarga"

        ],

        C:[

            "terlalu sering main hp",

            "terlalu sering main media sosial",

            "main hp terus",

            "bermain terus",

            "malas membantu",

            "kurang membantu",

            "sibuk bermain",

            "kurang peduli",

            "lebih memilih bermain",

            "kurang disiplin",

            "harus mengurangi main hp",

            "harus membagi waktu",

            "harus lebih rajin membantu",

            "lebih banyak membantu",

            "harus mengatur waktu",

            "lebih sedikit bermain",

            "main media sosial",

            "sibuk sendiri",

            "terlalu fokus hp",

            "kurang perhatian"

        ],

        D:[

            "tidak masalah",

            "gak masalah",

            "biasa saja",

            "wajar",

            "itu haknya",

            "hak pribadi",

            "orang tua terlalu banyak mengatur",

            "tidak perlu membantu",

            "tidak harus membantu",

            "tidak perlu menghormati",

            "tidak ada dampaknya",

            "biarkan saja",

            "yang penting bahagia",

            "yang penting senang",

            "keluarga tidak penting",

            "orang tua tidak usah ikut campur",

            "boleh membantah",

            "main hp terus tidak apa apa",

            "tidak salah",

            "bebas"

        ],

        E:[

            "tidak tahu",

            "gak tahu",

            "bingung",

            "belum tahu",

            "belum paham",

            "kurang paham",

            "tidak mengerti",

            "belum mengerti",

            "susah",

            "sulit",

            "tidak bisa",

            "belum bisa",

            "belum bisa menjawab",

            "belum bisa menilai",

            "mungkin salah",

            "entahlah",

            "bisa diulang",

            "ulangi",

            "masih bingung",

            "?"

        ]

    },

    defaultCategory:"E",
        //=========================================
    // RESPON BOT
    //=========================================

    responses:{

        A:{

            text:`

🌟 <b>MasyaAllah.</b>

Analisismu sangat baik.

Kamu mampu mengevaluasi bahwa tanggung jawab terhadap keluarga bukan hanya membantu pekerjaan rumah, tetapi juga menghormati orang tua, menyayangi anggota keluarga, dan menjaga keharmonisan keluarga sebagai bentuk ketaatan kepada Allah.

Sekarang coba pikirkan lebih dalam.

💬 <b>Menurutmu, bagaimana kondisi sebuah keluarga jika setiap anggotanya saling menjalankan tanggung jawabnya dengan baik?</b>

`,

            next:"N9"

        },

        B:{

            text:`

👍 Bagus.

Jawabanmu sudah menunjukkan bahwa kamu memahami perilaku yang benar.

Sekarang coba jelaskan lebih dalam.

💬 <b>Menurutmu, mengapa menghormati orang tua dan membantu keluarga termasuk bentuk tanggung jawab seorang muslim?</b>

Coba berikan alasanmu ya.

`,

            next:"N9"

        },

        C:{

            text:`

😊 Terima kasih.

Kamu sudah menemukan salah satu masalah dalam cerita tersebut.

Namun coba pikirkan kembali.

💬 <b>Selain kurang membantu orang tua, apakah ada sikap lain yang menunjukkan bahwa tokoh tersebut belum bertanggung jawab terhadap keluarganya?</b>

Bagaimana dampaknya terhadap hubungan dalam keluarga?

`,

            next:"N9"

        },

        D:{

            text:`

🌼 Tidak apa-apa.

Mari kita renungkan bersama.

Jika setiap anggota keluarga hanya memikirkan dirinya sendiri dan tidak mau membantu orang tua, menurutmu apakah keluarga akan tetap harmonis?

💬 <b>Siapa saja yang akan merasakan dampak dari sikap tersebut?</b>

Coba pikirkan kembali sebelum melanjutkan.

`,

            next:"N9"

        },

        E:{

            text:`

😊 Tidak apa-apa kalau masih bingung.

Coba ingat kembali cerita yang tadi.

Tokoh dalam cerita:
• lebih memilih bermain HP,
• mengabaikan permintaan orang tua,
• tidak membantu pekerjaan rumah,
• membuat orang tua kecewa.

💬 <b>Menurutmu, apakah semua tindakan itu membawa manfaat atau justru merugikan keluarganya?</b>

Jelaskan dengan bahasamu sendiri ya.

`,

            next:"N9"

        }

    },


    //=========================================
    // SCORE
    //=========================================

    score:{

        A:4,

        B:3,

        C:2,

        D:1,

        E:0

    },


    //=========================================
    // KESIMPULAN
    //=========================================

    kesimpulan:
    "Node selesai apabila siswa mampu mengevaluasi perilaku yang berkaitan dengan tanggung jawab terhadap keluarga berdasarkan nilai-nilai Islam, memberikan alasan yang logis, serta menjelaskan dampaknya terhadap hubungan keluarga."
},
//====================================================
// NODE N9
//====================================================

N9:{

    //=========================================
    // IDENTITAS NODE
    //=========================================

    id:"N9",

    title:"Eksplanasi: Menentukan Prioritas Memperbaiki Tanggung Jawab terhadap Diri Sendiri",

    learningFlow:"LF8 – Eksplanasi",

    conversationMap:"N9",

    materi:"Tanggung Jawab terhadap Diri Sendiri",

    subMateri:"Menentukan prioritas memperbaiki diri berdasarkan QS. At-Taḥrīm ayat 6",

    posisi:"Penutup submateri Tanggung Jawab terhadap Diri Sendiri",


    //=========================================
    // TUJUAN PEMBELAJARAN
    //=========================================

    tujuanPembelajaran:[

        "Menentukan satu langkah yang menjadi prioritas dalam memperbaiki tanggung jawab terhadap diri sendiri.",

        "Menjelaskan alasan pemilihan langkah tersebut secara logis.",

        "Mengaitkan alasan dengan kandungan QS. At-Taḥrīm ayat 6 dan hadis tentang tanggung jawab seorang muslim."

    ],


    //=========================================
    // INDIKATOR BERPIKIR KRITIS
    //=========================================

    indikatorBerpikirKritis:"Eksplanasi",

    keteranganIndikator:
    "Siswa mampu mempertanggungjawabkan keputusan yang dipilih dengan memberikan alasan logis berdasarkan kandungan QS. At-Taḥrīm ayat 6, hadis, dan nilai-nilai Islam.",


    //=========================================
    // SCAFFOLDING
    //=========================================

    tahapScaffolding:"Fading",

    tujuanScaffolding:
    "Chatbot mulai mengurangi bantuan sehingga siswa mampu menyusun alasan secara mandiri berdasarkan pemahaman yang telah diperoleh pada node sebelumnya.",


    //=========================================
    // DASAR MATERI
    //=========================================

    dasarMateri:
    "QS. At-Taḥrīm ayat 6 memerintahkan setiap muslim menjaga dirinya terlebih dahulu melalui keimanan, ibadah, akhlak, pengendalian diri, dan pemanfaatan waktu. Perubahan diri dimulai dari hubungan yang baik dengan Allah, kemudian tercermin dalam perilaku sehari-hari. Rasulullah ﷺ juga mengajarkan bahwa setiap manusia akan dimintai pertanggungjawaban atas dirinya.",


    //=========================================
    // STIMULUS BOT
    //=========================================

    stimulus:`

🤖 <b>Sahabat Al-Qur'an & Hadis</b>

Alhamdulillah. 🌼

Kita sudah belajar bahwa menjaga diri bukan hanya tentang belajar atau menjaga kesehatan, tetapi juga menjaga hubungan dengan Allah melalui iman, ibadah, dan akhlak.

Dalam QS. At-Taḥrīm ayat 6 Allah berfirman:

<b>"Peliharalah dirimu dan keluargamu dari api neraka."</b>

Sekarang bayangkan Andi benar-benar ingin berubah.

💬 <b>Jika Andi hanya boleh memulai dari SATU langkah terlebih dahulu, menurutmu langkah apa yang paling penting?</b>

Jelaskan juga alasanmu mengapa langkah itu harus didahulukan.

`,



    //=========================================
    // TUJUAN PERTANYAAN
    //=========================================

    tujuanPertanyaan:
    "Mengukur kemampuan siswa menentukan prioritas tindakan, mempertahankan pendapat dengan alasan yang logis, serta menghubungkan alasan tersebut dengan kandungan QS. At-Taḥrīm ayat 6 dan hadis.",


    //=========================================
    // CLASSIFIER
    //=========================================

    classify:{
            A:[

            "memperbaiki salat",

            "salat tepat waktu",

            "menjaga salat",

            "memperbaiki ibadah",

            "bertobat",

            "mendekatkan diri kepada allah",

            "hubungan dengan allah",

            "karena salat kewajiban",

            "perintah allah",

            "menjalankan kewajiban",

            "ibadah yang utama",

            "agar allah ridha",

            "menjaga iman",

            "dasar menjadi muslim",

            "menjaga diri dari dosa"

        ],

        B:[

            "rajin salat",

            "rajin belajar",

            "mengurangi game",

            "mengurangi bermain hp",

            "mengatur waktu",

            "lebih disiplin",

            "rajin mengaji",

            "membuat jadwal",

            "berusaha berubah",

            "menjadi lebih baik",

            "mendengarkan orang tua",

            "menjaga kesehatan",

            "tidur lebih awal",

            "tidak malas",

            "belajar setiap hari"

        ],

        C:[

            "olahraga",

            "tidur cukup",

            "makan sehat",

            "bangun pagi",

            "membersihkan kamar",

            "menabung",

            "mengurangi jajan",

            "rajin piket",

            "memakai seragam rapi",

            "membaca buku",

            "mengurangi rebahan",

            "tidak begadang",

            "lebih hemat",

            "menjaga kebersihan",

            "membantu teman"

        ],

        D:[

            "tidak perlu berubah",

            "semua sudah baik",

            "yang penting kaya",

            "yang penting nilai",

            "tidak perlu salat",

            "bermain game terus",

            "tidak usah belajar",

            "hidup santai",

            "bebas",

            "tidak ada yang salah",

            "tidak perlu ibadah",

            "tidak perlu disiplin",

            "yang penting bahagia",

            "tidak ada dampaknya",

            "tidak usah berubah"

        ],

        E:[

            "tidak tahu",

            "gak tahu",

            "bingung",

            "belum paham",

            "kurang paham",

            "tidak mengerti",

            "belum mengerti",

            "sulit",

            "tidak bisa",

            "belum bisa",

            "entahlah",

            "bisa diulang",

            "masih bingung",

            "tidak tahu harus mulai dari mana",

            "?"

        ]

    },

    defaultCategory:"E",

    //=========================================
    // RESPON BOT
    //=========================================

    responses:{
                A:{

            text:`

🌟 <b>MasyaAllah.</b>

Alasan yang kamu berikan sangat kuat.

Kamu tidak hanya memilih langkah yang tepat, tetapi juga mampu menjelaskan mengapa langkah tersebut harus didahulukan berdasarkan ajaran Islam.

Ini menunjukkan bahwa kamu mampu mempertanggungjawabkan pendapatmu dengan alasan yang logis.

💬 <b>Sekarang coba renungkan.</b>

Jika kamu berada pada posisi Andi, kebiasaan baik apa yang akan kamu mulai lakukan hari ini?

`,

            next:"N10"

        },

        B:{

            text:`

👍 <b>Bagus.</b>

Pilihanmu sudah tepat.

Sekarang coba jelaskan lebih dalam.

💬 <b>Mengapa menurutmu langkah tersebut perlu dilakukan lebih dahulu daripada langkah yang lain?</b>

Coba hubungkan dengan tanggung jawab seorang muslim kepada Allah.

`,

            next:"N10"

        },

        C:{

            text:`

😊 <b>Terima kasih.</b>

Pilihanmu memang termasuk kebiasaan yang baik.

Namun coba pikirkan kembali.

💬 <b>Apakah langkah itu sudah menjadi prioritas utama untuk melaksanakan perintah Allah dalam QS. At-Taḥrīm ayat 6?</b>

Menurutmu, mengapa?

`,

            next:"N10"

        },

        D:{

            text:`

🌼 <b>Tidak apa-apa.</b>

Mari kita renungkan bersama.

Allah memerintahkan setiap muslim untuk menjaga dirinya terlebih dahulu.

Perubahan tidak akan terjadi jika seseorang merasa dirinya tidak perlu berubah.

💬 <b>Menurutmu, satu kebiasaan baik apa yang paling mungkin mulai kamu lakukan besok agar menjadi pribadi yang lebih bertanggung jawab?</b>

`,

            next:"N10"

        },

        E:{

            text:`

😊 <b>Tidak apa-apa kalau masih bingung.</b>

Kadang perubahan besar dimulai dari satu langkah kecil.

Misalnya:

• salat tepat waktu,

• mengurangi bermain game,

• membuat jadwal belajar,

• atau membaca Al-Qur'an setiap hari.

💬 <b>Menurutmu, dari contoh tersebut mana yang paling mudah kamu lakukan lebih dahulu?</b>

`,

            next:"N10"

        }

    },


    //=========================================
    // SCORE
    //=========================================

    score:{

        A:4,

        B:3,

        C:2,

        D:1,

        E:0

    },


    //=========================================
    // KESIMPULAN
    //=========================================

    kesimpulan:
    "Node selesai apabila siswa mampu menentukan prioritas dalam memperbaiki tanggung jawab terhadap diri sendiri, menjelaskan alasan pemilihannya secara logis, serta mengaitkannya dengan kandungan QS. At-Taḥrīm ayat 6 dan hadis tentang tanggung jawab seorang muslim."

}
}