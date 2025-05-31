export default function UserInput({ onChange, userInput}) {
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
                                onChange('inputIdentifier', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input
                            type="number"
                            required
                            value={userInput.annualInvestment}
                            onChange={(event) =>
                                onChange('annualInestment', event.target.value)}
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
                                onChange('expectedReturn', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Duration</label>
                        <input
                            type="number"
                            required
                            value={userInput.duration}
                            onChange={(event) =>
                                onChange('duration', event.target.value)}
                        />
                    </p>

                </div>
            </section>
        </div>
    )
}