fetch('https://crudcrud.com/api/44ec2c3b57ce45609885a9150d0d5a3d/produk')
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
        <td>
            <button onclick="editProduct('${product._id}')">Edit</button>
            <button onclick="deleteProduct('${product._id}')">Delete</button>
        </td>
      `;
            productTable.querySelector('tbody').appendChild(row);
        });
    });

// Add Product
document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama_produk = document.getElementById('nama_produk').value;
    const jumlah = document.getElementById('jumlah').value;
    const harga = document.getElementById('harga').value;

    fetch('https://crudcrud.com/api/7ca2135844b04ffba8a024340b439a9f/produk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nama_produk, jumlah, harga }),
        })
        .then(response => response.json())
        .then(data => {
            location.reload();
        });
});

// Edit Product
function editProduct(productId) {
    // Write edit logic here
    alert('Edit product with ID: ' + productId);
}

// Delete Product
function deleteProduct(productId) {
    fetch(`https://crudcrud.com/api/7ca2135844b04ffba8a024340b439a9f/produk/${productId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                location.reload();
            }
        });
}