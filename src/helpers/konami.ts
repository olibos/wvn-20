export const konami = (cb:()=>void) => {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let index = 0;
    function handler(event: KeyboardEvent){
        if (event.key !== code[index]) {
            index = 0;
            return;
        };

        index++;
        if (index === code.length) {
            document.removeEventListener('keydown', handler);
            cb();
        }
    }

    document.addEventListener('keydown', handler);
};