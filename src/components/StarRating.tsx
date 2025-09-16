type Props = { value: number; onChange: (val: number) => void };

export default function StarRating({ value, onChange }: Props) {
  return (
    <div className="flex gap-1" aria-label={`Puntaje ${value} de 5`}>
      {[1,2,3,4,5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`text-xl ${n <= value ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-400 transition-colors`}
          aria-pressed={n <= value}
          aria-label={`${n} estrella${n>1?"s":""}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}