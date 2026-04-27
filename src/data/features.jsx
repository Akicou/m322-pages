function FeatureIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1d6fa4" strokeWidth="2">
      {children}
    </svg>
  );
}

export const features = [
  {
    id: "soap",
    title: "Strukturierte SOAP-Vorlagen",
    short:
      "Geprüfte Vorlagen für die häufigsten Konsultationsarten. Sie behalten die volle Kontrolle – keine KI, keine automatische Diagnose.",
    long: "Bauen Sie Ihre SOAP-Notizen aus geprüften Textbausteinen zusammen. Vorlagen für Hausarzt-Routinekonsultationen, Wundversorgung, Impfungen und mehr. Eigene Bausteine pro Arzt anlegbar. Volle Kontrolle: kein Modell, kein Cloud-Service interpretiert Ihre Patientendaten.",
    icon: (
      <FeatureIcon>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </FeatureIcon>
    ),
  },
  {
    id: "dsgvo",
    title: "DSGVO-konforme Datenspeicherung",
    short:
      "Alle Patientendaten verbleiben auf Servern in der Schweiz. Ende-zu-Ende-Verschlüsselung, vollständig auditierbar.",
    long: "Serverstandort 100% Schweiz (Zürich), AES-256-Verschlüsselung in transit und at rest, vollständiges Auditprotokoll für jeden Zugriff, AVV nach Art. 28 DSGVO inklusive. Keine Daten verlassen Schweizer Rechtsraum.",
    icon: (
      <FeatureIcon>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </FeatureIcon>
    ),
  },
  {
    id: "termine",
    title: "Terminbuchung & Rückruf",
    short:
      "Patienten buchen Termine direkt online. Automatische Erinnerungen reduzieren No-Shows um bis zu 40%.",
    long: "Online-Buchung über Ihre Praxis-Website oder einen Link, SMS- und E-Mail-Erinnerungen, einfaches Rückrufmanagement für Telefonanfragen. Ihre Praxis bleibt erreichbar, ohne dass Sie zusätzliches Personal binden müssen.",
    icon: (
      <FeatureIcon>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </FeatureIcon>
    ),
  },
  {
    id: "geraete",
    title: "Alle Geräte, auch offline",
    short:
      "iPad im Behandlungszimmer, Desktop am Empfang, Smartphone unterwegs. Funktioniert auch ohne Internet.",
    long: "Native Apps für iPad und Smartphone, Web-Oberfläche für Desktops. Lokaler Cache hält die Software auch bei Internetausfall voll funktionsfähig – sobald die Verbindung zurück ist, synchronisiert Yes-Doc verschlüsselt im Hintergrund.",
    icon: (
      <FeatureIcon>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </FeatureIcon>
    ),
  },
  {
    id: "migration",
    title: "Datenmigration in 1 Tag",
    short:
      "Unser Team übernimmt die komplette Migration Ihrer Bestandsdaten. Kein Datenverlust, kein Stress für Ihr Team.",
    long: "Persönlicher Migrations-Coach, Export aus allen gängigen Schweizer Systemen (Axon, Elexis, Medisoft u.v.m.), Validierung jedes übernommenen Datensatzes, parallele Testumgebung damit Ihre Praxis ohne Unterbruch weiterarbeiten kann.",
    icon: (
      <FeatureIcon>
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </FeatureIcon>
    ),
  },
  {
    id: "analytics",
    title: "Praxisanalysen & Berichte",
    short:
      "Einnahmen, Patientenfrequenz, häufige Diagnosen – übersichtlich aufbereitet für bessere Entscheidungen.",
    long: "Anonymisierte Auswertungen über Auslastung, Behandlungsdauer und Abrechnungsdurchsatz. Exportierbar als PDF für Steuerberater, Treuhänder oder die Praxisplanung. Keine Patientendaten, nur aggregierte Kennzahlen.",
    icon: (
      <FeatureIcon>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </FeatureIcon>
    ),
  },
];
