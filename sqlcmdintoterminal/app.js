const fs = require('fs');
const mysql = require('mysql2');
const { Table } = require('console-table-printer');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'temp',
});

// Read SQL commands from a file
const sqlFile = 'commands.sql';
const sqlCommands = fs.readFileSync(sqlFile, 'utf8').split(';');

// Remove empty commands
const filteredCommands = sqlCommands.filter(command => command.trim() !== '');

// Execute SQL commands
filteredCommands.forEach((command, index) => {
  connection.query(command, (error, results, fields) => {
    if (error) {
      console.error(`Error in command at line ${index + 1}: ${error}`);
    } else {
      console.log(`Command at line ${index + 1} executed successfully.`);
      if (results && results.length > 0) {
        console.log('Results:');
        const table = new Table();
        table.addRows(results);
        table.printTable();
      }
    }
  });
});

// Close the MySQL connection
connection.end();
