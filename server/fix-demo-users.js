const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '../.env.local' });

const pool = new Pool({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Demo users to update
const demoUsers = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com', plainPassword: 'password123', role: 'admin' },
  { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com', plainPassword: 'password123', role: 'user' },
  { id: 3, name: 'Bob Johnson', username: 'bobjohnson', email: 'bob@example.com', plainPassword: 'password123', role: 'user' },
  { id: 4, name: 'Alice Williams', username: 'alicewilliams', email: 'alice@example.com', plainPassword: 'password123', role: 'user' }
];

async function fixDemoUsers() {
  try {
    console.log('Updating demo users with usernames and hashed passwords...');

    for (const user of demoUsers) {
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(user.plainPassword, saltRounds);

      // Update the user
      await pool.query(
        'UPDATE users SET username = $1, password = $2 WHERE id = $3',
        [user.username, hashedPassword, user.id]
      );

      console.log(`✅ Updated ${user.name}: username="${user.username}", password hashed`);
    }

    console.log('\n🎉 All demo users updated successfully!');
    console.log('\n📋 Login Credentials:');
    console.log('John Doe (Admin):');
    console.log('  Username: johndoe');
    console.log('  Email: john@example.com');
    console.log('  Password: password123');
    console.log('\nJane Smith (User):');
    console.log('  Username: janesmith');
    console.log('  Email: jane@example.com');
    console.log('  Password: password123');
    console.log('\nBob Johnson (User):');
    console.log('  Username: bobjohnson');
    console.log('  Email: bob@example.com');
    console.log('  Password: password123');
    console.log('\nAlice Williams (User):');
    console.log('  Username: alicewilliams');
    console.log('  Email: alice@example.com');
    console.log('  Password: password123');

  } catch (error) {
    console.error('Error updating demo users:', error);
  } finally {
    await pool.end();
  }
}

fixDemoUsers();
