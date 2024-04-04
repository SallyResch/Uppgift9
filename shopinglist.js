document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the "Add Item" button
    var addItemButton = document.getElementById('addItemButton');
    
    // Add event listener to the "Add Item" button
    addItemButton.addEventListener('click', function () {
        // Get the value from the input field
        var itemText = document.getElementById('addItem').value.trim();
        
        // Check if the input field is not empty
        if (itemText !== '') {
            // Create a new list item
            var newItem = document.createElement('li');
            
            // Create a checkbox
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input');
            
            // Create a label for the checkbox
            var label = document.createElement('label');
            label.classList.add('form-check-label');
            label.textContent = itemText;
            
            // Append the checkbox and label to the list item
            newItem.appendChild(checkbox);
            newItem.appendChild(label);
            
            // Add class to the new list item
            newItem.classList.add('list-group-item');
            
            // Add event listener to mark item as purchased when checkbox is clicked
            checkbox.addEventListener('change', function () {
                label.classList.toggle('text-decoration-line-through', checkbox.checked);
            });
            
            // Append the new list item to the shopping list
            document.getElementById('itemList').appendChild(newItem);
            
            // Clear the input field
            document.getElementById('addItem').value = '';
        }
    });
});

