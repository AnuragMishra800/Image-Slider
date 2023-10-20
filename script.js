const pictures = [
    {
      img: "https://wallpapercave.com/wp/wp7130408.jpg",
    },
    {
      img: "https://cdn.wallpapersafari.com/5/58/XIBek2.jpg",
    },
    {
      img: "https://i.postimg.cc/26cvTVQs/pexels-janko-ferlic-899954.jpg"
    },
    {
      img: "https://wallpapercave.com/wp/wp4655511.jpg",
    },
    {
      img: "https://i.postimg.cc/Zqsfwny7/hot-girl-image-1920x1200-wallpaper-preview.jpg",
    },
    {
      img: "https://i.postimg.cc/90HFqW10/hot-beautiful-girl-in-red-dress-4k-wallpaper.jpg",
    },
    {
      img: "https://i.postimg.cc/SNTFBS89/mila-azul-ukrainian-sexy-model-a2-Vubmu-Um-Zqara-Wkp-JRnamtlr-WZpa-WU.jpg",
    },
    {
      img: "https://i.postimg.cc/cLpjWrJv/selena-gomez-pantene-photoshoot-wallpaper.jpg",
    },
    {
      img: "https://images.hdqwalls.com/download/gorgeous-girl-8k-yh-3840x2160.jpg",
    },
    {
      img: "https://i.postimg.cc/0540FhjQ/black-hair-hot-model-w7.jpg",
    },
    {
      img: "https://images.pexels.com/photos/1386603/pexels-photo-1386603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://i.postimg.cc/Zn1h8xCC/pexels-min-an-698532.jpg",
    },
    {
      img: "https://i.postimg.cc/fbTTT5XN/pexels-thieu-hoang-phuoc-3680652.jpg",
    },
    {
      img: "https://i.postimg.cc/hvRkhPwd/pexels-marcio-skull-3579181.jpg",
    },
    {
      img: "https://i.postimg.cc/5NBxBDSJ/pexels-min-an-751235.jpg",
    },
    {
      img: "https://i.postimg.cc/dVq3fJ5n/pexels-bruno-salvadori-2216542.jpg",
    },
    {
      img: "https://i.postimg.cc/fLjYGDGK/pexels-tieu-bao-truong-7569756.jpg",
    },
  ];
  
  const button = document.getElementById("myButton");
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  const buttons = document.querySelectorAll(".btn");
  const imgDiv = document.querySelector(".img-container");
  
  let currentImg = 0;
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(currentImg)
      if (button.id === "btn-left") {
        currentImg--;
        if (currentImg < 0) currentImg = pictures.length - 1;
        imgDiv.style.backgroundImage = `url(${pictures[currentImg].img})`;
      } else if (button.id === "btn-right") {
        currentImg++;
        if (currentImg > pictures.length - 1) currentImg = 0;
        imgDiv.style.backgroundImage = `url(${pictures[currentImg].img})`;
      }
    });
  });