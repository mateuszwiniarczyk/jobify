import Badge from 'components/Badge';

const OfferSkills = ({ skills }) => (
  <>
    <h3 className="text-lg font-semibold mt-7">Must have</h3>
    <div className="flex flex-wrap items-center mt-3 gap-3">
      {skills.map((skill) => (
        <Badge label={skill} size="sm" key={skill} />
      ))}
    </div>
  </>
);

export default OfferSkills;
