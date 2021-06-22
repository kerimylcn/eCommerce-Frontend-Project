import { Knowledge, Method, Focus } from "../../../assets/icons/SVG.js";
import "./benefits.scss";

//720p left

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__item">
        <Focus />
        <div>
          <h3>FOCUS</h3>
          <span>
            Our unwavering focus on superior service delivery and building next
            generation competencies
          </span>
        </div>
      </div>
      <div className="benefits__item">
        <Method />
        <div>
          <h3>METHOD</h3>
          <span>
            A standardized methodology designed to deliver measurable business
            results and predictable costs
          </span>
        </div>
      </div>
      <div className="benefits__item">
        <Knowledge />
        <div>
          <h3>KNOWLEDGE</h3>
          <span>
            A highly skilled, proactive workforce that reliably improves each
            cleint's ROI while mitigating their business risk
          </span>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
