let products = {
    products_data: [
        {
            name: "product No.1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oaF5bY27jFPGnYHQiToerJDknqu6dABdCg&usqp=CAU",
            price: "39.99$",
        },
        {
            name: "product No.2",
            image: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m187/gallery/m187-gallery-blue-1-new.png?v=1",
            price: "19.99$",
        },
        {
            name: "product No.3",
            image: "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/LOM280BLK_logitech_wireless_mouse_black_m280.jpg",
            price: "19.99$",
        },
        {
            name: "product No.4",
            image: "https://cdn-amz.woka.io/images/I/61UxfXTUyvL.jpg",
            price: "20.99$",
        },
        {
            name: "product No.5",
            image: "https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png",
            price: "10.99$",
        },
        {
            name: "product No.6",
            image: "https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_UF894,1000_QL80_.jpg",
            price: "50.99$",
        },
        {
            name: "product No.7",
            image: "https://www.gigahertz.com.ph/cdn/shop/products/1_600x_a543a2b6-0a46-4bc8-a1af-cc4894bc9259.webp?v=1675758906",
            price: "60.99$",
        },
        {
            name: "product No.8",
            image: "https://product.hstatic.net/1000374492/product/untitled-2_14916e33882748d0a1133f0bb75f64bd_grande.gif",
            price: "40.99$",
        },

    ]
}
for (i of products.products_data) {
    let box = document.createElement("div");
    box.classList.add("box");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    box.appendChild(image)




    let name = document.createElement("h5");
    name.classList.add("product-name");

    name.innerText = i.name.toUpperCase();
    box.appendChild(name);





    let price = document.createElement("h6");
    price.classList.add("price");
    price.innerText = i.price;
    box.appendChild(price)




    document.getElementById("products").appendChild(box);
}