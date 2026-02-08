import "./Mission.css"

const Mission = () => {
  return (
    <div className="mission">
        <div className="mcard">
                <div className="mtop">
                    <h1>Mission</h1>
                    <img src="/assets/images/Icon.png" alt="any" />
                </div>
                <div className="mbuttom">
                    <p>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
                </div>
        </div>

        <div className="mcard">
                <div className="mtop">
                    <h1>Vision</h1>
                    <img src="/assets/images/Icon(1).png" alt="any" height="60px"/>
                </div>
                <div className="mbuttom">
                    <p>Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.</p>
                </div>
        </div>
    </div>
  )
}

export default Mission