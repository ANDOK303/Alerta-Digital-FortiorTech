export interface PruebaDenuncia {
    id_prueba?: number;
    id_denuncia: number;
    url_archivo: string;
    tipo_archivo: string;
    tamano_bytes: number;
    descripcion_evidencia?: string;
    fecha_subida?: Date;
}