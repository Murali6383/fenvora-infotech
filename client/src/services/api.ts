export async function submitForm(path: string, values: Record<string, string | File>, startedAt: number) {
  const fd = new FormData();
  Object.entries(values).forEach(([k, v]) => fd.append(k, v));
  fd.append('t', String(startedAt));
  let res: Response;
  try { res = await fetch(`/api/${path}`, { method: 'POST', body: fd }); } catch { throw new Error('Network error. Please check your connection.'); }
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) throw new Error(data.message || 'Submission failed. Please try again.');
}
