fetch('https://crudcrud.com/api/34569193c68b4ebda265b211f5ac5064/produk')
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