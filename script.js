function showTab(tabId, button){

    let tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.classList.remove("active-tab");
    });

    document.getElementById(tabId)
        .classList.add("active-tab");

    let buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active-btn");
    });

    button.classList.add("active-btn");
}