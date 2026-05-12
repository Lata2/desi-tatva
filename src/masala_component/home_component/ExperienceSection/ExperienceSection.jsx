import './ExperienceSection.css';
import storyImg from '../../../image/desi_img1.png';
import { useCases } from '../home/homeData';

export default function ExperienceSection() {
  return (
    
    <section className="section">
      <div className="experience-grid">
        <div className="experience-copy">
          <p className="section-kicker">Product Use / Experience</p>
          <h2>बस <span>मिलाइए</span> और तैयार है <span>असली स्वाद</span> </h2>
          <p>
            Show the transformation clearly: powder to drink, mix to meal, and product to family experience.
          </p>

          <div className="use-list">
            {useCases.map((item) => (
              <div key={item} className="use-item">{item}</div>
            ))}
          </div>
        </div>

        <div className="experience-visual">
          <img src={storyImg} alt="Product use and lifestyle view" />
          <div className="experience-note">5 Ways to Use Chaas Masala</div>
        </div>
      </div>
    </section>
  );
}