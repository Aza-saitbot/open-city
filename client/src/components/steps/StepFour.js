import React from 'react';
import '../../App.css'

const StepFour = ({arrayNumbers}) => (
    <div className="step">
        <div className="StepFour">
            <div className="StepFour__list">
                {arrayNumbers.map(i=>
                    <div
                        className='StepFour__list__item'
                        key={i}>{i}</div>
                )}
            </div>
            <div>
                Итого: {arrayNumbers.reduce(function(sum, current) {
                return sum + current
            },0)}
            </div>
        </div>
    </div>
)

export default StepFour;