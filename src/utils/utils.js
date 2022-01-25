export function formatDate(date) {
  const formatter = new Intl.DateTimeFormat(navigator.language || "eu", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });

  const dateObj = new Date(date);
  return formatter.format(dateObj);
}

export function formatEditDate(date) {
  const d = new Date(date);
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const mm = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  const yyyy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const newDate = `${yyyy}-${mm}-${dd}`;

  return newDate;
}

export function getDueDate(date, terms) {
  const futureTime = terms * 24 * 60 * 60 * 1000;

  const dateTime = new Date(date).getTime();

  const newDate = futureTime + dateTime;

  const dueDate = formatDate(newDate);

  return dueDate;
}
