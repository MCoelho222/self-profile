// Date shown beside a timeline node, on one line. Ranges are compacted
// ("2024 - Present" -> "2024–Present") to fit the shared date column.
const EntryDate = ({ value }: { value: string }) => {
  const [start, end] = value.split(/\s*[-–]\s*/);
  return <span className="entry-date">{end ? `${start}–${end}` : start}</span>;
};

export default EntryDate;
