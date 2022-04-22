import React, {Component} from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import API from "../../services";

class BlogPost extends Component {
    state = {
        // komponen state dari React untuk statefull component
        listArtikel: [], // variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {
          // variabel yang digunakan untuk menampung sementara data yang akan diimport
          userId: 1, // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json
          id: 1,
          title: "",
          body: "",
        },
    };

    ambilDataDariServerAPI = () => {
        // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        API.getNewsBlog().then((result) => {
            this.setState({
            listArtikel: result,
            });
        });
    };
}

export default BlogPost;