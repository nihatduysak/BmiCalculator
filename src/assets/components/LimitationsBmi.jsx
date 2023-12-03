export default function LimitationsBmi() {
    return (
        <div className="limbmi">
            <div className="limDes">
                <h2>Limitations of BMI</h2>
                <p className="limDescription">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>
            <div className="gender">
                <div className="imgTitle">
                    <a href="#"><img src="./src/assets/img/genderAvatar.svg" alt="Gender Avatar" /></a>
                    <h3>Gender</h3>
                </div>
                <p>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </div>
        </div>
    )
}