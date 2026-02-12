async function loadMarkdown() {
  const el = document.getElementById("md");

  try {
    const res = await fetch("./content.md", { cache: "no-store" });
    if (!res.ok) throw new Error("content.md not found");

    const md = await res.text();

    // Convert Markdown -> HTML
    el.innerHTML = marked.parse(md);
  } catch (err) {
    el.innerHTML = `
      <h1>לא הצלחתי לטעון את content.md</h1>
      <p>בדקי שהקובץ קיים בריפו באותו נתיב, ושמו בדיוק <code>content.md</code>.</p>
    `;
  }
}

loadMarkdown();
