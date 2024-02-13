let users = [];
let editIndex = -1;

function addRow() {
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();

  if (fname && lname) {
    const existingIndex = findExistingIndex(fname, lname);

    if (existingIndex === -1) {
      if (editIndex === -1) {
        users.push({ fname, lname });
      } else {
        users[editIndex] = { fname, lname };
        editIndex = -1;
        document.getElementById('add-btn').innerText = 'Add';
      }

      renderTable();
      clearInputs();
    } else {
      alert('Entry with the same First Name and Last Name already exists!');
    }
  }
}

function findExistingIndex(fname, lname) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].fname === fname && users[i].lname === lname) {
      return i;
    }
  }
  return -1;
}

function renderStaticData() {
  const staticData = [
    { fname: 'John', lname: 'Doe' },
    { fname: 'Jane', lname: 'Doe' },
  ];

  staticData.map((item) => {
    users.push(item)
  })
  renderTable();
}

function renderTable() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = document.createElement('tr');

    const checkboxTd = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      toggleDeleteButton();
    });
    checkboxTd.appendChild(checkbox);

    const fnameTd = document.createElement('td');
    fnameTd.innerText = user.fname;

    const lnameTd = document.createElement('td');
    lnameTd.innerText = user.lname;

    const actionsTd = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('btn', 'btn-warning');
    editBtn.onclick = (function(index) {
      return function() {
        editRow(index);
      };
    })(i);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.onclick = function () {
      deleteRow(i);
    };

    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);

    tr.appendChild(checkboxTd);
    tr.appendChild(fnameTd);
    tr.appendChild(lnameTd);
    tr.appendChild(actionsTd);

    tableBody.appendChild(tr);
  }
}

function deleteRow(index) {
  users.splice(index, 1);
  renderTable();
  toggleDeleteButton();
}

function editRow(index) {
  const user = users[index];
  document.getElementById('fname').value = user.fname;
  document.getElementById('lname').value = user.lname;
  editIndex = index;
  document.getElementById('add-btn').innerText = 'Update';
}

function clearInputs() {
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
}

function toggleDeleteButton() {
  const checkboxes = document.querySelectorAll('#table-body input[type="checkbox"]');
  const deleteButton = document.getElementById('delete-btn');

  const anyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  deleteButton.disabled = !anyCheckboxChecked;
}

function selectAllRows() {
  const checkboxes = document.querySelectorAll('#table-body input[type="checkbox"]');
  
  const selectAllCheckbox = document.getElementById('select-all').checked;

  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox;
  });

  toggleDeleteButton();
}

function deleteSelectedRows() {
  const checkboxes = document.querySelectorAll('#table-body input[type="checkbox"]');
  const selectedIndexes = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      selectedIndexes.push(index);
    }
  });

  selectedIndexes.reverse(); 

  selectedIndexes.forEach(index => {
    deleteRow(index);
  });

  
  document.getElementById('select-all').checked = false;
  toggleDeleteButton();
}