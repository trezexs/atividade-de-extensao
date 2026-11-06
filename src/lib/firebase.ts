
export const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ??
    "AIzaSyB2v-qqPJViNd6LqoZ2boLP_G7yXGTeKj8",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ??
    "projetoextensao-9035d.firebaseapp.com",
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "projetoextensao-9035d",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ??
    "projetoextensao-9035d.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "562898647772",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ??
    "1:562898647772:web:4a24d5add5e3b905b19219",
  measurementId:
    import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? "G-EEEEXN6P66",
};

// Inicializa Google Analytics (gtag.js) no navegador usando o measurementId do Firebase
if (typeof window !== "undefined" && firebaseConfig.measurementId) {
  const scriptId = "firebase-gtag-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${firebaseConfig.measurementId}`;
    document.head.appendChild(script);

    const win = window as unknown as {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    win.dataLayer = win.dataLayer || [];
    win.gtag = function (...args: unknown[]) {
      win.dataLayer?.push(args);
    };
    win.gtag("js", new Date());
    win.gtag("config", firebaseConfig.measurementId);
  }
}

export type Feedback = {
  id: string;
  rating: number;
  reader_profile: string;
  comment: string | null;
  created_at: string;
};

export type NewFeedback = {
  rating: number;
  reader_profile: string;
  comment?: string;
};

const LOCAL_STORAGE_KEY = "ia_na_pratica_feedbacks";

/**
 * Grava a avaliação diretamente na coleção `feedback` do Cloud Firestore
 * (`projetoextensao-9035d`) via API oficial, com fallback local automático.
 */
export async function saveFeedback(
  payload: NewFeedback,
): Promise<{ ok: boolean; source: "firebase" | "local" }> {
  const createdAt = new Date().toISOString();
  const endpoint = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/feedback?key=${firebaseConfig.apiKey}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          rating: { integerValue: String(payload.rating) },
          reader_profile: { stringValue: payload.reader_profile },
          comment: payload.comment
            ? { stringValue: payload.comment }
            : { nullValue: null },
          created_at: { timestampValue: createdAt },
        },
      }),
    });

    if (response.ok) {
      return { ok: true, source: "firebase" };
    }
  } catch {
    // Em caso de modo offline ou regras fechadas no Firestore, salva localmente
  }

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const list: Feedback[] = raw ? JSON.parse(raw) : [];
    list.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      rating: payload.rating,
      reader_profile: payload.reader_profile,
      comment: payload.comment ?? null,
      created_at: createdAt,
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    return { ok: true, source: "local" };
  } catch {
    return { ok: false, source: "local" };
  }
}
