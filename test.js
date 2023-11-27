import fs from 'fs/promises';

// 파일 경로
const filePath = 'flag.txt';

// 파일을 읽어오는 함수
async function readFile() {
    try {
        // 파일 읽기
        const data = await fs.readFile(filePath, 'utf8');

        // 파일 내용 출력
        console.log('파일 내용:', data);
    } catch (err) {
        console.error('파일을 읽는 도중 오류가 발생했습니다.', err);
    }
}

// 함수 호출
readFile();
