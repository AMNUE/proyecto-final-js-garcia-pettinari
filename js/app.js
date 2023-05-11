const searchContent = async () => {
    let texto_busqueda = document.getElementById("texto_busqueda").value;
    

    if (texto_busqueda.length > 2) {
        const answer = await fetch("https://imdb-api.com/en/API/Search/k_n4axiomw/" + texto_busqueda);
        const data = await answer.json();
        let content;

        data.results.forEach(item => {
            content += `<div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <p class="card-text"><b>${item.title}</b><br>${item.description}</p>
            </div>
          </div>`


        });
        document.getElementById("result").innerHTML = content;
    }
} 


document.getElementById("boton_buscar").addEventListener("click", searchContent);

