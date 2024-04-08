document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.getElementById('addItemButton');
    addItemButton.addEventListener('click', function () {
        const itemText = document.getElementById('addItem').value.trim();
        if (itemText !== '') {
            const newItem = document.createElement('li', 'd-flex', 'justify-content-between');
            const checkbox = document.createElement('input');
            const deleteButton = document.createElement('button');
            const label = document.createElement('label');

            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input');

      
            label.classList.add('form-check-label');
            label.textContent = itemText;

           
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');

            newItem.appendChild(checkbox);
            newItem.appendChild(label);
            newItem.appendChild(deleteButton);
            newItem.classList.add('list-group-item');

            checkbox.addEventListener('change', function () {
                label.classList.toggle('text-decoration-line-through', checkbox.checked);
            });

            deleteButton.addEventListener('click', function() {
                newItem.remove();
            });
            document.getElementById('itemList').appendChild(newItem);
            document.getElementById('addItem').value = '';
        }
    });
});