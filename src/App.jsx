import BmiCalculator from './assets/components/BmiCalculator.jsx'
import BmiResult from './assets/components/BmiResult.jsx'
import Regtangle7 from './assets/components/Regtangle7.jsx'
import LimitationsBmi from './assets/components/LimitationsBmi.jsx'
import DescriptionBmi from './assets/components/DescriptionBmi.jsx'

export default function App() {

  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="header">
            <a href="#"><img src="./src/assets/img/headIcon.svg" alt="Head Icon" /></a>
            <h1>Body Mass Index Calculator</h1>
            <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
          </div>
          <div className="headerCalc">
            <BmiCalculator />
          </div>
        </div>
        <BmiResult />
        <Regtangle7 />
        <LimitationsBmi />
        <DescriptionBmi />
      </div>
    </>
  )
}