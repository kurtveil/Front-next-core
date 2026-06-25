
export interface UserRank {
  id: string;
  name: string;
  accuracy: number; // 0-100
  attempts?: number;
}

function Stars({ accuracy }: { accuracy: number }) {
  // Map accuracy to 0-5 stars
  const stars = Math.round((accuracy / 100) * 5);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < stars ? "text-amber-400" : "text-slate-600"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.497 2.72c-.784.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.506 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
}

export default function UserRanking({ users }: { users?: UserRank[] }) {
  const sample: UserRank[] = [
    { id: "1", name: "María", accuracy: 92, attempts: 120 },
    { id: "2", name: "Carlos", accuracy: 86, attempts: 90 },
    { id: "3", name: "Lucía", accuracy: 78, attempts: 45 },
    { id: "4", name: "Jorge", accuracy: 65, attempts: 30 },
    { id: "5", name: "Ana", accuracy: 54, attempts: 20 },
  ];

  const list = (users && users.length > 0 ? users : sample).slice().sort((a, b) => b.accuracy - a.accuracy);

  return (
    <div className="rounded-3xl bg-slate-900 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Ranking</p>
          <h4 className="text-lg font-semibold text-white">Usuarios por precisión</h4>
        </div>
        <div className="text-sm text-slate-400">Top {list.length}</div>
      </div>

      <ul className="space-y-3">
        {list.map((u, idx) => (
          <li key={u.id} className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold">{idx + 1}</div>
              <div>
                <div className="text-sm font-medium text-white">{u.name}</div>
                <div className="text-xs text-slate-400">{u.attempts ?? 0} intentos</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-semibold text-white">{u.accuracy}%</div>
              <Stars accuracy={u.accuracy} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
