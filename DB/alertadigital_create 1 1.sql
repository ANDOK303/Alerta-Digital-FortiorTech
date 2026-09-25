create database if not exists alerta_digital_in5bv;
use alerta_digital_in5bv;

create table usuarios (
    id_usuario int auto_increment primary key,
    nombre_usuario varchar(50) not null unique,
    correo_electronico varchar(100) not null unique,
    contrasena varchar(255) not null,
    rol enum(
    "usuario", 
    "moderador", 
    "administrador") default "usuario",
    estado_cuenta enum(
    "activo", 
    "suspendido", 
    "inactivo") default "activo",
    fecha_registro datetime default current_timestamp
);

create table denuncias (
    id_denuncia int auto_increment primary key,
    id_usuario int null,
    titulo varchar(150) not null,
    descripcion text not null,
    tipo_ciberacoso varchar(50) not null,
    estado_denuncia enum(
    'pendiente', 
    'en_revision', 
    'atendida', 
    'descartada') default 'pendiente',
    nivel_prioridad enum(
    'baja', 
    'media', 
    'alta', 
    'urgente') default 'media',
    fecha_creacion datetime default current_timestamp,
    
    constraint fk_denuncias_usuarios foreign key (id_usuario) 
        references usuarios(id_usuario) 
        on delete set null
);

create table pruebas_denuncia (
    id_prueba int auto_increment primary key,
    id_denuncia int not null,
    url_archivo varchar(255) not null,
    tipo_archivo varchar(50) not null,
    tamano_bytes int not null,
    descripcion_evidencia varchar(200),
    fecha_subida datetime default current_timestamp,
    
    constraint fk_pruebas_denuncias foreign key (id_denuncia) 
        references denuncias(id_denuncia) 
        on delete cascade
);

create table categorias_recomendacion (
    id_categoria int auto_increment primary key,
    nombre_categoria varchar(100) not null unique,
    descripcion text,
    icono_css varchar(50),
    nivel_dificultad enum(
    'basico', 
    'intermedio', 
    'avanzado') default 'basico',
    es_activa boolean default true,
    fecha_creacion datetime default current_timestamp
);

create table recomendaciones (
    id_recomendacion int auto_increment primary key,
    id_categoria int not null,
    id_autor int not null,
    titulo varchar(150) not null,
    contenido_pasos text not null,
    plataforma_objetivo varchar(50) not null,
    es_destacado boolean default false,
    fecha_publicacion datetime default current_timestamp,
    
    constraint fk_recomendaciones_categorias foreign key (id_categoria) 
        references categorias_recomendacion(id_categoria) 
        on delete cascade,
        
    constraint fk_recomendaciones_usuarios foreign key (id_autor) 
        references usuarios(id_usuario) 
        on delete cascade
);

create table hilos_foro (
    id_hilo int auto_increment primary key,
    id_usuario int null,
    alias_anonimo varchar(50) default 'Anónimo',
    titulo varchar(150) not null,
    contenido_inicial text not null,
    estado_hilo enum(
    'abierto', 
    'cerrado', 
    'fijado') default 'abierto',
    total_respuestas int default 0,
    fecha_creacion datetime default current_timestamp,
    
    constraint fk_hilos_usuarios foreign key (id_usuario) 
        references usuarios(id_usuario) 
        on delete set null
);

create table publicaciones_foro (
    id_publicacion int auto_increment primary key,
    id_hilo int not null,
    id_usuario int null,
    alias_anonimo varchar(50) default 'Anónimo',
    mensaje text not null,
    url_imagen_adjunta varchar(255) null,
    fecha_publicacion datetime default current_timestamp,
    
    constraint fk_publicaciones_hilos foreign key (id_hilo) 
        references hilos_foro(id_hilo)
        on delete cascade,
        
    constraint fk_publicaciones_usuarios foreign key (id_usuario) 
        references usuarios(id_usuario) 
        on delete set null
);

create table calificaciones_plataforma (
    id_calificacion int auto_increment primary key,
    id_usuario int not null,
    puntuacion tinyint not null check (puntuacion between 1 and 5),
    tipo_evaluacion varchar(50) default 'General',
    comentario text,
    se_recomienda_sitio boolean default true,
    fecha_calificacion datetime default current_timestamp,
    
    constraint fk_calificaciones_usuarios foreign key (id_usuario) 
        references usuarios(id_usuario) 
        on delete cascade
);
ALTER TABLE usuarios ADD COLUMN foto_perfil VARCHAR(255) NULL;