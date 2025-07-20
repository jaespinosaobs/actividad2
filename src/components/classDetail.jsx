import SpellList from './spellList';

function ClassDetail({ cls, onBack }) {
  return (
    <div>
      <button
        className="btn btn-outline-primary mb-3"
        onClick={onBack}
      >
        ← Back to Classes
      </button>

      <div className="card shadow">
        <div className="card-body">
          <img src={`./src/assets/classes/${cls.name}.png`} alt={cls.name} />
          <h2 className="card-title">{cls.name.toUpperCase()}</h2>

          <hr />

          <h4>Spells</h4>
          <SpellList spellIds={cls.spells} />
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;