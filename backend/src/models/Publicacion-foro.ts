export interface PublicacionForo {
    id_publicacion?: number;
    id_hilo: number;
    id_usuario?: number | null;
    alias_anonimo?: string;
    mensaje: string;
    url_imagen_adjunta?: string | null;
    fecha_publicacion?: Date;
}