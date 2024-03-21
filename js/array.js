fetch('https://crudcrud.com/api/34569193c68b4ebda265b211f5ac5064/produk')
    .then(response => response.json())
    .then(data => {
        const produkContainer = document.getElementById('produk-container');


        data.forEach(produk => {

            const card = document.createElement('div');
            card.classList.add('card');

            const cardContent = `
                <div class="container">
                    <p><b>ID: </b>${produk._id}<p>
                    <p><b>Nama Produk: </b>${produk.nama_produk}</p>
                    <p><b>Jumlah: </b>${produk.jumlah}</p>
                    <p><b>Harga: </b>${produk.harga}</p>
                </div>
            `;

            card.innerHTML = cardContent;

            produkContainer.appendChild(card);
        });
    })