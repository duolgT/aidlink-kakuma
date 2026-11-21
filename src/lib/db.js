
import { openDB } from "idb";

const DATABASE_NAME = "aidlink-kakuma-db";
const DATABASE_VERSION = 1;
const REPORTS_STORE = "reports";

const dbPromise = openDB(
  DATABASE_NAME,
  DATABASE_VERSION,
  {
    upgrade(db) {
      if (!db.objectStoreNames.contains(REPORTS_STORE)) {
        const store = db.createObjectStore(
          REPORTS_STORE,
          { keyPath: "id" }
        );

        store.createIndex("createdAt", "createdAt");
      }
    },
  }
);

export async function saveReport(reportData) {
  const db = await dbPromise;

  const report = {
    id: crypto.randomUUID(),
    ...reportData,
    status: "local-draft",
    createdAt: new Date().toISOString(),
  };

  await db.put(REPORTS_STORE, report);

  return report;
}

export async function getReports() {
  const db = await dbPromise;

  const reports = await db.getAll(REPORTS_STORE);

  return reports.sort(
    (a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
  );
}

export async function deleteReport(id) {
  const db = await dbPromise;

  await db.delete(REPORTS_STORE, id);
}
