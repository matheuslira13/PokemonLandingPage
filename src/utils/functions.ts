export const IsEmailValid = (email: string) => {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const ColorTypePokemon = (type: string) => {
  var pokeType: string = type;
  var cases = {
    normal: {
      color: "#a5a776",
      img: "https://i.pinimg.com/564x/c8/af/4f/c8af4f1facc8b476418931e1a840acc4.jpg",
    },
    fighting: {
      color: "#bd3027",
      img: "https://i.pinimg.com/564x/0e/bb/b6/0ebbb6a2f16ef92f40614abb10f90db0.jpg",
    },
    flying: {
      color: "#94a3de",
      img: "https://i.pinimg.com/564x/85/30/80/8530805f216548b02fd6311d8f75a042.jpg",
    },
    poison: {
      color: "#b95a9c",
      img: "https://i.pinimg.com/564x/5f/e9/1b/5fe91ba42430bf214457b4d1ad449bcf.jpg",
    },
    ground: {
      color: "#e3d3a5",
      img: "https://i.pinimg.com/564x/d6/bb/b6/d6bbb643ebdbdda9ac2f667c5c5dec6c.jpg",
    },
    rock: {
      color: "#bca562",
      img: "https://i.pinimg.com/564x/d2/6b/e9/d26be9451439d713aa5f98ac24aa72cd.jpg",
    },
    bug: {
      color: "#a8bc41",
      img: "https://i.pinimg.com/564x/44/e2/0d/44e20d09b7092e7247ec81d51af8a696.jpg",
    },
    ghost: {
      color: "#6663b2",
      img: "https://i.pinimg.com/564x/ab/73/ba/ab73ba87717dd1e4bd88f5fce9c2a47f.jpg",
    },
    steel: {
      color: "#aeacc1",
      img: "https://i.pinimg.com/564x/81/d5/a8/81d5a8fc825bfa86168d2c72c94b3a63.jpg",
    },
    fire: {
      color: "#fc4831",
      img: "https://i.pinimg.com/564x/bd/96/29/bd9629f03c21402f3f95f053757debf1.jpg",
    },
    water: {
      color: "#1a90f6",
      img: "https://i.pinimg.com/564x/00/e8/d7/00e8d7a8e2a465268f9fb10b0590c8cd.jpg",
    },
    grass: {
      color: "#73d969",
      img: "https://i.pinimg.com/564x/25/da/7f/25da7f64088a94dc992794f9cbc72a06.jpg",
    },
    electric: {
      color: "#f5be42",
      img: "https://i.pinimg.com/564x/52/0a/e9/520ae93b62cbd72e3e029e5d3a802a82.jpg",
    },
    psychic: {
      color: "#fb6d9d",
      img: "https://i.pinimg.com/564x/64/99/d5/6499d5653961ffd4540b8bfd00e8fe9b.jpg",
    },
    ice: {
      color: "#45cde3",
      img: "https://i.pinimg.com/564x/b4/14/14/b414148a6388acb3ba9d7a18e2720eab.jpg",
    },
    dragon: {
      color: "#8869f4",
      img: "https://i.pinimg.com/564x/5c/73/1f/5c731fc667b4fbcf9352737f13f72e1a.jpg",
    },
    dark: {
      color: "#745a4b",
      img: "https://i.pinimg.com/564x/41/c7/70/41c770878aa33f72f02705611edf9af7.jpg",
    },
    fairy: {
      color: "#fab4f0",
      img: "https://i.pinimg.com/564x/f8/0e/c2/f80ec25f3b52948ea368c2960def5fdf.jpg",
    },
  };
  //@ts-ignore
  return cases[pokeType];
};
