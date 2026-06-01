// Bài 1:
function createCharacter() {
    const characters = [
        { name: 'Đấu sĩ', level: 10, health: 700 },
        { name: 'Xạ thủ', level: 15, health: 300 },
        { name: 'Sát thủ', level: 20, health: 400 },
    ];

    //  (attribute => ({})) : Nếu chỉ có (attribute => {}) sẽ sai vì {} sẽ được hiểu là 1 khối lệnh chứ không phải là
    //  1 object. Dùng () bọc ngoài để nhận diện được đây là object và trả về giá trị.
    const charactersPowerUp = characters.map(attribute => ({
        name: attribute.name.toUpperCase(),
        level: attribute.level * 2,
        health: attribute.health * 3
    }));

    // Vì có giá trị trả về => có thể dùng return thay thế
    // const charactersPowerUp = characters.map(attribute => {
    //     return {
    //         name: attribute.name.toUpperCase,
    //         level: attribute.level * 2,
    //         health: attribute.health * 3
    //     }
    // });

    const possibleWinners = charactersPowerUp.filter(attribute => attribute.health > 1000);
    console.log(possibleWinners);
}
createCharacter();

//-----------------------Nháp-----------------------

// ---------------: Chưa đúng yêu cầu và kết qủa in ra cũng không quá đúng
// => Tìm cách truyền 1 mảng chứa các object vào làm tham số của hàm
// function createCharacter(typeCharacter, levelCurrent, healthCurrent) {
//     const characters = [
//         {name: typeCharacter, level: levelCurrent, health: healthCurrent}
//     ];

//     const charactersPowerUp = characters.map(attribute => ({
//         name: attribute.name.toUpperCase(),
//         level: attribute.level * 2,
//         health: attribute.health * 3
//     }));

//     const possibleWinners = charactersPowerUp.filter(attribute => attribute.health > 1000);
//     console.log(possibleWinners);
// }
// createCharacter('Đấu sĩ', 10, 700);
// createCharacter('Xạ thủ', 15, 300);
// createCharacter('Sát thủ', 20, 400);

//-------------------
// function createCharacter(characters) {
////    Lúc này characters = [{ name: 'Đấu sĩ', level: 10, health: 700 },{ name: 'Xạ thủ', level: 15, health: 300 },
////    { name: 'Sát thủ', level: 20, health: 400 }] ~ với khởi tạo mảng characters trong hàm
//     const charactersPowerUp = characters.map(attribute => ({
//         name: attribute.name.toUpperCase(),
//         level: attribute.level * 2,
//         health: attribute.health * 3
//     }));

//     const possibleWinners = charactersPowerUp.filter(attribute => attribute.health > 1000);
//     console.log(possibleWinners);
// }
// createCharacter([
//     { name: 'Đấu sĩ', level: 10, health: 700 },
//     { name: 'Xạ thủ', level: 15, health: 300 },
//     { name: 'Sát thủ', level: 20, health: 400 }
// ]);

//-------------------
// const characters = [
//     { name: 'Đấu sĩ', level: 10, health: 700 },
//     { name: 'Xạ thủ', level: 15, health: 300 },
//     { name: 'Sát thủ', level: 20, health: 400 },
// ];

// function createCharacter(characters) {
//     const charactersPowerUp = characters.map(attribute => ({
//         name: attribute.name.toUpperCase(),
//         level: attribute.level *2,
//         health: attribute.health * 3
//     }));

//     const possibleWinners = charactersPowerUp.filter(attribute => attribute.health > 1000);
//     console.log(possibleWinners);
// }
// createCharacter(characters);

// Bài 2:
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 1100 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 900 },
    { name: "David", score: 600 },
    { name: "Sonic", score: 700 },
    { name: "Mario", score: 980 },
    { name: "Mario", score: 980 }
];

function printLeaderboard(players) {
    const softPlayer = players.sort((a, b) => b.score - a.score);
    const medals = ["🥇", "🥈", "🥉"];
    for (let i = 0; i < softPlayer.length; i++) {
        const player = softPlayer[i];
        const medal = medals[i] || " "; // || xử lý trường hợp softPlayer.length > medals.length thì medals[i] = undefined
        console.log(`${medal} ${player.name} - ${player.score} pts`);
        // Nếu cùng số điểm thì đều hiển thị huy chương
        //...
    }
}
printLeaderboard(players);