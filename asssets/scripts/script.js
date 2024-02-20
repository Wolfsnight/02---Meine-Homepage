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