import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Jogo = ({ palavra }) => {
const [alteraLetra, setAlteraLetra] = useState();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setAlteraLetra(event);
        let valor = value;
        event.target.value = valor.toUpperCase();
        if (value.length === 1) {
            const currentIndex = parseInt(id.slice(1), 10);
            const nextId = `a${currentIndex + 1}`;
            const nextInput = document.querySelector(`input[id="${nextId}"]`);
            if (nextInput) {
                nextInput.focus();
            }


        }
    };

    useEffect(() => {
        const inputs = document.querySelectorAll('input[id^="a"]');
        const values = [];

        inputs.forEach(input => {
            const id = input.id;
            if (/^a[1-6]$/.test(id)) {
                values.push(input.value);
            }
        });
        const allFilled = values.every(value => value.trim() !== '');
        if(allFilled){

            palavra(values);
        }
        console.log("Palavra", values)

    }, [alteraLetra])

    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            const { id, value } = event.target;
            if (value) {
                event.target.value = "";
            } else {
                const currentIndex = parseInt(id.slice(1), 10);
                const lastId = `a${currentIndex - 1}`;
                if (currentIndex - 1 !== 0) {
                    const lastInput = document.querySelector(`input[id="${lastId}"]`);
                    lastInput.value = "";
                    lastInput.focus();
                }
            }
            setAlteraLetra(event);
        }
    }



    return (
        <div className={styles.gameBody}>
            <div className={styles.gameList}>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='a1' onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a2' onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a3' onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a4' onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a5' onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='b1' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b2' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b3' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b4' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b5' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='c1' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c2' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c3' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c4' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c5' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='d1' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d2' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d3' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d4' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d5' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='e1' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e2' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e3' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e4' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e5' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='f1' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f2' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f3' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f4' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f5' disabled onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
