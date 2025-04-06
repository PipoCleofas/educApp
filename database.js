import SQLite from "react-native-sqlite-storage";

let db = null;

// ✅ Initialize the database when needed
export const initDatabase = () => {
  if (!db) {
    db = SQLite.openDatabase(
      {
        name: "quiz.db",
        location: "Shared",
      },
      () => {

        console.log("✅ Database opened successfully");
        createTable(); // Ensure the table is created
      },
      (error) => {
        console.error("❌ Database error:", error);
        db = null; // Explicitly set to null if it fails
      }
    );
  }
  return db;
};


// ✅ Ensure database is initialized before executing SQL commands
const isDatabaseReady = () => {
  if (!db) {
    console.log("🔍 Database Instance:", db);
    console.error("❌ Database instance is null. Initializing database...");
    return false;
    initDatabase();
  }
  return true;
};

// ✅ Create the "achievements" table
export const createTable = () => {
  if (!isDatabaseReady()) return;

  db.transaction(
    (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS achievements (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          achievement TEXT NOT NULL
        );`,
        [],
        () => console.log("✅ Achievements table created successfully"),
        (_, error) => console.error("❌ Error creating table:", error)
      );
    }
  );
};

// ✅ Add an achievement
export const addAchievement = (achievement) => {
  if (!isDatabaseReady()) return;
  if (!achievement || typeof achievement !== "string") {
    console.error("❌ Invalid achievement value:", achievement);
    return;
  }

  db.transaction(
    (tx) => {
      tx.executeSql(
        `INSERT INTO achievements (achievement) VALUES (?);`,
        [achievement.trim()], // Prevent accidental empty values
        (_, result) => console.log(`✅ Achievement added with ID: ${result.insertId}`),
        (_, error) => console.error("❌ Error inserting achievement:", error)
      );
    }
  );
};

// ✅ Retrieve all achievements
export const getAchievements = (callback) => {
  if (!isDatabaseReady()) return;
  if (typeof callback !== "function") {
    console.error("❌ Invalid callback function provided.");
    return;
  }

  db.transaction(
    (tx) => {
      tx.executeSql(
        `SELECT * FROM achievements;`,
        [],
        (_, { rows }) => {
          const achievements = rows?._array ?? [];
          console.log("✅ Retrieved achievements:", achievements);
          callback(achievements);
        },
        (_, error) => {
          console.error("❌ Error fetching achievements:", error);
          callback([]); // Return an empty array on failure
        }
      );
    }
  );
};

export default initDatabase;
