import { useState, useEffect } from 'react';

function Dday() {
    const graduationDate = new Date('2026-03-01');
    const [dDay, setDday] = useState('');

    useEffect(() => {
        const today = new Date();
        const gap = graduationDate.getTime() - today.getTime();
        const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

        if (result > 0) {
            setDday(`D-${result}`);
        } else if (result < 0) {
            setDday(`D+${Math.abs(result)}`);
        } else {
            setDday('D-Day');
        }
    }, []);

    return (
        <>
            <h1>🎓 졸업까지</h1>
            <h2>{dDay}</h2>
        </>
    );
}

export default Dday;
