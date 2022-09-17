const shopList_ul = document.getElementById("shop-list");
const itemList1_ul = document.getElementById("item-list1");
const itemList2_ul = document.getElementById("item-list2");
const itemList3_ul = document.getElementById("item-list3");
const ponyImage_img = document.getElementById("pony-image");
const clicks_span = document.getElementById("clicks");

const horseshoe_li = document.getElementById("horseshoe-item");
const bridle_li = document.getElementById("bridle-item");
const saddle_li = document.getElementById("saddle-item");

let clickNum = 0;

let horseshoeNum = 0;
let bridleNum = 0;
let saddleNum = 0;

setInterval(() => {
	clickNum += 0.1 * horseshoeNum;
	clickNum += 0.3 * bridleNum;
	clickNum += 0.5 * saddleNum;
	clickNum = Math.floor(clickNum * 10) / 10;
	clicks_span.innerHTML = clickNum;
}, 1000)

ponyImage_img.addEventListener("click", (event) => {
	clickNum += 1;
	clicks_span.innerHTML = clickNum;
});

function addItemToList(source) {
	const list_element = document.createElement("li");
	const img = document.createElement("img");
	img.classList.add("item-element");
	img.src = source;
	list_element.appendChild(img);
	let totalItems = horseshoeNum + bridleNum + saddleNum;
	if (totalItems <= 5) {
		itemList1_ul.appendChild(list_element);
	}
	else if (totalItems <= 10) {
		itemList2_ul.appendChild(list_element);
	}
	else {
		itemList3_ul.appendChild(list_element);
	}
}

horseshoe_li.addEventListener("click", (event) => {
	if (horseshoeNum != 5) {
		if (clickNum >= 10) {
			clickNum -= 10;
			clicks_span.innerHTML = clickNum;
			horseshoeNum += 1;
			addItemToList("horseshoe.png");
			if (horseshoeNum == 5) {
				horseshoe_li.innerHTML = "Horseshoe - Out of Stock";
				horseshoe_li.classList = "";
				horseshoe_li.classList.add("bought-shop-element");
			}
		}
	}
})

bridle_li.addEventListener("click", (event) => {
	if (bridleNum != 5) {
		if (clickNum >= 30) {
			clickNum -= 30;
			clicks_span.innerHTML = clickNum;
			bridleNum += 1;
			addItemToList("bridle.png");
			if (bridleNum == 5) {
				bridle_li.innerHTML = "Bridle - Out of Stock";
				bridle_li.classList = "";
				bridle_li.classList.add("bought-shop-element");
			}
		}
	}
})

saddle_li.addEventListener("click", (event) => {
	if (saddleNum != 5) {
		if (clickNum >= 50) {
			clickNum -= 50;
			clicks_span.innerHTML = clickNum;
			saddleNum += 1;
			addItemToList("saddle.png");
			if (saddleNum == 5) {
				saddle_li.innerHTML = "Saddle - Out of Stock";
				saddle_li.classList = "";
				saddle_li.classList.add("bought-shop-element");
			}
		}
	}
})