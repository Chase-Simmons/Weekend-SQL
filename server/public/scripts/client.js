$(document).ready(initialize);
///
//  ON READY AND LISTENERS
function initialize() {
  console.log('init');
  $('.task-list').on('click', '.completeButton', updateDataFromDB);
  $('.task-list').on('click', '.deleteButton', deleteDataFromDB);
  $('.create-task-button').on('click', sendDataToDB);
  getDataFromDB();
}
///
//
function getDataFromDB() {
  $.ajax({
    method: 'GET',
    url: '/task',
  })
    .then(function (response) {
      renderTable(response);
    })
    .catch(function (error) {
      alert('Could not get data from server');
    });
}
///
//
function sendDataToDB() {
  console.log('send me');
}
///
//
function deleteDataFromDB() {
  console.log('delete me');
}
///
//
function updateDataFromDB() {
  console.log('complete me');
}
///
//
function renderTable(response) {
  let tasks = response;
  $('.task-list').empty();

  for (let task of tasks) {
    console.log(task);
    if (task.is_complete) {
      $('.task-list').append(`
    <tr class="true">
              <td>${task.task_name}</td>
              <td>${task.is_complete}</td>
              <td><button class="completeButton data-index="${task.id}>COMPLETE</button> <button class="deleteButton data-index="${task.id}>DELETE</button></td>
            </tr>
    `);
    } else {
      $('.task-list').append(`
      <tr class="false">
                <td>${task.task_name}</td>
                <td>${task.is_complete}</td>
                <td><button class="completeButton data-index="${task.id}>COMPLETE</button> <button class="deleteButton data-index="${task.id}>DELETE</button></td>
              </tr>
      `);
    }
  }
}
///
//
function clearInputs() {}
///
