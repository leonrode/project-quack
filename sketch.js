function setup() {
    const SIZE = 800;
    createCanvas(SIZE, SIZE);
    background(0);

    const NUM_TILES = 8;

    for (let i = 0; i < NUM_TILES; i++) {
        for (let j = 0; j < NUM_TILES; j++) {
            const x = (SIZE / NUM_TILES) * i;
            const y = (SIZE / NUM_TILES) * j;

            fill((i + j) % 2 * 255);
            square(x, y, SIZE / NUM_TILES);
        }
    }
}

function draw() {}