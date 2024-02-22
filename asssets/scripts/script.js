//  Menü  /////////////////////////////////////////////////

const navDisplay = () =>
{
    const nav = document.getElementById("header-nav");
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close")

    if (nav.style.display === "none")
    {
        nav.style.display = "unset";
        menuOpen.style.display = "none";
        menuClose.style.display = "unset";
    } else
    {
        nav.style.display = "none";
        menuOpen.style.display = "unset";
        menuClose.style.display = "none";
    }
}




document.getElementById("menu-icon").addEventListener("click", menu)


//  Impressum  ////////////////////////////////////////////

const impressum_close = () =>
{
    document.getElementById("impressum").style.display = "none"
}

const impressum_open = () =>
{
    document.getElementById("impressum").style.display = "unset"
}

document.getElementById("impressum-open").addEventListener("click", impressum_open)

document.getElementById("impressum-close").addEventListener("click", impressum_close)