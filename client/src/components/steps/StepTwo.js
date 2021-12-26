import React, {useState} from 'react';
import '../../App.css'

const StepTwo = ({arrayNumbers, setArrayNumbers}) => {
    const [search, setSearch] = useState('')

    const asc = () => setArrayNumbers([...arrayNumbers.sort((a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    })])

    const desc = () => setArrayNumbers([...arrayNumbers.sort((a, b) => b - a)])


    const getFind = () => {
        const isFind = arrayNumbers.find((item) => item === Number(search))
        if (isFind) {
            return <div>{isFind}</div>
        }
        return <div>не найдено</div>
    }


    return (
        <div className="step">
            <div className="confirmation">
                <div className="confirmation__search">
                    <input
                        className="confirmation__search__input"
                        placeholder='Введите число'
                        value={search} onChange={event => setSearch(event.target.value)} type="text"/>
                    <button type='button' className="confirmation__search__button">Найти</button>
                </div>
                <div
                    className="confirmation__search"
                >
                    <button
                        type='button'
                        onClick={asc}
                        className="confirmation__search__button"
                    >По возрастанию
                    </button>
                    <button
                        type='button'
                        onClick={desc}
                        className="confirmation__search__button"
                    >По убыванию
                    </button>
                </div>
                <div>
                    {search.length > 0
                        ? getFind()
                        : arrayNumbers.map((item, index) => <div key={index}>{item}</div>)
                    }

                </div>
            </div>
        </div>
    );


};

export default StepTwo;