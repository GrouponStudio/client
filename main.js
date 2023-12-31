(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        c(e);
    new MutationObserver(e=>{
        for (const l of e)
            if (l.type === "childList")
                for (const n of l.addedNodes)
                    n.tagName === "LINK" && n.rel === "modulepreload" && c(n)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(e) {
        const l = {};
        return e.integrity && (l.integrity = e.integrity),
        e.referrerpolicy && (l.referrerPolicy = e.referrerpolicy),
        e.crossorigin === "use-credentials" ? l.credentials = "include" : e.crossorigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function c(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const l = o(e);
        fetch(e.href, l)
    }
}
)();
let s = document.querySelectorAll(".faq");
for (let t = 0; t < s.length; t++) {
    let r = s[t].querySelector(".faq-answer")
      , o = s[t].querySelector(".arrow-down");
    s[t].addEventListener("click", ()=>{
        for (let c = 0; c < s.length; c++) {
            let e = s[c].querySelector(".faq-answer")
              , l = s[c].querySelector(".arrow-down");
            s[t] != s[c] && (e.style.maxHeight = "0px",
            l.classList.replace("rotate-180", "rotate-0"))
        }
        o.classList.contains("rotate-180") ? (r.style.maxHeight = 0 + "px",
        o.classList.replace("rotate-180", "rotate-0")) : (r.style.maxHeight = r.scrollHeight + "px",
        o.classList.replace("rotate-0", "rotate-180"))
    }
    )
}

let i = document.querySelectorAll(".tab")
  , a = document.querySelector(".tab-indicator")
  , u = document.querySelectorAll(".panel")
  , m = document.querySelectorAll(".panel-preview");
a !== null && (a.style.width = i[0].getBoundingClientRect().width + "px",
a.style.left = i[0].getBoundingClientRect().left - i[0].parentElement.getBoundingClientRect().left + "px");
i.forEach(t=>{
    t.addEventListener("click", ()=>{
        let r = t.getAttribute("aria-controls");
        a.style.width = t.getBoundingClientRect().width + "px",
        a.style.left = t.getBoundingClientRect().left - t.parentElement.getBoundingClientRect().left + "px",
        u.forEach(o=>{
            let c = o.getAttribute("id");
            r === c ? (o.classList.remove("invisible", "opacity-0", "scale-90"),
            o.classList.add("visible", "opacity-100", "scale-100")) : (o.classList.add("invisible", "opacity-0", "scale-90"),
            o.classList.remove("visible", "opacity-100", "scale-100")),
            m.forEach(e=>{
                let l = e.getAttribute("data-target");
                r === l ? (e.classList.replace("translate-y-[100%]", "translate-y-0"),
                e.classList.replace("scale-75", "scale-100"),
                e.classList.replace("opacity-50", "opacity-100"),
                e.classList.replace("z-0", "z-10")) : (e.classList.replace("scale-100", "scale-75"),
                e.classList.replace("opacity-100", "opacity-50"),
                e.classList.replace("z-10", "z-0"),
                setTimeout(()=>{
                    e.classList.replace("translate-y-0", "translate-y-[100%]")
                }
                , 300),
                clearTimeout())
            }
            )
        }
        )
    }
    )
}
);
const f = document.querySelector("#hamburger")
  , g = document.querySelector("#navbar");
f.addEventListener("click", ()=>{
    g.classList.toggle("navbar-active")
}
);

 const dismissButton = document.getElementById('dismiss-button');
  const contentContainer = document.querySelector('.relative.isolate');

  dismissButton.addEventListener('click', () => {
    contentContainer.style.display = 'none';
  });
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || e.key === 'Inspect') {
        e.preventDefault();
    }
});
