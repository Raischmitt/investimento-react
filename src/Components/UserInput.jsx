import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue

            }
        });
    }

    return (
        <div>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>initial Investment</label>
                        <input
                            type="number"
                            required
                            value={userInput.initialInvestment}
                            onChange={(event) =>
                                handleChange('inputIdentifier', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input
                            type="number"
                            required
                            value={userInput.annualInvestment}
                            onChange={(event) =>
                                handleChange('annualInestment', event.target.value)}
                        />
                    </p>

                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input
                            type="number"
                            required
                            value={userInput.expectedReturn}
                            onChange={(event) =>
                                handleChange('expectedReturn', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Duration</label>
                        <input
                            type="number"
                            required
                            value={userInput.duration}
                            onChange={(event) =>
                                handleChange('duration', event.target.value)}
                        />
                    </p>

                </div>
            </section>
        </div>
    )
}