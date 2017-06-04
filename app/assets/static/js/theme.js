var theme = (window.localStorage.theme || "default");
theme = theme.replace(/\"/g, "").toLowerCase();
if (theme != 'theme') {
    document.body.className = ("theme-" + theme);
}
