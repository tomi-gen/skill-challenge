# Skill-Challenge

This repository have the objective to determine my skills in the field of development.

# Features

1. Table: This page has the `employees table` where it shows data for each one.
2. Form: This page has the fields to create a new employee or edit an existing one.

# Packages

# 1. Backend Packages

- cors: ^2.8.5
- express: ^5.1.0
- sqlite3: ^5.1.7

# 2. Frontend Packages

- 

# Endpoints

1. GET /employees: Get a list of all employees in the database.
   Response: Array of employee objects.

2. GET /employees/:dni: Get the information of a single employee by their DNI (unique identifier).
   Response: Object of the employee.
   Params: dni (string or number).

3. POST /employees: Creates a new employee record.
   Body:
   json
   {
   "dni": "12345678",
   "name": "Nombre Apellido",
   "birthDate": "1990-01-01",
   "isDeveloper": true,
   "description": "Frontend Developer",
   "role": "Frontend"
   }
   Response: Returns the created employee object with a success message.

4. PUT /employees/:dni: Updates an existing employee's information based on their DNI.
   Params: dni (string or number).
   Body: same structure as POST.
   Response: Returns the updated employee object with a success message.

5. DELETE /employees/:dni
   Description: Deletes an employee record from the database.
   Params: dni (string or number).
   Response: Returns a confirmation message about successful deletion.

### Install Dependences

- Open the terminal and begin going to the server with `cd server`
- Install the server dependences `npm install`
- Go back and then go to the client folder with `cd ../client`
- Install the client dependences `npm install`
