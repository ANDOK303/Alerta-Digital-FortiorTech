export interface CalificacionPlataforma {
    id_calificacion?: number;
    id_usuario: number;
    puntuacion: number;
    tipo_evaluacion?: string;
    comentario?: string;
    se_recomienda_sitio?: boolean;
    fecha_calificacion?: Date;
}