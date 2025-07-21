const root = document.getElementById("root");
const getData = async () => {
    const res = await fetch("http://dummyjson.com/products");
    const data = await res.json();
    renderUI(data);
}
const renderUI = (data) => {
    const { products } = data;
    products.forEach(element => {
        const newContainer = document.createElement('div');
        newContainer.className = "card";
        newContainer.innerHTML =
            ` 
     <img src="${element.thumbnail}" width='200'/>
     <h4>${element.title}</h4>
     <h6>Price: ${element.price}</h6>
     `
        root.appendChild(newContainer);
    });
};


getData();