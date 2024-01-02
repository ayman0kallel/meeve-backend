import db from '../config/db.js'; // Import the database connection

export const createSportTable = async () => {
  try {
    const createSportTableQuery = `
      CREATE TABLE IF NOT EXISTS sports (
        id_sport int NOT NULL AUTO_INCREMENT,
        name varchar(255) DEFAULT NULL,
        image varchar(255) DEFAULT NULL,
        PRIMARY KEY (id_sport)
      )
    `;

    // const preFillDataQuery = `
    //   INSERT INTO sports (name, image) VALUES
    //     ('BOXE', 'https://images.pexels.com/photos/290416/pexels-photo-290416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    //     ('YOGA', 'https://images.pexels.com/photos/7590913/pexels-photo-7590913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    //     ('ESCALADE', 'https://jamboard.google.com/d/1Nlv9mjxKlIl6uA6BLXoVtGxu-a5Z-s8Kz4WGFT1E-xc/viewer?pli=1&f=0')
    //   ON DUPLICATE KEY UPDATE id_sport = id_sport
    // `;

    // await db.execute(createSportTableQuery);
    const [results] = await db.execute(createSportTableQuery);

    console.log('Sport table created:', results);
  } catch (error) {
    console.error('Error creating sport table:', error);
  }
};