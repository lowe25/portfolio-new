const Tech = ({ techImg, techAlt, tech }) => {
  return (
    <>
      <li className="landing__tech">
        <img
          src={`./img/${techImg}`}
          className="landing__tech-logo"
          alt={techAlt}
        />
        <p className="landing__tech-txt landing__tech-txt--lang">{tech}</p>
      </li>
    </>
  )
}

export default Tech;
