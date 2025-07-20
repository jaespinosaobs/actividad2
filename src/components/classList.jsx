import classes from '../data/spells-by-class.json';

function ClassList ({ onSelect }) {
    const classesData = Object.entries(classes).map(([name, spells]) => {return {name, spells}});
    return (
        <div className="row g-3">
            {classesData.map((cls) => (
                <div key={cls.name} className="col-md-4">
                    <div
                        className="card h-100 shadow-sm clickable"
                        onClick={() => {onSelect(cls)}}
                    >
                        <div className="card-body text-center">
                            <h5 className="card-title">{cls.name.toUpperCase()}</h5>
                            <img src={`./src/assets/classes/${cls.name}.png`} alt={cls.name} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClassList;