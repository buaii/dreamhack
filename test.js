import fs from 'fs';

// 파일을 읽어오는 예제
fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
