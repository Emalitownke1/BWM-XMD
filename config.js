const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV2Y7qOBD9lZFfoQey4YDU0mSBdCDsYQmjeXBih5isOA4QrvrfR2m61Ve6y/TkyXLsU6eqTh1/A1lOSzIhNRh8AwWjF8RJs+R1QcAA6FUYEgbaACOOwAC0hjPSH06W2FpA7RzRfoh8TeMvcasPD0rk7tTtvMjh6Na9PoPXNigqP6HBbwBhF8I5Hxl2mYjDUJfu3GaaMFaEtb8S2cky3Drrrjj06PQZvDaIiDKaHYdFRFLCUDIh9QJR9jX6+UTYFdHE9EW11bpns1uSbhW7nss+iZT7dPFizEZrctfsZPhF+p51cJWtm2jciPKpuuwZubG4GKuo00FOsjTQbB5dtUTe2A/6JT1mBNuYZJzy+st192ads6A7Qy0VFWnc8YPIFAOtPMdVl3qyIDlnt48PaHcaLr9GPLVvUrzLxemqNYsMbyH2zjOMr1d3oeKL/wLhjrBCm9wWWfd74gv2oZX4/9SdGgU+ebPDwp2ecUgvZounuOySjUiECz107i9l4I61xPwq/aEEoWrL2/Ecrm42XAgpSRDOlpduMJn6XmuJU1eSr62o9j7pI16x37E8jhxOt87eOe4qbVH7eci9cX4+W3e9lclx/9q/l9XcP9XCAVf+DhL9PoLSotL34jyT+n6yhsWuSxLpVsyGmzA+rDUrOj6/ZRST2sZgILy2ASNHWnKGOM2zZk+UlTZA+LImASP8rbwAOdco008C67m2UzmKkZiZ5sHu8lyt1GGnOITnOjwOxYOiPoM2KFgekLIk+IWWPGf1lJQlOpISDP5+61STNCNpzsmYYjAAoiLDrqz2oSoqf5V/XiPES1QUf2aEgzYIWZ5OCRhwVpE2eLugGLqs6VAaGarW7/YVeairuqFqkmAK+shUmxTTR1CXpqTkKC3AQICyBLtdWRFe/2mDjNz4Qz9N1pLQBiFlJd9kVZHkCH+I6+MnCoK8yvi6zgKjWRAGBt3PbcI5zY5lk1mVIRZE9EKMJg8wCFFSktc2wORCA9LggTx92s+nO2+ln2WmxzNrjO902VQuyrPHEdQLkdqH4pMkEv9J7vnKEyKYPCkqxDKBPvR9CTTleIxuc+eXSgovZoc603x93XiTILgkih2Fe2s1erOBDwkQRvBHlX0UxFXh5jHJfoM7Kke1GRQlXrHZEZP7/XScZJZFp+b1O9yHtMDg26ddGjlu8OBqpxquKYKmW02cH9QwgPBHQWSoOQ04I3FM2B80C5pg751oYDDhiCYlGABjTHbZIjCHU8usoGpZmn3UjKMGPjv3MYkPpftkIV6mQr+10lvXWKFTQ1D0VVCRbCL1go203Va66KKLureffwICBsC2bsOysBMZU6eAgWCnXqueLo2whNZht97sQ2OuG852eyB9/35YzNxpVZC1fZt30iXqzMuFZtJtT3DrW2al3vXkixPt+txEeyjo+2BXBgPPoHc0E/tomOPeXc15eHOO2ypcWnXoBIHQGm+qVrwTL1hnqzSmd7ZBTseFZnGi+9vwMhPNi7jbV7kKzd7u1jm+e8SbRyXvbwN9n96H3kJK3qz2vRP/2bFP6Xdf299hvJv3L+Sl76RTn91nYRgvw3I8904aJ8vN3smKmrey0UzY+kcci6wzqsFrM9NFgniYsxQMQJn6CLRBgkqufY7uT9xAltsgrbWiWHPEPyYeaM03QjJ4/RcrNZw6lAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254704897825",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

