import { AlertTriangle } from "lucide-react";

export interface ArchivedNoticeProps {
  date: string;
}

export const ArchivedNotice = ({ date }: ArchivedNoticeProps) => {
  const year = new Date(date).getFullYear();

  return (
    <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 p-4 mb-8 rounded">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="font-semibold text-yellow-800 dark:text-yellow-400">
            Contenido archivado ({year})
          </p>
          <p className="text-sm text-yellow-700 dark:text-yellow-500">
            Este contenido está archivado y puede estar desactualizado. Las tecnologías, herramientas
            y mejores prácticas mencionadas pueden haber cambiado desde su publicación.
          </p>
        </div>
      </div>
    </div>
  );
};
