export default function WorkExperience({ compName, date, respoList }) {
  return (
    <>
      <div className="landing__exp-box">
        <div className="landing__job">
          <span className="landing__job-type">
            {compName}
          </span>
          <span className="landing__job-date">{date}</span>
        </div>
        <div className="landing__job-desc">
          <ul className="landing__job-list">
            {respoList.map((item, index) => (
              <li className="landing__job-item" key={index}>
                {item}
              </li>
            ))}

          </ul>
        </div>
      </div>
    </>
  );
}