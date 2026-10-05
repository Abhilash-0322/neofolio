import { experience } from "@/lib/data";

export function ExperienceTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-navy/15 bg-white shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-navy/10 bg-navy text-cream">
            <th className="px-4 py-3 font-semibold sm:px-6">Role</th>
            <th className="px-4 py-3 font-semibold sm:px-6">Organization</th>
            <th className="hidden px-4 py-3 font-semibold md:table-cell sm:px-6">
              Type
            </th>
            <th className="px-4 py-3 font-semibold sm:px-6">Period</th>
            <th className="px-4 py-3 font-semibold sm:px-6">Focus</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((row, i) => (
            <tr
              key={row.role + row.org}
              className={i % 2 === 0 ? "bg-cream/50" : "bg-white"}
            >
              <td className="align-top px-4 py-4 font-medium text-navy sm:px-6">
                {row.role}
              </td>
              <td className="align-top px-4 py-4 text-navy/90 sm:px-6">{row.org}</td>
              <td className="hidden align-top px-4 py-4 text-navy/70 md:table-cell sm:px-6">
                {row.type}
              </td>
              <td className="align-top whitespace-nowrap px-4 py-4 text-navy/80 sm:px-6">
                {row.period}
              </td>
              <td className="align-top px-4 py-4 text-navy/75 sm:px-6">
                <ul className="list-disc space-y-1 pl-4">
                  {row.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
