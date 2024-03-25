function updateFavicon(faviconPath) {
  const link = document.querySelector("link[rel*='icon']");

  if (!link) {
    const newLink = document.createElement("link");
    newLink.type = "image/x-icon";
    newLink.rel = "shortcut icon";
    newLink.href = faviconPath;
    document.getElementsByTagName("head")[0].appendChild(newLink);
  } else {
    link.href = faviconPath;
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    updateFavicon("favicon.svg");
  } else {
    updateFavicon("favicon-inactive.svg");
  }
});
