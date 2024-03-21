fetch('https://crudcrud.com/api/10edc5cfcde149539635f4b12cd3012d/produk', { mode: 'no-cors' })
    .then(response => response.json())
    .then(data => {
        const productTable = document.getElementById('productTable');

        data.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product._id}</td>
                <td>${product.nama_produk}</td>
                <td>${product.jumlah}</td>
                <td>${product.harga}</td>
            `;
            productTable.querySelector('tbody').appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });