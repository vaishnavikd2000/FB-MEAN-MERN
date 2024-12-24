// Initialize an empty array to hold the activities
var ActivityPlannerList = [];

// Function to handle adding activities to the list
function ActivityPlanner() {
    // Get the value of the input field
    var TextInputValue = document.getElementById('TextInput').value;

    // Check if input is not empty
    if (TextInputValue.trim() !== "") {
        // Add the activity to the ActivityPlannerList array
        ActivityPlannerList.push(TextInputValue);

        // Clear the input field
        document.getElementById('TextInput').value = '';

        // Call the function to display the updated list
        mapActivityToList();
    } else {
        // If input is empty, show a simple alert
        alert('Please enter an activity.');
    }
}

// Function to map activities from the list and display them in the HTML
function mapActivityToList() {
    var ListStr = '';

    // Loop through the activities in the ActivityPlannerList
    for (let i = 0; i < ActivityPlannerList.length; i++) {
        // ListStr += "<li class='list-group-item'>" + ActivityPlannerList[i] + "</li>";
        ListStr +=
         `<li class='list-group-item d-flex justify-content-between align-items-center'>
         <span class='lead'>${ActivityPlannerList[i] }</span>
         <button type="button" class="btn btn-danger bi bi-x-lg" onclick="deleteActivity(${i})"></button>
        </li>`;
       
    }

    // Set the innerHTML of the ActivityPlannerList <ul> to show the activities
    document.getElementById('ActivityPlannerList').innerHTML = ListStr;
}
function deleteActivity(i) {
    ActivityPlannerList.splice(i , 1)
    mapActivityToList();
}