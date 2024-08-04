import React from 'react';
import styles from './styles.module.css';

export const KeyBoard = ({ handleSubmit }) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className={styles.letras} onKeyDown={handleKeyDown} tabIndex="0">
            <div className={styles.linhaLetras}>
                <div>Q</div>
                <div>W</div>
                <div>E</div>
                <div>R</div>
                <div>T</div>
                <div>Y</div>
                <div>U</div>
                <div>I</div>
                <div>O</div>
                <div>P</div>
            </div>
            <div className={styles.linhaLetras}>
                <div>A</div>
                <div>S</div>
                <div>D</div>
                <div>F</div>
                <div>G</div>
                <div>H</div>
                <div>J</div>
                <div>K</div>
                <div>L</div>
                <div>Ç</div>
            </div>
            <div className={styles.linhaLetras}>
                <div>Z</div>
                <div>X</div>
                <div>C</div>
                <div>V</div>
                <div>B</div>
                <div>N</div>
                <div>M</div>
                <div
                    className={styles.submit}
                    onClick={handleSubmit}
                    role="button"
                    tabIndex="0"
                >
                    Enter
                </div>
            </div>
        </div>
    );
};
