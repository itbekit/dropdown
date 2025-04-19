let select = document.querySelector(".select-wrapper")
let select_trigger = document.querySelector(".select-trigger")
let select_items = document.querySelector(".select-items")
let choices = document.querySelectorAll(".select-item")

let items = [
    { id: "item-1", title: "Item 1" },
    { id: "item-2", title: "Item 2" },
    { id: "item-3", title: "Item 3" },
    { id: "item-5", title: "Item 4" },
    { id: "item-5", title: "Item 5" },
]

items.forEach((item) => {
    const itemNode = document.createElement("li")
    itemNode.innerHTML = item.title
    itemNode.id = item.id
    itemNode.className = "select-item"
    
    select_items.appendChild(itemNode)
})

select_items.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-item")) {
        select_trigger.innerHTML = e.target.innerHTML

        document.querySelectorAll(".select-item").forEach((choice) => {
            choice.classList.remove("highlighted")
        })

        e.target.classList.add("highlighted")
    }
})


select.addEventListener("click", () => {
    select.classList.toggle("closed")
})

