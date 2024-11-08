const body = () => {
    let array, win, count, gameover;

    function createArray() {
        array = [[null, null, null], [null, null, null], [null, null, null]];
        return array;
    }

    function tick(a, b, checksum) {
        array[a][b] = checksum;
    }

    function check(array_to_check, checksum) {
        win = null;

        if (
            array_to_check[0][0] === checksum && array_to_check[0][1] === checksum && array_to_check[0][2] === checksum ||
            array_to_check[1][0] === checksum && array_to_check[1][1] === checksum && array_to_check[1][2] === checksum ||
            array_to_check[2][0] === checksum && array_to_check[2][1] === checksum && array_to_check[2][2] === checksum ||
            array_to_check[0][0] === checksum && array_to_check[1][0] === checksum && array_to_check[2][0] === checksum ||
            array_to_check[0][1] === checksum && array_to_check[1][1] === checksum && array_to_check[2][1] === checksum ||
            array_to_check[0][2] === checksum && array_to_check[1][2] === checksum && array_to_check[2][2] === checksum ||
            array_to_check[0][0] === checksum && array_to_check[1][1] === checksum && array_to_check[2][2] === checksum ||
            array_to_check[2][0] === checksum && array_to_check[1][1] === checksum && array_to_check[0][2] === checksum
        ) {
            win = true;
        }
    }
    function listen() {
        createArray();
        count = 0;
        gameover = false;

        const box = document.querySelectorAll(".box");
        box.forEach((boxElement) => {
            boxElement.addEventListener("click", (event) => {
                if (gameover) return;

                const id = event.target.id;
                const num = id.split("");
                const a = parseInt(num[0], 10);
                const b = parseInt(num[1], 10);

                let checksum = count === 0 ? 1 : 0;
                tick(a, b, checksum);
                check(array, checksum);

                boxElement.textContent = checksum === 1 ? "X" : "O";
                if (win === true) {
                    gameover = true;
                    alert(checksum === 1 ? "Player 1 (X) wins!" : "Player 2 (O) wins!");
                }

                count = 1 - count;
            }, { once: true });
        });
    }

    listen();
};

body();
