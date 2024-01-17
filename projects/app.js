document.addEventListener("DOMContentLoaded", function () {
  let nameabc = document.getElementById("macvgmacvg").getAttribute("name");
  let eRecent = localStorage.getItem("macvgRecents");
  if (eRecent === null) {
    eRecent = "bruh";
  }
  let recentArray = eRecent.split(",");
  if (!recentArray.includes(nameabc)) {
    recentArray.push(nameabc);
    eRecent = recentArray.join(",");
    localStorage.setItem("macvgRecents", eRecent);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let thing87638 = setInterval(() => {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
      const root = document.documentElement;
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--shadow-color", "rgb(84, 84, 84)");
      root.style.setProperty("--black-color", "white");
      root.style.setProperty("--bg-color", "rgb(225, 225, 225)");
      root.style.setProperty("--bg-color-2", "rgb(30, 30, 30)");
      root.style.setProperty("--group-bg-color", "rgb(140, 140, 140, 0.7)");
    } else {
      const root = document.documentElement;
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--shadow-color", "transparent");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--bg-color-2", "white");
      root.style.setProperty("--group-bg-color", "rgba(40, 40, 40, 0.7)");
    }
  }, 100);
  const fullScreen = document.getElementById("fullscreen");
  const iframe = document.getElementById("iframe");
  iframe.contentWindow.addEventListener("keydown", function (e) {
    e.preventDefault();
  });
  const toolBar = document.querySelector(".tool-bar");
  const report = document.createElement("img");
  report.src = "/flag.svg";
  report.style.width = "18px";
  const share = document.getElementById("share");
  
  toolBar.insertBefore(report, share);
  const gameFrame = document.getElementById("gameframe");
  const star = document.getElementById("star");
  let nameabc = document.getElementById("macvgmacvg").getAttribute("name");
  let existingDataa = localStorage.getItem("favorites");
  if (existingDataa) {
  let favoritesArray = existingDataa.split(",");
  const index = favoritesArray.indexOf(nameabc);
  if (index !== -1) {
    star.src = "/star-solid.svg";
  } else {
    star.src = "/star-regular.svg";
  }
}
  fullScreen.addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullScreen.src = "/expand.svg";
    } else {
      gameFrame.requestFullscreen();
      iframe.style.height = "calc(100vh - 44px)";
      fullScreen.src = "/compress.svg";
    }
  });
  const up2 = document.createElement("div");
  const macvgClose = document.createElement("button");
  up2.style.width = "50%";
  up2.style.position = "fixed";
  up2.style.top = "30vh";
  up2.style.left = "25vw";
  up2.style.height = "40vh";
  up2.style.backgroundColor = "rgb(50, 50, 50)";
  up2.style.color = "white";
  up2.style.zIndex = "100000000000";
  up2.style.borderRadius = "10px";
  up2.style.padding = "3%";
  up2.style.fontSize = "25px";
  up2.style.display = "none";
  up2.style.lineHeight = "40px";
  up2.style.fontFamily = "Arial, Helvetica, sans-serif";
  up2.style.boxShadow = "0px 0px 30px black";
  macvgClose.style.display = "block";
  macvgClose.style.width = "50%";
  macvgClose.style.fontFamily = "Arial, Helvetica, sans-serif";
  macvgClose.style.marginInline = "25%";
  macvgClose.style.padding = "10px";
  macvgClose.style.backgroundColor = "rgb(50, 50, 50)";
  macvgClose.style.color = "white";
  macvgClose.style.borderRadius = "20px";
  macvgClose.style.marginBlock = "20px";
  macvgClose.style.fontWeight = "bold";
  macvgClose.style.cursor = "pointer";
  macvgClose.style.fontSize = "25px";
  macvgClose.style.border = "3px solid white";
  macvgClose.style.boxSizing = "border-box";
  up2.style.boxSizing = "border-box";
  up2.innerHTML =
    "Game URL copied! Share it on the internet for everyone else to enjoy this game!";
  macvgClose.innerHTML = "Done";
  macvgClose.addEventListener("click", function () {
    up2.style.display = "none";
  });
  let body23 = document.getElementsByTagName("body");
  body23[0].appendChild(up2);
  up2.appendChild(macvgClose);
  share.addEventListener("click", function () {
    let thing123 = window.location.href;
    navigator.clipboard.writeText(thing123);
    console.log(up2);
    console.log(body23);
    up2.style.display = "block";
  });
  report.addEventListener("click", function () {
    window.open("https://forms.gle/B3ed9Qj9EChpjemZ7", "_blank");
  });
  star.addEventListener("click", function () {
    let name = document.getElementById("macvgmacvg").getAttribute("name");
    if (star.src.includes("star-solid")) {
      star.src = "/star-regular.svg";
      let existingData = localStorage.getItem("favorites");
      let favoritesArray = existingData.split(",");
      const index = favoritesArray.indexOf(name);
      if (index !== -1) {
        favoritesArray.splice(index, 1);
        localStorage.setItem("favorites", favoritesArray);
      }
    } else {
      star.src = "/star-solid.svg";
      let existingData = localStorage.getItem("favorites");
      if (existingData === null) {
        existingData = "bruh";
      }
      let favoritesArray = existingData.split(",");
      if (!favoritesArray.includes(name)) {
        favoritesArray.push(name);
        existingData = favoritesArray.join(",");
        localStorage.setItem("favorites", existingData);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const games = document.querySelectorAll(".game");

  games.forEach(function (game) {
    game.addEventListener("mouseover", function () {
      let innerThing = game.innerHTML;
      game.setAttribute("name", innerThing);
    });
  });
});
setInterval(() => {
  const gameIframe = document.getElementById("iframe");
  gameIframe.contentWindow.focus();
  gameIframe.contentWindow.addEventListener("keydown", function(e) {
    if (e.key === "`") {
      window.location.href = "https://google.com";
    }
  })
}, 100);

document.addEventListener("keydown", (event) => {
  let panicKeys = localStorage.getItem("panic");
  let href = localStorage.getItem("href");
  if (panicKeys) {
    if (href) {
      let keys = panicKeys.split(",");
      if (keys.length >= 2 && event.key === keys[0]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[1] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length >= 2 && event.key === keys[1]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[0] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length === 1 && event.key === keys[0]) {
        window.location.href = href;
      }
    } else {
      let href = "https://www.google.com";
      let keys = panicKeys.split(",");
      if (keys.length >= 2 && event.key === keys[0]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[1] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length >= 2 && event.key === keys[1]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[0] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length === 1 && event.key === keys[0]) {
        window.location.href = href;
      }
    }
  } else {
    localStorage.setItem("panic", "`");
    let keys = panicKeys.split(",");
    if (keys.length >= 2 && event.key === keys[0]) {
      let key1Pressed = true;
      document.addEventListener("keydown", (event) => {
        if (event.key === keys[1] && key1Pressed) {
          window.location.href = href;
        }
      });
      document.addEventListener("keyup", (event) => {
        if (event.key === keys[0]) {
          key1Pressed = false;
        }
      });
    } else if (keys.length >= 2 && event.key === keys[1]) {
      let key1Pressed = true;
      document.addEventListener("keydown", (event) => {
        if (event.key === keys[0] && key1Pressed) {
          window.location.href = href;
        }
      });
      document.addEventListener("keyup", (event) => {
        if (event.key === keys[0]) {
          key1Pressed = false;
        }
      });
    } else if (keys.length === 1 && event.key === keys[0]) {
      window.location.href = href;
    }
  }
});

const google = ["Google", "/macvg/google.png"];
const canva = ["Home - Canva", "/macvg/canva.png"];
const clever = ["Clever | Portal", "/macvg/clever.png"];
const schoology = ["Home | Schoology", "/macvg/schoology.png"];
const newTab = ["New Tab", "/macvg/new-tab.png"];

function google1() {
  localStorage.setItem("title", JSON.stringify(google));
}

function canva1() {
  localStorage.setItem("title", JSON.stringify(canva));
}

function clever1() {
  localStorage.setItem("title", JSON.stringify(clever));
}

function schoology1() {
  localStorage.setItem("title", JSON.stringify(schoology));
}

function newTab1() {
  localStorage.setItem("title", JSON.stringify(newTab));
}

function unCloak() {
  localStorage.setItem("title", "");
}

function panic() {
  const button = document.getElementById("name2").value;
  localStorage.setItem("panic", button);
}

function url() {
  const inputurl = document.getElementById("name3").value;
  localStorage.setItem("href", inputurl);
}

function cloaking() {
  const name = document.getElementById("name").value;
  localStorage.title = name;
}

function changeName() {
  if (localStorage.title !== "") {
    const pageTon = document.querySelector(".cloak");
    const favicon = document.querySelector(".favicon");
    if (localStorage.title != null) {
      let all = localStorage.getItem("title");
      if (
        all.includes("Clever") ||
        all.includes("Google") ||
        all.includes("Canva") ||
        all.includes("Schoology") ||
        all.includes("New Tab")
      ) {
        let alln = JSON.parse(all);
        let title = alln[0];
        let image = alln[1];
        pageTon.innerHTML = title;
        favicon.outerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="${image}" />`;
      } else {
        pageTon.innerHTML = all;
      }
    }
  }
}
setInterval(changeName, 100);
