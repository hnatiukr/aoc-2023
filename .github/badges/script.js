import pfs from 'fs/promises';

const totalDays = 25;
const dayDirectoryPath = './day';
const badgesFilePath = '.github/badges/2023.json';

try {
    const dayDirectories = await pfs.readdir(dayDirectoryPath, { withFileTypes: true });
    const subdirectories = dayDirectories.filter((entry) => entry.isDirectory());
    const count = subdirectories.length;

    const badgesData = await pfs.readFile(badgesFilePath, 'utf8');
    const badgesJson = JSON.parse(badgesData);

    badgesJson.message = `${count}/${totalDays}`;

    await pfs.writeFile(badgesFilePath, JSON.stringify(badgesJson, null, 2), 'utf8');

    console.log(`> Solved days: ${count}`);
} catch (error) {
    console.error(`Error: ${error}`);
}
