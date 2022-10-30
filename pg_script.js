var div_1= document.createElement("div");
div_1.classList.add("container");

var div_2= document.createElement("div");
div_2.className="card w-50 m-auto";

var div_3= document.createElement("div");
div_3.className="card-header text-center bg-warning";
var h_1=document.createElement("h1");
h_1.innerHTML="Pagination";
h_1.id="title";
div_3.appendChild(h_1);

// var p_1= document.createElement("div");
// p_1.className="card-header text-center bg-warning";
var p_2=document.createElement("p");
p_2.innerHTML="Scenery";
p_2.id="description";
div_3.appendChild(p_2);


var div_t=document.createElement("div");
div_t.className="table-responsive";
div_t.style="display:none";

div_3.appendChild(div_t);

var div_4=document.createElement("div");
div_4.className="card-body";

var div_5=document.createElement("div");
div_5.className="container-fluid m-auto p-0 d-block text-center h-25";

var img_1=document.createElement("img");
img_1.className="w-50 p-auto h-100";
img_1.id="listingTable";
img_1.src="image_1.jpg";

div_5.appendChild(img_1);

var div_6=document.createElement("div");
div_6.className="card-footer text-center";

var b_1=document.createElement("button");
b_1.className="btn btn-light border-dark mx-1";
b_1.id="btn_prev";
b_1.innerHTML="Prev";
b_1.setAttribute("onclick","prevPage()");

var b_2=document.createElement("button");
b_2.className="btn btn-light border-dark text-dark mx-1 active";
b_2.id="b_1";
b_2.innerHTML="1";
b_2.setAttribute("onclick","change_page(this)");

var b_3=document.createElement("button");
b_3.className="btn btn-light border-dark text-dark mx-1";
b_3.id="b_2";
b_3.innerHTML="2";
b_3.setAttribute("onclick","change_page(this)");

var b_4=document.createElement("button");
b_4.className="btn btn-light border-dark text-dark mx-1";
b_4.id="b_3";
b_4.innerHTML="3";
b_4.setAttribute("onclick","change_page(this)");

var b_5=document.createElement("button");
b_5.className="btn btn-light border-dark text-dark mx-1";
b_5.id="b_4";
b_5.innerHTML="4";
b_5.setAttribute("onclick","change_page(this)");

var b_6=document.createElement("button");
b_6.className="btn btn-light border-dark text-dark mx-1";
b_6.id="b_5";
b_6.innerHTML="5";
b_6.setAttribute("onclick","change_page(this)");

var b_7=document.createElement("button");
b_7.className="btn btn-light border-dark text-dark mx-1";
b_7.id="b_6";
b_7.innerHTML="6";
b_7.setAttribute("onclick","change_page(this)");

var b_8=document.createElement("button");
b_8.className="btn btn-light border-dark text-dark mx-1";
b_8.id="b_7";
b_8.innerHTML="7";
b_8.setAttribute("onclick","change_page(this)");

var b_9=document.createElement("button");
b_9.className="btn btn-light border-dark text-dark mx-1";
b_9.id="btn_next";
b_9.innerHTML="Next";
b_9.setAttribute("onclick","nextPage()");

div_6.appendChild(b_1);
div_6.appendChild(b_2);
div_6.appendChild(b_3);
div_6.appendChild(b_4);
div_6.appendChild(b_5);
div_6.appendChild(b_6);
div_6.appendChild(b_7);
div_6.appendChild(b_8);
div_6.appendChild(b_9);


div_4.appendChild(div_5);
div_2.appendChild(div_3);
div_2.appendChild(div_4);
div_2.appendChild(div_6);
div_1.appendChild(div_2);
document.body.appendChild(div_1)


var current_page = 1;

var objJson = [
    { adName: "image_1.jpg" },
    { adName: "image_2.jpg" },
    { adName: "image_3.jpg" },
    { adName: "image_4.jpg" },
    { adName: "image_5.jpg" },
    { adName: "image_6.jpg" },
    { adName: "image_8.jpg" },
];

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
var listing_table = document.getElementById("listingTable");

function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.src = "";

    for (var i = page - 1; i < page; i++) {
        listing_table.src = objJson[i].adName;
        var a_c = document.getElementsByClassName("btn");
        for (var i = 0; i < a_c.length; i++) {
            a_c[i].classList.remove("active");
        }
        document.getElementById("b_" + page).classList.add("active");
        document.getElementById("b_" + page).classList.add("text-light");
    }
    pn(page, numPages());
}

function numPages() {
    return Math.ceil(objJson.length);
}



function change_page(page) {
    var page_num = page.innerHTML;
    // alert(page_num); 
    for (var i = page_num - 1; i < page_num; i++) {
        listing_table.src = objJson[i].adName;

        // alert(objJson[i].adName) 
    }
    var a_c = document.getElementsByClassName("btn");
    for (var i = 0; i < a_c.length; i++) {
        a_c[i].classList.remove("active");
    }
    document.getElementById("b_" + page_num).classList.add("active");
    document.getElementById("b_" + page_num).classList.add("text-light");
    current_page = page_num;
    pn(page_num, numPages());
}
function pn(page, numPages) {
    if (page == 1) {
        btn_prev.classList.add("disabled");
    } else {
        btn_prev.classList.remove("disabled");
    }

    if (page == numPages) {
        btn_next.classList.add("disabled");
    } else {
        btn_next.classList.remove("disabled");
    }
}


