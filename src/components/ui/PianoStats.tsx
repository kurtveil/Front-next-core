import UserRanking, { UserRank } from "@/src/components/ui/UserRanking";

interface NoteStat {
  name: string;
  attempts: number;
  correct: number;
}

interface PianoStatsProps {
  targetNote: string;
  totalAttempts: number;
  correctAttempts: number;
  noteStats: Record<string, NoteStat>;
  history: Array<{ note: string; correct: boolean }>;
  userRankings?: UserRank[];
}

export function PianoStats({
  targetNote,
  totalAttempts,
  correctAttempts,
  noteStats,
  history,
  userRankings,
}: PianoStatsProps) {
  const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
  const mostPlayed = Object.values(noteStats)
    .filter((note) => note.attempts > 0)
    .sort((a, b) => b.attempts - a.attempts)
    .slice(0, 5);

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-3xl border border-gray-700 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/20">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase text-slate-400">Estadísticas del piano</p>
            <h2 className="text-2xl font-semibold text-white">Aciertos y progreso</h2>
          </div>
          <div className="rounded-3xl bg-slate-900 px-4 py-2 text-right text-sm text-slate-300">
            <p className="font-semibold text-white">{accuracy}%</p>
            <p className="text-xs text-slate-500">Precisión</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-900 p-4 text-center">
            <p className="text-sm text-slate-400">Intentos</p>
            <p className="mt-2 text-3xl font-semibold text-white">{totalAttempts}</p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-4 text-center">
            <p className="text-sm text-slate-400">Aciertos</p>
            <p className="mt-2 text-3xl font-semibold text-white">{correctAttempts}</p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-4 text-center">
            <p className="text-sm text-slate-400">Nota objetivo</p>
            <p className="mt-2 text-3xl font-semibold text-white">{targetNote}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-3xl bg-slate-900 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-slate-400">Aciertos por nota</p>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-xs uppercase text-slate-300">
                Top {mostPlayed.length}
              </span>
            </div>

            {mostPlayed.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">Toca algunas notas para ver la gráfica.</p>
            ) : (
              <div className="mt-4 space-y-3">
                {mostPlayed.map((note) => {
                  const percentage = note.attempts === 0 ? 0 : Math.round((note.correct / note.attempts) * 100);
                  return (
                    <div key={note.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{note.name}</span>
                        <span>{percentage}%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${percentage}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <aside className="rounded-3xl border border-gray-700 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/20">
        <div className="mb-4">
          <p className="text-sm uppercase text-slate-400">Actividad reciente</p>
          <h3 className="text-xl font-semibold text-white">Últimos intentos</h3>
        </div>

        <div className="space-y-3">
          {history.length === 0 ? (
            <p className="rounded-3xl bg-slate-900 p-4 text-sm text-slate-400">
              Aún no hay registros. Toca una nota para empezar.
            </p>
          ) : (
            history.slice(0, 6).map((entry, index) => (
              <div key={`${entry.note}-${index}`} className="flex items-center justify-between rounded-3xl bg-slate-900 px-4 py-3 text-sm text-slate-100">
                <div>
                  <p className="font-medium">{entry.note}</p>
                  <p className="text-xs text-slate-500">{entry.correct ? "Correcto" : "Incorrecto"}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${entry.correct ? "bg-emerald-500 text-slate-950" : "bg-rose-500 text-white"}`}>
                  {entry.correct ? "OK" : "X"}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 rounded-3xl bg-slate-900 p-4 text-sm text-slate-400">
          <p className="font-medium text-white">Consejo</p>
          <p className="mt-2 leading-relaxed">
            Practica el objetivo actual y utiliza la gráfica para ver qué notas necesitas reforzar.
          </p>
        </div>
        <div className="mt-6">
          <UserRanking users={userRankings} />
        </div>
      </aside>
    </div>
  );
}
