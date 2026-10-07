const stats = [
  {
    value: "112",
    label: "UNITS",
  },
  {
    value: "1.4",
    label: "ACRES TOTAL AREA",
  },
  {
    value: "3",
    label: "BHK",
  },
  {
    value: "East & West",
    label: "FACING",
  },
  {
    value: "14",
    label: "FLOORS",
  },
  {
    value: "1150-1266",
    label: "SQ.FT",
  },
];

function Stats() {
  return (
    <section className="stats-section">

      <div className="page-container stats-grid">

        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>

            <div className="stat-value">
              {stat.value}
            </div>

            <div className="stat-label">
              {stat.label}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats; 