export default function DescriptionBmi() {
    return (
        <div className="desBmi">
            <div className="ageMuscle">
                <div className="age">
                    <div className="imgTitle">
                        <a href="#"><img src="./src/assets/img/ageAvatar.svg" alt="Age Avatar" /></a>
                        <h3>Age</h3>
                    </div>
                    <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
                </div>
                <div className="muscle">
                    <div className="imgTitle">
                        <a href="#"><img src="./src/assets/img/muscleAvatar.svg" alt="Gender Avatar" /></a>
                        <h3>Muscle</h3>
                    </div>
                    <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
                </div>
            </div>
            <div className="pregRace">
                <div className="pregnancy">
                    <div className="imgTitle">
                        <a href="#"><img src="./src/assets/img/pregnancyAvatar.svg" alt="Gender Avatar" /></a>
                        <h3>Pregnancy</h3>
                    </div>
                    <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
                </div>
                <div className="race">
                    <div className="imgTitle">
                        <a href="#"><img src="./src/assets/img/raceAvatar.svg" alt="Gender Avatar" /></a>
                        <h3>Race</h3>
                    </div>
                    <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
                </div>
            </div>
        </div>
    )
}