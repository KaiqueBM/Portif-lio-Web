const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  let titles = document.getElementsByClassName("box-title")
  let links = document.getElementsByClassName("box-buttom")
  let imgs = document.getElementsByClassName("box")
  //console.log(imgs[0])
  //console.log(titles)

  let post = []
  let counter = 0

  db.collection("posts").onSnapshot((snapshot => {
    snapshot.forEach((doc)=> {
        post = doc.data();
        //console.log("Adicionando")
        //console.log(counter)
        if(counter<=4) {
            titles[counter].innerHTML = post.title
            links[counter].innerHTML = "<a href='"+post.url+"'>Ver mais</a>"
            imgs[counter].style.backgroundImage = "url("+post.img+")";
            counter++;
        }
        //console.log(post);
    })
  }))


